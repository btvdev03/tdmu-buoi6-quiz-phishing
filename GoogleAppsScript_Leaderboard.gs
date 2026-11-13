/**
 * Google Apps Script - Bảng Xếp Hạng Live cho Web Game Buổi 6 (TDMU)
 * -------------------------------------------------------------------
 * Hướng dẫn nhanh:
 * 1. Tạo 1 Google Sheets mới -> đặt tên tùy ý (vd: "BangXepHang_Buoi6").
 * 2. Vào menu Extensions (Tiện ích mở rộng) -> Apps Script.
 * 3. Xóa code mặc định, dán toàn bộ nội dung file này vào và bấm Save.
 * 4. Bấm Deploy (Triển khai) -> New deployment -> Web app:
 *    - Execute as: Me (Tôi)
 *    - Who has access: Anyone (Bất kỳ ai)
 * 5. Copy URL Web App vừa tạo, dán vào meta.leaderboardEndpoint trong game_data.js
 *    (hoặc nhập trực tiếp ở giao diện Giáo viên trên Web Game).
 */

const SHEET_NAME = "BangXepHang";
const HEADERS = [
  "Timestamp",
  "StudentKey",
  "Name",
  "MSSV",
  "QuizScore",
  "QuizCorrect",
  "PhishingScore",
  "PhishingCorrect",
  "TotalScore",
  "DurationSec",
  "UpdatedAt",
];

/**
 * Lấy hoặc khởi tạo sheet BangXepHang kèm tiêu đề chuẩn.
 */
function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange
      .setFontWeight("bold")
      .setBackground("#1E3A8A")
      .setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Chuẩn hóa khóa định danh sinh viên để chống trùng lặp khi nộp lại.
 * Ưu tiên MSSV (viết hoa, bỏ khoảng trắng); nếu trống dùng tên chuẩn hóa.
 */
function buildStudentKey_(name, mssv) {
  const cleanMssv = String(mssv || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
  if (cleanMssv) {
    return "MSSV:" + cleanMssv;
  }
  const cleanName = String(name || "ANONYMOUS")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
  return "NAME:" + cleanName;
}

/**
 * Chuẩn hóa số nguyên không âm an toàn.
 */
function toSafeInt_(val, fallback) {
  const n = Number(val);
  if (!isFinite(n) || isNaN(n)) return fallback || 0;
  return Math.max(0, Math.round(n));
}

/**
 * Tạo phản hồi JSON (hỗ trợ cả JSONP nếu truyền ?callback=...).
 */
function jsonResponse_(obj, callbackName) {
  const jsonText = JSON.stringify(obj);
  if (callbackName && /^[a-zA-Z_$][0-9a-zA-Z_$.]*$/.test(callbackName)) {
    return ContentService.createTextOutput(callbackName + "(" + jsonText + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(jsonText)
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Đọc toàn bộ bảng xếp hạng, sắp xếp theo TotalScore giảm dần, DurationSec tăng dần.
 */
function readSortedLeaderboard_(sheet, limit) {
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];

  const values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  const list = values
    .filter((row) => String(row[2] || "").trim() !== "")
    .map((row) => ({
      timestamp: row[0] instanceof Date ? row[0].toISOString() : String(row[0] || ""),
      name: String(row[2] || "").trim(),
      mssv: String(row[3] || "").trim(),
      quizScore: toSafeInt_(row[4], 0),
      quizCorrect: toSafeInt_(row[5], 0),
      phishingScore: toSafeInt_(row[6], 0),
      phishingCorrect: toSafeInt_(row[7], 0),
      totalScore: toSafeInt_(row[8], 0),
      durationSec: toSafeInt_(row[9], 0),
      updatedAt: row[10] instanceof Date ? row[10].toISOString() : String(row[10] || ""),
    }));

  list.sort((a, b) => {
    if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
    if (a.durationSec !== b.durationSec) return a.durationSec - b.durationSec;
    return String(a.timestamp).localeCompare(String(b.timestamp));
  });

  const ranked = list.map((item, idx) =>
    Object.assign({ rank: idx + 1 }, item)
  );
  return limit > 0 ? ranked.slice(0, limit) : ranked;
}

/**
 * GET: Trả danh sách bảng xếp hạng JSON.
 * Tham số tùy chọn: ?limit=100
 */
function doGet(e) {
  try {
    const params = (e && e.parameter) || {};
    const limit = toSafeInt_(params.limit, 100);
    const sheet = getOrCreateSheet_();
    const entries = readSortedLeaderboard_(sheet, limit);
    return jsonResponse_(
      {
        ok: true,
        count: entries.length,
        updatedAt: new Date().toISOString(),
        leaderboard: entries,
      },
      params.callback
    );
  } catch (err) {
    return jsonResponse_(
      { ok: false, error: String(err && err.message ? err.message : err) },
      e && e.parameter && e.parameter.callback
    );
  }
}

/**
 * POST: Nhận điểm từ sinh viên (hỗ trợ cả JSON raw body và form-urlencoded).
 * Payload: { name, mssv, quizScore, quizCorrect, phishingScore, phishingCorrect, totalScore, durationSec, timestamp }
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    let payload = {};
    if (e && e.postData && e.postData.contents) {
      const raw = e.postData.contents.trim();
      if (raw.startsWith("{")) {
        payload = JSON.parse(raw);
      } else if (e.parameter) {
        payload = e.parameter;
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    }

    const name = String(payload.name || "").trim().slice(0, 80);
    if (!name) {
      return jsonResponse_({ ok: false, error: "Thiếu họ tên sinh viên (name)." });
    }

    const mssv = String(payload.mssv || "").trim().toUpperCase().slice(0, 30);
    const quizScore = toSafeInt_(payload.quizScore, 0);
    const quizCorrect = toSafeInt_(payload.quizCorrect, 0);
    const phishingScore = toSafeInt_(payload.phishingScore, 0);
    const phishingCorrect = toSafeInt_(payload.phishingCorrect, 0);
    const totalScore =
      payload.totalScore !== undefined
        ? toSafeInt_(payload.totalScore, quizScore + phishingScore)
        : quizScore + phishingScore;
    const durationSec = toSafeInt_(payload.durationSec, 0);
    const submittedAt = payload.timestamp ? String(payload.timestamp) : new Date().toISOString();
    const nowIso = new Date().toISOString();
    const studentKey = buildStudentKey_(name, mssv);

    const sheet = getOrCreateSheet_();
    const lastRow = sheet.getLastRow();
    let matchedRowIdx = -1;

    if (lastRow > 1) {
      const keys = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
      for (let i = 0; i < keys.length; i++) {
        if (String(keys[i][0] || "") === studentKey) {
          matchedRowIdx = i + 2;
          break;
        }
      }
    }

    let action = "inserted";
    if (matchedRowIdx !== -1) {
      const existing = sheet.getRange(matchedRowIdx, 1, 1, HEADERS.length).getValues()[0];
      const oldTotal = toSafeInt_(existing[8], 0);
      const oldDuration = toSafeInt_(existing[9], 999999);

      const isBetter =
        totalScore > oldTotal ||
        (totalScore === oldTotal && durationSec > 0 && durationSec < oldDuration);

      if (isBetter) {
        sheet.getRange(matchedRowIdx, 1, 1, HEADERS.length).setValues([
          [
            existing[0] || submittedAt,
            studentKey,
            name,
            mssv,
            quizScore,
            quizCorrect,
            phishingScore,
            phishingCorrect,
            totalScore,
            durationSec,
            nowIso,
          ],
        ]);
        action = "updated_best";
      } else {
        sheet.getRange(matchedRowIdx, 11).setValue(nowIso);
        action = "kept_existing_best";
      }
    } else {
      sheet.appendRow([
        submittedAt,
        studentKey,
        name,
        mssv,
        quizScore,
        quizCorrect,
        phishingScore,
        phishingCorrect,
        totalScore,
        durationSec,
        nowIso,
      ]);
      action = "inserted";
    }

    const entries = readSortedLeaderboard_(sheet, 0);
    const found = entries.find((item) => buildStudentKey_(item.name, item.mssv) === studentKey);

    return jsonResponse_({
      ok: true,
      action: action,
      rank: found ? found.rank : null,
      totalPlayers: entries.length,
    });
  } catch (err) {
    return jsonResponse_({
      ok: false,
      error: String(err && err.message ? err.message : err),
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

/**
 * Hàm chạy thử trực tiếp trong trình soạn thảo Apps Script để khởi tạo sheet BangXepHang.
 */
function testSetup() {
  const sheet = getOrCreateSheet_();
  Logger.log("Đã sẵn sàng sheet: " + sheet.getName());
}
