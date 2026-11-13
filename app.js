/* ==========================================================================
   Buổi 6: AI Mastery Quiz & Phishing Simulator (GitHub Pages + Online Class)
   Works on GitHub Pages (HTTPS) AND offline (file://)
   ========================================================================== */
(function () {
  "use strict";

  const CFG_STORAGE_KEY = "tdmu_buoi6_pages_cfg_v1";
  const LB_STORAGE_KEY = "tdmu_buoi6_pages_lb_v1";
  const PLAYER_STORAGE_KEY = "tdmu_buoi6_pages_player_v1";

  // --------------------------------------------------------------------------
  // 1. FALLBACK APP DATA (Used if ./game_data.js is missing)
  // --------------------------------------------------------------------------
  const FALLBACK_APP_DATA = {
    meta: {
      courseTitle: "Năng lực số · Chuyên đề Công nghệ số",
      sessionTitle: "Buổi 6: AI Mastery Quiz & Phishing Simulator",
      schoolName: "Trường ĐH Thủ Dầu Một · Trung tâm Chuyển đổi số",
      teacherPin: "2026",
      leaderboardEndpoint: ""
    },
    quizQuestions: [
      {
        id: "q-1",
        category: "Prompt 5 yếu tố",
        question: "Công thức viết Prompt chuẩn Master ở Buổi 6 gồm 5 yếu tố theo thứ tự nào?",
        options: [
          "Vai trò → Bối cảnh → Nhiệm vụ → Định dạng → Ràng buộc",
          "Chào hỏi → Câu hỏi → Độ dài → Ví dụ → Cảm ơn",
          "Từ khóa → Ngôn ngữ → Mục tiêu → Hình ảnh → Nguồn",
          "Tóm tắt → Dịch thuật → Phân tích → Kiểm tra → Xuất file"
        ],
        correctIndex: 0,
        timeLimitSec: 20,
        points: 100,
        explanation: "5 yếu tố gồm: Vai trò (Role), Bối cảnh (Context), Nhiệm vụ (Task), Định dạng (Format) và Ràng buộc (Constraints)."
      },
      {
        id: "q-2",
        category: "Prompt 5 yếu tố",
        question: "Trong Prompt: 'Giới hạn dưới 200 chữ, KHÔNG bịa số liệu, dùng giọng văn học thuật' thuộc yếu tố nào?",
        options: ["Vai trò (Role)", "Bối cảnh (Context)", "Định dạng (Format)", "Ràng buộc (Constraints)"],
        correctIndex: 3,
        timeLimitSec: 20,
        points: 100,
        explanation: "Các giới hạn độ dài, phong cách và điều cấm kỵ nằm ở phần Ràng buộc (Constraints)."
      },
      {
        id: "q-3",
        category: "Văn bản dài",
        question: "Quy trình 4 bước xử lý văn bản dài hiệu quả với AI là gì?",
        options: [
          "Copy hết 100 trang → Dán 1 lần → Nộp luôn → Xong",
          "Chia nhỏ → Tóm tắt phần → Kiểm chứng → Tổng hợp",
          "Dịch sang tiếng Anh → Hỏi lại tiếng Việt → Lưu PDF → In",
          "Yêu cầu AI tự tìm tài liệu → Tự trích dẫn APA → Nộp"
        ],
        correctIndex: 1,
        timeLimitSec: 22,
        points: 100,
        explanation: "Không đưa toàn bộ tài liệu dài 1 lần; hãy chia nhỏ theo mục, tóm tắt từng phần, kiểm chứng bản gốc rồi mới tổng hợp."
      },
      {
        id: "q-4",
        category: "AI Hallucination",
        question: "Hiện tượng AI tự tin trả lời mượt mà nhưng bịa đặt số liệu hoặc nguồn trích dẫn không có thật gọi là gì?",
        options: ["Prompt Injection", "AI Hallucination (Ảo giác AI)", "Phishing Attack", "Two-Factor Authentication"],
        correctIndex: 1,
        timeLimitSec: 20,
        points: 100,
        explanation: "AI Hallucination là khi mô hình ngôn ngữ tạo ra thông tin sai lệch nhưng trình bày rất thuyết phục."
      },
      {
        id: "q-5",
        category: "Đạo đức & Bảo mật AI",
        question: "Dữ liệu nào TUYỆT ĐỐI KHÔNG được dán vào công cụ AI công cộng (ChatGPT/Gemini miễn phí)?",
        options: [
          "Đề cương môn học công khai",
          "Dàn ý bài thuyết trình nhóm",
          "Mật khẩu, mã OTP, số CCCD, bảng điểm cá nhân",
          "Câu hỏi luyện tập tiếng Anh"
        ],
        correctIndex: 2,
        timeLimitSec: 20,
        points: 100,
        explanation: "Thông tin định danh cá nhân (CCCD, MSSV thật), mật khẩu, OTP tuyệt đối không nhập vào chatbot công cộng."
      },
      {
        id: "q-6",
        category: "Phishing A–F",
        question: "Khi thấy địa chỉ gửi là 'ctsv@tdmu-edu.info' thay vì '@tdmu.edu.vn', dấu hiệu cảnh báo thuộc tiêu chí nào?",
        options: ["A — Địa chỉ người gửi", "C — Liên kết ẩn", "D — Tệp đính kèm", "E — Dữ liệu yêu cầu"],
        correctIndex: 0,
        timeLimitSec: 20,
        points: 100,
        explanation: "Kiểm tra phần tên miền sau dấu @ thuộc bước A (Địa chỉ người gửi)."
      },
      {
        id: "q-7",
        category: "Phishing A–F",
        question: "Với đường link 'https://login.tdmu.edu.vn.verify-sso.cc/auth', tên miền gốc thực sự bạn đang truy cập là gì?",
        options: ["tdmu.edu.vn", "login.tdmu.edu.vn", "verify-sso.cc", "auth.tdmu"],
        correctIndex: 2,
        timeLimitSec: 25,
        points: 100,
        explanation: "Đây là bẫy tên miền phụ (subdomain trick): tên miền chính luôn nằm ngay trước dấu '/' đầu tiên, tức là verify-sso.cc!"
      },
      {
        id: "q-8",
        category: "Mã độc & Tệp đính kèm",
        question: "Tệp đính kèm nào sau đây có nguy cơ chứa mã độc Macro cao nhất khi nhận qua email lạ?",
        options: ["Lich_hoc.txt", "Danh_sach_hoc_bong.xlsm", "Thong_bao.png", "Slide_bai_giang.jpg"],
        correctIndex: 1,
        timeLimitSec: 20,
        points: 100,
        explanation: "Đuôi .xlsm là Excel có hỗ trợ Macro (VBA). Kẻ xấu thường dụ nạn nhân bấm 'Enable Content/Macro' để chạy mã độc."
      },
      {
        id: "q-9",
        category: "An toàn tài khoản",
        question: "Biện pháp nào hiệu quả nhất giúp bảo vệ Gmail/LMS kể cả khi bạn lỡ bị lộ mật khẩu?",
        options: [
          "Đổi hình nền máy tính",
          "Bật Xác thực 2 lớp (2FA bằng Authenticator/Passkey)",
          "Dùng cùng 1 mật khẩu dễ nhớ cho mọi trang",
          "Tắt trình duyệt sau khi dùng"
        ],
        correctIndex: 1,
        timeLimitSec: 20,
        points: 100,
        explanation: "2FA yêu cầu thêm mã xác thực từ điện thoại/khóa bảo mật nên chặn được phần lớn nguy cơ chiếm tài khoản."
      },
      {
        id: "q-10",
        category: "Phản xạ bảo mật",
        question: "Khi nhận tin nhắn Zalo từ 'Giảng viên' mượn tiền gấp và dặn 'đừng gọi điện thầy đang họp', bạn cần làm gì?",
        options: [
          "Chuyển khoản ngay để giúp thầy",
          "Bấm vào link QR thầy gửi để xem xác thực",
          "Dừng 10 giây, gọi điện thoại trực tiếp hoặc nhắn vào group lớp xác minh",
          "Gửi mã OTP để thầy tự rút"
        ],
        correctIndex: 2,
        timeLimitSec: 20,
        points: 100,
        explanation: "Luôn xác minh qua một kênh độc lập (gọi số điện thoại thật hoặc hỏi nhóm lớp) trước mọi yêu cầu tài chính."
      }
    ],
    phishingCases: [
      {
        id: "ph-1",
        channel: "email",
        title: "Email Học bổng Khuyến khích 3.500.000đ",
        senderName: "Phòng Công tác Sinh viên TDMU",
        senderAddress: "ctsv@tdmu-portal.info",
        subject: "[KHẨN] Xác nhận nhận Học bổng KKHT trị giá 3.500.000đ trước 21h",
        time: "Hôm nay, 19:10",
        bodyHtml: "<p>Chào bạn sinh viên,</p><p>Chúc mừng bạn trúng tuyển <strong>Học bổng Khuyến khích học tập trị giá 3.500.000đ</strong>. Vui lòng xác nhận tài khoản trong vòng <strong>02 giờ</strong> để tránh bị hủy suất.</p><p>Truy cập cổng xác nhận: <a href=\"#\" data-real-url=\"https://tdmu-edu-vn.support-xacminh.com/hocbong\">https://tdmu.edu.vn/hoc-bong-2026</a></p>",
        attachmentName: "",
        isPhishing: true,
        difficulty: "Dễ",
        breachPreview: {
          fakeUrl: "https://tdmu-edu-vn.support-xacminh.com/hocbong",
          stolenItems: [
            "Cookie phiên đăng nhập trình duyệt (Session Token)",
            "Họ tên, MSSV, số CCCD & Số tài khoản ngân hàng",
            "Mã OTP xác thực giao dịch chuyển tiền"
          ],
          riskTitle: "Chiếm đoạt tài khoản ngân hàng & đánh cắp danh tính!",
          riskDetail: "Trang web giả mạo giao diện cổng sinh viên để lừa nhập thông tin thẻ và mã OTP, từ đó kẻ gian rút sạch tiền trong tài khoản."
        },
        signs: {
          A: "Email gửi từ @tdmu-portal.info (không phải @tdmu.edu.vn).",
          B: "Hối thúc gấp trong 02 giờ kèm dọa hủy suất học bổng.",
          C: "Chữ hiển thị là tdmu.edu.vn nhưng URL thật dẫn tới support-xacminh.com.",
          D: "Không có tệp đính kèm, nhúng trực tiếp liên kết giả mạo.",
          E: "Trang đích đòi thông tin ngân hàng & mã OTP.",
          F: "Không bấm link; kiểm tra thông báo học bổng trực tiếp trên trang chủ tdmu.edu.vn."
        },
        takeaway: "Tin nhắn báo trúng tiền/học bổng mà hối xác nhận gấp là bẫy kinh điển."
      },
      {
        id: "ph-2",
        channel: "zalo",
        title: "Tin nhắn Zalo mạo danh Giảng viên điểm danh bù",
        senderName: "Thầy Minh - TT Chuyển đổi số",
        senderAddress: "Zalo SĐT lạ: 0918.xxx.402",
        subject: "Tin nhắn trực tiếp",
        time: "19:32 hôm nay",
        bodyHtml: "<p>Em ơi, hệ thống E-Learning đang lỗi nên 5 phút nữa thầy chốt danh sách điểm danh. Em bấm nhanh link dự phòng này: <a href=\"#\" data-real-url=\"https://diem-danh-tdmu.web-nhanh.top/qr\">https://elearning.tdmu.edu.vn/diem-danh-bu</a> rồi gửi thầy mã OTP 6 số vừa về điện thoại để đồng bộ nhé!</p>",
        attachmentName: "",
        isPhishing: true,
        difficulty: "Trung bình",
        breachPreview: {
          fakeUrl: "https://diem-danh-tdmu.web-nhanh.top/qr",
          stolenItems: [
            "Mã OTP 6 số chiếm quyền tài khoản Gmail/Zalo",
            "Thông tin đăng nhập tài khoản E-Learning & OneDrive",
            "Danh bạ bạn bè để tiếp tục đi lừa người khác"
          ],
          riskTitle: "Mất quyền kiểm soát tài khoản Zalo & Email trường!",
          riskDetail: "Kẻ gian dùng mã OTP của bạn để đăng nhập thiết bị mới, khóa bạn ra ngoài và mạo danh bạn đi vay tiền cả lớp."
        },
        signs: {
          A: "Nick Zalo SĐT lạ mới tạo, không nằm trong nhóm lớp chính thức.",
          B: "Hối thúc '5 phút nữa chốt danh sách' đánh vào nỗi sợ bị vắng học.",
          C: "URL thật là web-nhanh.top chứ không phải elearning.tdmu.edu.vn.",
          D: "Không có tệp đính kèm.",
          E: "Đòi mã OTP 6 số gửi về điện thoại.",
          F: "Gọi điện xác minh hoặc nhắn vào group lớp; tuyệt đối không đưa OTP cho ai."
        },
        takeaway: "Giảng viên thật không bao giờ xin mã OTP cá nhân của sinh viên."
      },
      {
        id: "ph-3",
        channel: "email",
        title: "Email nhắc hạn nộp Sản phẩm cuối khóa E-Learning",
        senderName: "Hệ thống E-Learning TDMU",
        senderAddress: "no-reply@tdmu.edu.vn",
        subject: "[E-Learning TDMU] Nhắc nhở hạn nộp Sản phẩm cuối khóa",
        time: "16:00 hôm nay",
        bodyHtml: "<p>Xin chào các bạn sinh viên,</p><p>Hệ thống xin nhắc lịch nộp Sản phẩm cuối khóa trước hạn chót trên lịch học phần. Xem chi tiết bài tập tại cổng chính thức: <a href=\"#\" data-real-url=\"https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042\">https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042</a></p><p><i>Nhà trường không bao giờ yêu cầu gửi mật khẩu hay OTP qua email.</i></p>",
        attachmentName: "",
        isPhishing: false,
        difficulty: "Khó (Hàng thật 100%)",
        breachPreview: {
          fakeUrl: "https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042",
          stolenItems: [],
          riskTitle: "Thông báo hợp lệ",
          riskDetail: "Đây là liên kết chính thức của hệ thống E-Learning TDMU."
        },
        signs: {
          A: "Địa chỉ chuẩn @tdmu.edu.vn của nhà trường.",
          B: "Giọng văn nhắc lịch bình thường, không hù dọa khóa tài khoản.",
          C: "URL hiển thị và URL thật khớp 100% trên elearning.tdmu.edu.vn.",
          D: "Không đính kèm file .xlsm/.exe đáng ngờ.",
          E: "Không đòi mật khẩu, OTP hay tiền.",
          F: "An toàn! Vẫn nên tự mở trình duyệt từ bookmark cá nhân để nộp bài."
        },
        takeaway: "Không nghi ngờ mù quáng: kiểm tra đủ A–F để nhận diện đúng thông báo thật."
      },
      {
        id: "ph-4",
        channel: "email",
        title: "File Excel 'Danh sách Cảnh báo học vụ 2026'",
        senderName: "Ban Quản Lý Đào Tạo",
        senderAddress: "thongbao@tdmu-daotao.edu-vn.org",
        subject: "KHẨN: Danh sách sinh viên bị cảnh báo học vụ & khóa cổng ĐKMH",
        time: "20:05 hôm nay",
        bodyHtml: "<p>Thông báo tới sinh viên,</p><p>Một số sinh viên nằm trong danh sách cảnh báo học vụ sẽ bị khóa cổng đăng ký môn ngày mai. Vui lòng tải tệp đính kèm bên dưới và bấm <strong>Enable Content / Enable Macro</strong> khi mở Excel để xem MSSV.</p>",
        attachmentName: "Danh_sach_canh_bao_hoc_vu_2026.xlsm",
        isPhishing: true,
        difficulty: "Trung bình",
        breachPreview: {
          fakeUrl: "file://local/Danh_sach_canh_bao_hoc_vu_2026.xlsm (Macro Payload)",
          stolenItems: [
            "Toàn bộ mật khẩu đã lưu trên Chrome / Edge",
            "Token đăng nhập Facebook, Gmail, Discord",
            "Mã hóa dữ liệu đồ án trên ổ cứng (Ransomware)"
          ],
          riskTitle: "Máy tính vừa nhiễm mã độc từ Excel Macro (.xlsm)!",
          riskDetail: "Khi mở file .xlsm và bật Macro, script PowerShell ngầm chạy để đánh cắp mật khẩu hoặc mã hóa toàn bộ file tài liệu học tập."
        },
        signs: {
          A: "Tên miền giả @tdmu-daotao.edu-vn.org (đuôi .org).",
          B: "Đánh vào nỗi sợ bị cảnh báo học vụ & khóa cổng đăng ký môn.",
          C: "Không dùng link web mà gài bẫy tải tệp đính kèm.",
          D: "File .xlsm chứa Macro và dụ bấm Enable Macro — dấu hiệu phát tán mã độc.",
          E: "Macro đánh cắp mật khẩu lưu trên máy tính.",
          F: "Tuyệt đối không tải/không bật Macro; xóa email và báo IT trường."
        },
        takeaway: "Thấy file .xlsm / .exe / .scr hoặc đòi 'Enable Macro' là mã độc 100%."
      },
      {
        id: "ph-5",
        channel: "lms",
        title: "Ưu đãi ChatGPT Plus & Gemini Pro miễn phí 12 tháng",
        senderName: "Liên minh AI Giáo dục",
        senderAddress: "support@edu-ai-vietnam.org",
        subject: "[Ưu đãi TDMU] Nhận gói ChatGPT Plus miễn phí bằng Email sinh viên",
        time: "18:45 hôm nay",
        bodyHtml: "<p>Chúc mừng sinh viên TDMU! Chỉ còn <strong>14 suất cuối cùng</strong> nhận gói ChatGPT Plus &amp; Gemini Pro miễn phí 1 năm. Đăng nhập SSO bằng Email trường và mật khẩu hiện tại tại: <a href=\"#\" data-real-url=\"https://login.tdmu.edu.vn.verify-sso.cc/oauth\">https://login.tdmu.edu.vn/ai-student-pack</a></p>",
        attachmentName: "",
        isPhishing: true,
        difficulty: "Khó",
        breachPreview: {
          fakeUrl: "https://login.tdmu.edu.vn.verify-sso.cc/oauth",
          stolenItems: [
            "Email sinh viên (@student.tdmu.edu.vn)",
            "Mật khẩu tài khoản Microsoft/Google SSO trường",
            "Toàn bộ file trên OneDrive / Google Drive cá nhân"
          ],
          riskTitle: "Lộ toàn bộ tài khoản Email & Lưu trữ đám mây trường!",
          riskDetail: "Tên miền thật là verify-sso.cc (chiêu subdomain trick). Khi bạn nhập mật khẩu SSO, kẻ xấu chiếm ngay email trường và kho bài tập."
        },
        signs: {
          A: "Đơn vị tự xưng gửi từ tên miền lạ edu-ai-vietnam.org.",
          B: "Tạo khan hiếm giả ('chỉ còn 14 suất cuối').",
          C: "Bẫy tên miền phụ: login.tdmu.edu.vn.verify-sso.cc — tên miền gốc là verify-sso.cc!",
          D: "Trang đăng nhập giả (Credential Harvesting).",
          E: "Đòi nhập Email và Mật khẩu SSO trường.",
          F: "Đọc kỹ tên miền trước dấu '/' đầu tiên; kiểm tra tin ưu đãi trên tdmu.edu.vn."
        },
        takeaway: "Luôn đọc tên miền ngay trước dấu '/' đầu tiên để tránh bẫy tên miền phụ."
      },
      {
        id: "ph-6",
        channel: "zalo",
        title: "Zalo OA tích vàng thông báo bảo trì & nhắc bật 2FA",
        senderName: "Trung tâm Chuyển đổi số TDMU",
        senderAddress: "Zalo Official Account (Đã xác thực tích vàng)",
        subject: "Thông báo bảo trì định kỳ",
        time: "17:00 hôm nay",
        bodyHtml: "<p><b>[THÔNG BÁO CHÍNH THỨC]</b></p><p>Trung tâm bảo trì hệ thống từ 00h00–02h00 sáng Chủ nhật. Sinh viên không cần xác minh thông tin. Xem hướng dẫn bật 2FA tại: <a href=\"#\" data-real-url=\"https://tdmu.edu.vn/huong-dan-bat-2fa\">https://tdmu.edu.vn/huong-dan-bat-2fa</a></p>",
        attachmentName: "",
        isPhishing: false,
        difficulty: "Khó (Hàng thật 100%)",
        breachPreview: {
          fakeUrl: "https://tdmu.edu.vn/huong-dan-bat-2fa",
          stolenItems: [],
          riskTitle: "Thông báo chính thức an toàn",
          riskDetail: "Kênh Zalo OA có tích vàng và link trỏ về đúng tdmu.edu.vn."
        },
        signs: {
          A: "Zalo OA có tích vàng xác thực chính chủ.",
          B: "Không hối thúc, nêu rõ không cần thao tác xác minh.",
          C: "Link hiển thị và URL thật đều là tdmu.edu.vn.",
          D: "Không có tệp đính kèm lạ.",
          E: "Không yêu cầu mật khẩu hay OTP.",
          F: "Tin nhắn thật, an toàn!"
        },
        takeaway: "Phản xạ chuẩn là bình tĩnh kiểm tra đủ 6 tiêu chí A–F."
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 2. HELPERS (XSS Sanitization, Formatting, Download)
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sanitizeRichHtml(dirtyHtml) {
    if (!dirtyHtml) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${String(dirtyHtml)}</div>`, "text/html");
    const root = doc.body.firstElementChild;
    const allowed = new Set(["P", "BR", "B", "STRONG", "I", "EM", "U", "UL", "OL", "LI", "DIV", "SPAN", "A", "CODE"]);

    function walk(node) {
      for (const child of Array.from(node.childNodes)) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (!allowed.has(child.tagName)) {
            if (["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "SVG"].includes(child.tagName)) {
              child.remove();
            } else {
              child.replaceWith(doc.createTextNode(child.textContent || ""));
            }
            continue;
          }
          for (const attr of Array.from(child.attributes)) {
            const n = attr.name.toLowerCase();
            if (child.tagName === "A" && (n === "href" || n === "data-real-url")) {
              if (/^(javascript|vbscript|data):/i.test(attr.value.trim())) {
                child.removeAttribute(attr.name);
              }
            } else {
              child.removeAttribute(attr.name);
            }
          }
          if (child.tagName === "A") {
            const realUrl = child.getAttribute("data-real-url") || child.getAttribute("href") || "";
            if (realUrl && !/^(javascript|vbscript|data):/i.test(realUrl)) {
              child.setAttribute("data-real-url", realUrl);
            }
            child.setAttribute("href", "#");
          }
          walk(child);
        } else if (child.nodeType === Node.COMMENT_NODE) {
          child.remove();
        }
      }
    }
    if (root) {
      walk(root);
      return root.innerHTML;
    }
    return escapeHtml(dirtyHtml);
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function genId(prefix) {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  }

  function showToast(msg, type = "info") {
    const box = document.getElementById("toastContainer");
    if (!box) return;
    const el = document.createElement("div");
    el.className = `toast toast-${type}`;
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(() => el.remove(), 3400);
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // --------------------------------------------------------------------------
  // 3. AUDIO & CONFETTI ENGINES (WebAudio API — Offline & HTTPS Ready)
  // --------------------------------------------------------------------------
  const AudioEngine = {
    ctx: null,
    getCtx() {
      if (state.muted) return null;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!this.ctx) this.ctx = new AC();
      if (this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
      return this.ctx;
    },
    tone(freq, dur, type = "sine", vol = 0.14, delay = 0) {
      const ctx = this.getCtx();
      if (!ctx) return;
      const t = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(vol, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + dur + 0.02);
    },
    tick() {
      this.tone(860, 0.06, "triangle", 0.1);
    },
    correct() {
      this.tone(523.25, 0.11, "triangle", 0.16, 0);
      this.tone(659.25, 0.13, "triangle", 0.16, 0.08);
      this.tone(783.99, 0.24, "triangle", 0.18, 0.16);
    },
    wrong() {
      this.tone(240, 0.16, "sawtooth", 0.1, 0);
      this.tone(185, 0.24, "sawtooth", 0.1, 0.14);
    },
    safe() {
      this.tone(587.33, 0.12, "sine", 0.15, 0);
      this.tone(880, 0.25, "triangle", 0.16, 0.1);
    },
    siren() {
      // Cyber breach alarm siren
      for (let i = 0; i < 3; i++) {
        this.tone(720, 0.16, "sawtooth", 0.16, i * 0.34);
        this.tone(480, 0.16, "sawtooth", 0.16, i * 0.34 + 0.17);
      }
    },
    fanfare() {
      [523.25, 659.25, 783.99, 1046.5].forEach((n, idx) => {
        this.tone(n, 0.26, "triangle", 0.17, idx * 0.1);
      });
    }
  };

  const Confetti = {
    animId: null,
    launch() {
      const canvas = document.getElementById("confettiCanvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const colors = ["#1E3A8A", "#0D9488", "#F59E0B", "#EF4444", "#22C55E", "#38BDF8"];
      const particles = Array.from({ length: 130 }, () => ({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 180,
        w: 7 + Math.random() * 6,
        h: 5 + Math.random() * 5,
        vx: (Math.random() - 0.5) * 5,
        vy: 3 + Math.random() * 5,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      if (this.animId) cancelAnimationFrame(this.animId);
      const t0 = performance.now();
      const frame = (now) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.08;
          p.rot += p.vRot;
          if (p.y < canvas.height + 30) alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
        if (alive && now - t0 < 4000) this.animId = requestAnimationFrame(frame);
        else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          this.animId = null;
        }
      };
      this.animId = requestAnimationFrame(frame);
    }
  };

  // --------------------------------------------------------------------------
  // 4. DATA NORMALIZATION & PERSISTENCE
  // --------------------------------------------------------------------------
  function getDefaultData() {
    const raw = window.APP_DATA && typeof window.APP_DATA === "object" ? window.APP_DATA : FALLBACK_APP_DATA;
    return normalizeAppData(raw);
  }

  function normalizeAppData(raw) {
    const base = deepClone(FALLBACK_APP_DATA);
    const src = raw && typeof raw === "object" ? raw : {};

    const meta = Object.assign({}, base.meta, src.meta || {});
    meta.teacherPin = meta.teacherPin !== undefined ? String(meta.teacherPin) : "2026";
    meta.leaderboardEndpoint = String(meta.leaderboardEndpoint || "").trim();

    const quizQuestions = (Array.isArray(src.quizQuestions) && src.quizQuestions.length ? src.quizQuestions : base.quizQuestions).map((q, i) => ({
      id: q.id || `q-${i + 1}`,
      category: String(q.category || "Tổng hợp"),
      question: String(q.question || ""),
      options: Array.isArray(q.options) && q.options.length === 4 ? q.options.map((o) => String(o)) : ["A", "B", "C", "D"],
      correctIndex: Math.min(3, Math.max(0, Number(q.correctIndex) || 0)),
      timeLimitSec: Math.max(5, Number(q.timeLimitSec) || 20),
      points: Math.max(10, Number(q.points) || 100),
      explanation: String(q.explanation || "")
    }));

    const phishingCases = (Array.isArray(src.phishingCases) && src.phishingCases.length ? src.phishingCases : base.phishingCases).map((c, i) => ({
      id: c.id || `ph-${i + 1}`,
      channel: ["email", "zalo", "lms"].includes(c.channel) ? c.channel : "email",
      title: String(c.title || `Tình huống #${i + 1}`),
      senderName: String(c.senderName || ""),
      senderAddress: String(c.senderAddress || ""),
      subject: String(c.subject || ""),
      time: String(c.time || ""),
      bodyHtml: String(c.bodyHtml || ""),
      attachmentName: String(c.attachmentName || ""),
      isPhishing: Boolean(c.isPhishing),
      difficulty: String(c.difficulty || "Trung bình"),
      breachPreview: {
        fakeUrl: String(c.breachPreview?.fakeUrl || "http://phish-trap.example.xyz"),
        stolenItems: Array.isArray(c.breachPreview?.stolenItems) ? c.breachPreview.stolenItems.map((x) => String(x)) : [],
        riskTitle: String(c.breachPreview?.riskTitle || "Nguy cơ rò rỉ tài khoản & dữ liệu cá nhân!"),
        riskDetail: String(c.breachPreview?.riskDetail || "Liên kết hoặc tệp giả mạo có thể đánh cắp phiên đăng nhập, mật khẩu hoặc cài mã độc.")
      },
      signs: {
        A: String(c.signs?.A || ""),
        B: String(c.signs?.B || ""),
        C: String(c.signs?.C || ""),
        D: String(c.signs?.D || ""),
        E: String(c.signs?.E || ""),
        F: String(c.signs?.F || "")
      },
      takeaway: String(c.takeaway || "")
    }));

    return { meta, quizQuestions, phishingCases };
  }

  function loadAppState() {
    let data = getDefaultData();
    let leaderboard = [];
    let player = { name: "", mssv: "" };

    try {
      const cfgRaw = localStorage.getItem(CFG_STORAGE_KEY);
      if (cfgRaw) data = normalizeAppData(JSON.parse(cfgRaw));
    } catch (e) { /* ignore */ }

    try {
      const lbRaw = localStorage.getItem(LB_STORAGE_KEY);
      if (lbRaw) {
        const arr = JSON.parse(lbRaw);
        if (Array.isArray(arr)) leaderboard = arr;
      }
    } catch (e) { /* ignore */ }

    try {
      const pRaw = localStorage.getItem(PLAYER_STORAGE_KEY);
      if (pRaw) {
        const p = JSON.parse(pRaw);
        if (p && p.name) player = { name: String(p.name), mssv: String(p.mssv || "") };
      }
    } catch (e) { /* ignore */ }

    return {
      data,
      leaderboard,
      player,
      muted: false,
      activeView: "entry",
      teacherUnlocked: false,
      teacherTab: "import",
      session: null,
      quizIntervalId: null
    };
  }

  const state = loadAppState();

  function saveConfig() {
    try {
      localStorage.setItem(CFG_STORAGE_KEY, JSON.stringify(state.data));
    } catch (e) {
      showToast("Không lưu được cấu hình vào trình duyệt.", "warning");
    }
  }

  function saveLeaderboard() {
    try {
      localStorage.setItem(LB_STORAGE_KEY, JSON.stringify(state.leaderboard));
    } catch (e) { /* ignore */ }
  }

  function savePlayerProfile() {
    try {
      localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(state.player));
    } catch (e) { /* ignore */ }
  }

  // --------------------------------------------------------------------------
  // 5. NAVIGATION & TOPBAR
  // --------------------------------------------------------------------------
  function showView(viewName) {
    if (viewName !== "quiz") stopQuizTimer();
    state.activeView = viewName;
    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === `view-${viewName}`);
    });
    const backBtn = document.getElementById("btnBackHome");
    if (backBtn) backBtn.classList.toggle("hidden", viewName === "entry");

    if (viewName === "entry") renderEntryView();
    else if (viewName === "leaderboard") renderLeaderboardView();
    else if (viewName === "teacher") renderTeacherView();
  }

  function renderHeaderMeta() {
    document.getElementById("headerSchool").textContent = state.data.meta.schoolName;
    document.getElementById("headerSession").textContent = state.data.meta.sessionTitle;
    document.getElementById("topLeaderboardCount").textContent = String(state.leaderboard.length);

    const onIcon = document.getElementById("iconSoundOn");
    const offIcon = document.getElementById("iconSoundOff");
    if (onIcon && offIcon) {
      onIcon.classList.toggle("hidden", state.muted);
      offIcon.classList.toggle("hidden", !state.muted);
    }
  }

  function renderEntryView() {
    renderHeaderMeta();
    document.getElementById("entryCourseBadge").textContent = state.data.meta.courseTitle;
    document.getElementById("entrySessionTitle").textContent = state.data.meta.sessionTitle;

    const qCount = state.data.quizQuestions.length;
    const pCount = state.data.phishingCases.length;
    document.getElementById("countComboQuiz").textContent = String(qCount);
    document.getElementById("countComboPhish").textContent = String(pCount);
    document.getElementById("countOnlyQuiz").textContent = String(qCount);
    document.getElementById("countOnlyPhish").textContent = String(pCount);

    const nameInput = document.getElementById("inputPlayerName");
    const mssvInput = document.getElementById("inputPlayerMssv");
    if (nameInput && !nameInput.value && state.player.name) nameInput.value = state.player.name;
    if (mssvInput && !mssvInput.value && state.player.mssv) mssvInput.value = state.player.mssv;

    const syncPill = document.getElementById("syncStatusPill");
    if (syncPill) {
      if (state.data.meta.leaderboardEndpoint) {
        syncPill.classList.remove("hidden");
        syncPill.textContent = "☁️ Đã kết nối Bảng Xếp Hạng Online của lớp";
      } else {
        syncPill.classList.add("hidden");
      }
    }
  }

  // --------------------------------------------------------------------------
  // 6. GAME SESSION START & QUIZ ENGINE
  // --------------------------------------------------------------------------
  function startGameSession(mode) {
    const nameEl = document.getElementById("inputPlayerName");
    const mssvEl = document.getElementById("inputPlayerMssv");
    const name = nameEl.value.trim();
    const mssv = mssvEl.value.trim();

    if (!name) {
      nameEl.classList.remove("input-error");
      void nameEl.offsetWidth;
      nameEl.classList.add("input-error");
      nameEl.focus();
      showToast("Vui lòng nhập Họ và Tên trước khi bắt đầu!", "warning");
      return;
    }

    if (mode !== "phishing" && !state.data.quizQuestions.length) {
      showToast("Chưa có câu hỏi Quiz nào!", "error");
      return;
    }
    if (mode !== "quiz" && !state.data.phishingCases.length) {
      showToast("Chưa có tình huống Phishing nào!", "error");
      return;
    }

    state.player = { name, mssv };
    savePlayerProfile();

    state.session = {
      id: genId("run"),
      mode, // "combo" | "quiz" | "phishing"
      name,
      mssv: mssv || "Tự do",
      startedAt: Date.now(),
      quizIndex: 0,
      quizScore: 0,
      quizCorrect: 0,
      quizTotal: mode === "phishing" ? 0 : state.data.quizQuestions.length,
      streak: 0,
      quizAnswered: false,
      phishIndex: 0,
      phishScore: 0,
      phishCorrect: 0,
      phishTotal: mode === "quiz" ? 0 : state.data.phishingCases.length,
      phishResolved: false,
      lastResultEntry: null
    };

    if (mode === "phishing") {
      showView("phishing");
      renderPhishingCase();
    } else {
      showView("quiz");
      renderQuizQuestion();
    }
  }

  function stopQuizTimer() {
    if (state.quizIntervalId) {
      clearInterval(state.quizIntervalId);
      state.quizIntervalId = null;
    }
  }

  function renderQuizQuestion() {
    stopQuizTimer();
    const s = state.session;
    const q = state.data.quizQuestions[s.quizIndex];
    if (!q) {
      finishOrProceedFromQuiz();
      return;
    }
    s.quizAnswered = false;

    document.getElementById("quizAvatar").textContent = s.name.charAt(0).toUpperCase();
    document.getElementById("quizPlayerLabel").textContent = s.name;
    document.getElementById("quizCategoryLabel").textContent = q.category;
    document.getElementById("quizProgressLabel").textContent = `${s.quizIndex + 1} / ${s.quizTotal}`;
    document.getElementById("quizStreakLabel").textContent = `🔥 ${s.streak}`;
    document.getElementById("quizScoreLabel").textContent = String(s.quizScore);
    document.getElementById("quizQuestionText").textContent = q.question;

    const feedbackBox = document.getElementById("quizFeedbackBox");
    feedbackBox.classList.add("hidden");
    feedbackBox.classList.remove("is-correct", "is-wrong");

    const letters = ["A", "B", "C", "D"];
    const grid = document.getElementById("quizOptionsGrid");
    grid.innerHTML = q.options
      .map(
        (opt, idx) => `
      <button type="button" class="quiz-opt-btn opt-${idx}" data-opt-idx="${idx}">
        <span class="opt-letter">${letters[idx]}</span>
        <span>${escapeHtml(opt)}</span>
      </button>`
      )
      .join("");

    const totalMs = q.timeLimitSec * 1000;
    const qStart = performance.now();
    s.currentQStart = qStart;
    s.currentQTotalMs = totalMs;

    const fillEl = document.getElementById("quizTimerFill");
    const secEl = document.getElementById("quizTimerSec");
    const statusEl = document.getElementById("quizTimerStatus");
    fillEl.style.width = "100%";
    fillEl.classList.remove("low");
    secEl.classList.remove("low");
    secEl.textContent = `${q.timeLimitSec}s`;
    statusEl.textContent = "Đang đếm ngược... (Trả lời nhanh nhận +50đ tốc độ)";

    let lastWholeSec = q.timeLimitSec;
    state.quizIntervalId = setInterval(() => {
      const elapsed = performance.now() - qStart;
      const remMs = Math.max(0, totalMs - elapsed);
      const pct = (remMs / totalMs) * 100;
      const secLeft = Math.ceil(remMs / 1000);

      fillEl.style.width = `${pct.toFixed(1)}%`;
      secEl.textContent = `${secLeft}s`;

      const isLow = secLeft <= 5;
      fillEl.classList.toggle("low", isLow);
      secEl.classList.toggle("low", isLow);

      if (secLeft !== lastWholeSec && secLeft > 0 && secLeft <= 5) {
        AudioEngine.tick();
      }
      lastWholeSec = secLeft;

      if (remMs <= 0) {
        stopQuizTimer();
        handleQuizAnswer(-1);
      }
    }, 80);
  }

  function handleQuizAnswer(chosenIndex) {
    const s = state.session;
    if (!s || s.quizAnswered) return;
    s.quizAnswered = true;
    stopQuizTimer();

    const q = state.data.quizQuestions[s.quizIndex];
    const elapsed = performance.now() - s.currentQStart;
    const remMs = Math.max(0, s.currentQTotalMs - elapsed);
    const isCorrect = chosenIndex === q.correctIndex;

    let earned = 0;
    let speedBonus = 0;
    if (isCorrect) {
      speedBonus = Math.round(50 * (remMs / s.currentQTotalMs));
      earned = q.points + speedBonus;
      s.quizScore += earned;
      s.quizCorrect += 1;
      s.streak += 1;
      AudioEngine.correct();
    } else {
      s.streak = 0;
      AudioEngine.wrong();
    }

    document.getElementById("quizStreakLabel").textContent = `🔥 ${s.streak}`;
    document.getElementById("quizScoreLabel").textContent = String(s.quizScore);
    document.getElementById("quizTimerStatus").textContent = chosenIndex === -1 ? "⏰ Hết giờ!" : "Đã chốt đáp án";

    document.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
      const idx = Number(btn.dataset.optIdx);
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add("opt-correct");
      } else if (idx === chosenIndex && !isCorrect) {
        btn.classList.add("opt-wrong");
      } else {
        btn.classList.add("opt-dim");
      }
    });

    const fbBox = document.getElementById("quizFeedbackBox");
    const fbTitle = document.getElementById("quizFeedbackTitle");
    const fbPts = document.getElementById("quizFeedbackPoints");
    const fbExp = document.getElementById("quizFeedbackExplain");
    const nextBtn = document.getElementById("btnQuizNext");

    fbBox.classList.remove("hidden");
    fbBox.classList.add(isCorrect ? "is-correct" : "is-wrong");

    if (isCorrect) {
      fbTitle.textContent = `🎯 Chính xác! (+${q.points}đ gốc + ${speedBonus}đ tốc độ)`;
      fbPts.textContent = `+${earned}đ`;
    } else if (chosenIndex === -1) {
      fbTitle.textContent = "⏰ Hết thời gian trả lời!";
      fbPts.textContent = "+0đ";
    } else {
      fbTitle.textContent = "❌ Chưa chính xác!";
      fbPts.textContent = "+0đ";
    }
    fbExp.textContent = q.explanation || "";

    const isLastQuiz = s.quizIndex >= s.quizTotal - 1;
    if (isLastQuiz) {
      nextBtn.textContent = s.mode === "combo" ? "🛡️ Chuyển sang Phishing Simulator →" : "🏆 Xem Kết Quả & Xếp Hạng";
    } else {
      nextBtn.textContent = "Câu tiếp theo →";
    }
  }

  function finishOrProceedFromQuiz() {
    const s = state.session;
    if (s.quizIndex < s.quizTotal - 1) {
      s.quizIndex += 1;
      renderQuizQuestion();
    } else if (s.mode === "combo") {
      showView("phishing");
      renderPhishingCase();
    } else {
      completeSession();
    }
  }

  // --------------------------------------------------------------------------
  // 7. PHISHING SIMULATOR ("BẤM VÀO LÀ BUNG CẢNH BÁO THẬT!")
  // --------------------------------------------------------------------------
  function renderPhishingCase() {
    const s = state.session;
    const c = state.data.phishingCases[s.phishIndex];
    if (!c) {
      completeSession();
      return;
    }
    s.phishResolved = false;

    document.getElementById("phishAvatar").textContent = s.name.charAt(0).toUpperCase();
    document.getElementById("phishPlayerLabel").textContent = s.name;
    document.getElementById("phishCaseTitle").textContent = c.title;
    document.getElementById("phishProgressLabel").textContent = `${s.phishIndex + 1} / ${s.phishTotal}`;
    document.getElementById("phishDiffLabel").textContent = c.difficulty;
    document.getElementById("phishTotalScoreLabel").textContent = String(s.quizScore + s.phishScore);

    // Enable action buttons
    const trustBtn = document.getElementById("btnPhishTrust");
    const blockBtn = document.getElementById("btnPhishBlock");
    trustBtn.disabled = false;
    blockBtn.disabled = false;

    const safeBody = sanitizeRichHtml(c.bodyHtml);
    const attachHtml = c.attachmentName
      ? `<button type="button" class="sim-attachment-bar" id="btnSimAttachment" title="Bấm để mở/tải tệp đính kèm">
           <span>📎 ${escapeHtml(c.attachmentName)}</span>
           <span style="font-size:0.75rem;opacity:0.85;">(Bấm để mở)</span>
         </button>`
      : "";

    const initial = escapeHtml((c.senderName || "U").trim().charAt(0).toUpperCase());
    let skinHtml = "";
    if (c.channel === "zalo") {
      skinHtml = `
        <div class="sim-zalo-head">
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="sim-ava" style="background:#fff;color:#0068FF;">${initial}</div>
            <div>
              <div style="font-weight:800;">${escapeHtml(c.senderName)}</div>
              <div style="font-size:0.76rem;opacity:0.9;">${escapeHtml(c.senderAddress)}</div>
            </div>
          </div>
          <span style="font-size:0.76rem;font-weight:800;background:rgba(255,255,255,0.2);padding:3px 8px;border-radius:6px;">ZALO</span>
        </div>
        <div class="sim-zalo-wrap">
          <div class="sim-zalo-bubble">
            <div class="sim-body" style="padding:0;">${safeBody}</div>
            <div style="font-size:0.75rem;color:#64748B;margin-top:8px;">${escapeHtml(c.time)}</div>
          </div>
          ${attachHtml ? `<div style="margin-top:12px;">${attachHtml}</div>` : ""}
        </div>`;
    } else if (c.channel === "lms") {
      skinHtml = `
        <div class="sim-lms-head">
          <span>🎓 CỔNG THÔNG TIN TDMU</span>
          <span style="font-size:0.76rem;background:rgba(255,255,255,0.2);padding:3px 8px;border-radius:6px;">LMS / PORTAL</span>
        </div>
        <div class="sim-lms-url">🔒 ${escapeHtml(c.senderAddress)}</div>
        <div class="sim-email-head">
          <h3 class="sim-subject">${escapeHtml(c.subject)}</h3>
          <div style="font-size:0.85rem;color:#475569;">Người gửi: <strong>${escapeHtml(c.senderName)}</strong> · ${escapeHtml(c.time)}</div>
        </div>
        <div class="sim-body">${safeBody}</div>
        ${attachHtml}`;
    } else {
      skinHtml = `
        <div class="sim-email-bar">
          <div class="dots"><span></span><span></span><span></span></div>
          <span>Hộp thư đến · Email Simulator</span>
          <strong>EMAIL</strong>
        </div>
        <div class="sim-email-head">
          <h3 class="sim-subject">${escapeHtml(c.subject)}</h3>
          <div class="sim-sender">
            <div class="sim-sender-left">
              <div class="sim-ava">${initial}</div>
              <div>
                <div style="font-weight:800;">${escapeHtml(c.senderName)}</div>
                <span class="sim-addr">&lt;${escapeHtml(c.senderAddress)}&gt;</span>
              </div>
            </div>
            <span style="font-size:0.82rem;color:#64748B;">${escapeHtml(c.time)}</span>
          </div>
        </div>
        <div class="sim-body">${safeBody}</div>
        ${attachHtml}`;
    }

    document.getElementById("phishSimShell").innerHTML = `
      ${skinHtml}
      <div class="link-inspector" id="linkInspectorBar">
        <span class="inspector-tag">🔎 SOI LINK:</span>
        <span class="inspector-url" id="linkInspectorUrl">Rê chuột vào liên kết để kiểm tra URL thật...</span>
      </div>`;

    document.getElementById("phishResultPanel").innerHTML = `
      <div class="phish-waiting-box">
        <div style="font-size:2.4rem;margin-bottom:8px;">🕵️‍♂️</div>
        <h3>Hãy kiểm tra kỹ trước khi quyết định!</h3>
        <p class="muted">Kiểm tra <strong>người gửi</strong>, rê chuột soi <strong>URL thật</strong>, xem <strong>file đính kèm</strong> và <strong>dữ liệu bị yêu cầu</strong>.</p>
        <p class="muted" style="font-size:0.86rem;">⚠️ Nếu bạn bấm nhầm vào link lừa đảo hoặc tệp đính kèm độc hại trong khung bên trái, cảnh báo xâm nhập sẽ kích hoạt ngay lập tức!</p>
      </div>`;
  }

  function resolvePhishingInteraction(actionType, clickedUrl = "") {
    // actionType: "click_trap" | "trust" | "block"
    const s = state.session;
    const c = state.data.phishingCases[s.phishIndex];
    if (!c || s.phishResolved) return;

    s.phishResolved = true;
    document.getElementById("btnPhishTrust").disabled = true;
    document.getElementById("btnPhishBlock").disabled = true;

    const TRUST_POINTS = 150;

    if (c.isPhishing) {
      if (actionType === "block") {
        s.phishScore += TRUST_POINTS;
        s.phishCorrect += 1;
        AudioEngine.safe();
        renderPhishFeedback("good", `🛡️ TUYỆT VỜI! Bạn đã phát hiện và chặn đứng Phishing (+${TRUST_POINTS}đ)`);
      } else {
        // SẬP BẪY! -> BÙNG RED ALERT BREACH OVERLAY!
        AudioEngine.siren();
        openBreachOverlay(c, clickedUrl);
        renderPhishFeedback("bad", "🚨 BẠN ĐÃ SẬP BẪY PHISHING! (0đ) — Hãy xem kỹ 6 dấu hiệu bên dưới để rút kinh nghiệm.");
      }
    } else {
      // Real safe case (isPhishing === false)
      if (actionType === "block") {
        AudioEngine.wrong();
        renderPhishFeedback("warn", "⚠️ Báo nhầm rồi! Đây là thông báo thật của trường — bạn vừa tự chặn thông báo quan trọng! (0đ)");
      } else {
        s.phishScore += TRUST_POINTS;
        s.phishCorrect += 1;
        AudioEngine.safe();
        renderPhishFeedback("good", `✅ CHÍNH XÁC! Đây là thông báo chính thức an toàn của nhà trường (+${TRUST_POINTS}đ)`);
      }
    }

    document.getElementById("phishTotalScoreLabel").textContent = String(s.quizScore + s.phishScore);
  }

  function openBreachOverlay(c, clickedUrl) {
    const bp = c.breachPreview || {};
    const urlShown = clickedUrl || bp.fakeUrl || "http://phish-trap.example.xyz";
    document.getElementById("breachFakeUrl").textContent = urlShown;
    document.getElementById("breachRiskTitle").textContent = bp.riskTitle || "Bạn vừa sập bẫy liên kết / tệp độc hại!";
    document.getElementById("breachRiskDetail").textContent = bp.riskDetail || "";

    const items = bp.stolenItems && bp.stolenItems.length
      ? bp.stolenItems
      : ["Cookie phiên đăng nhập trình duyệt", "Mật khẩu & thông tin tài khoản cá nhân"];
    document.getElementById("breachStolenList").innerHTML = items
      .map((item) => `<li>[EXFILTRATING] ${escapeHtml(item)}...</li>`)
      .join("");

    document.getElementById("breachOverlay").classList.remove("hidden");
  }

  function renderPhishFeedback(variant, headline) {
    const s = state.session;
    const c = state.data.phishingCases[s.phishIndex];
    const signNames = {
      A: "Địa chỉ người gửi",
      B: "Nội dung khẩn cấp / áp lực",
      C: "Liên kết (URL thật)",
      D: "Tệp đính kèm / Bẫy nhúng",
      E: "Dữ liệu nhạy cảm yêu cầu",
      F: "Cách xử lý an toàn"
    };

    const isLast = s.phishIndex >= s.phishTotal - 1;
    const nextLabel = isLast ? "🏆 Hoàn Thành & Xem Kết Quả" : "Tình huống tiếp theo →";

    document.getElementById("phishResultPanel").innerHTML = `
      <div class="verdict-box verdict-${variant}">${escapeHtml(headline)}</div>
      <h4 style="margin:0 0 10px;">🔍 Phân tích 6 dấu hiệu A → F</h4>
      <div class="signs-list">
        ${["A", "B", "C", "D", "E", "F"]
          .map(
            (k) => `
          <div class="sign-item">
            <span class="sign-key">${k}</span>
            <div><strong>${signNames[k]}:</strong> ${escapeHtml(c.signs[k] || "Không có bất thường.")}</div>
          </div>`
          )
          .join("")}
      </div>
      ${c.takeaway ? `<div class="takeaway-box"><strong>💡 Ghi nhớ:</strong> ${escapeHtml(c.takeaway)}</div>` : ""}
      <div style="margin-top:14px;display:flex;justify-content:flex-end;">
        <button type="button" class="btn btn-primary btn-lg" id="btnPhishNext">${nextLabel}</button>
      </div>`;
  }

  // --------------------------------------------------------------------------
  // 8. COMPLETE SESSION, RESULT VIEW & 3-LAYER SYNC (LOCAL + CHAT + APPS SCRIPT)
  // --------------------------------------------------------------------------
  function completeSession() {
    const s = state.session;
    if (!s) return;

    const durationSec = Math.max(1, Math.round((Date.now() - s.startedAt) / 1000));
    const totalScore = s.quizScore + s.phishScore;

    const entry = {
      id: s.id,
      name: s.name,
      mssv: s.mssv || "Tự do",
      mode: s.mode,
      quizScore: s.quizScore,
      quizCorrect: s.quizCorrect,
      quizTotal: s.quizTotal,
      phishScore: s.phishScore,
      phishCorrect: s.phishCorrect,
      phishTotal: s.phishTotal,
      totalScore,
      durationSec,
      source: "Trực tiếp",
      createdAt: new Date().toISOString()
    };

    s.lastResultEntry = entry;
    upsertLeaderboardEntry(entry);
    saveLeaderboard();
    renderHeaderMeta();

    showView("result");
    renderResultView(entry);
    AudioEngine.fanfare();
    Confetti.launch();

    if (state.data.meta.leaderboardEndpoint) {
      syncEntryToCloud(entry);
    }
  }

  function upsertLeaderboardEntry(entry) {
    // Keep separate runs by id, or replace identical name+mssv if pasted again
    const existingIdx = state.leaderboard.findIndex((e) => e.id === entry.id);
    if (existingIdx >= 0) {
      state.leaderboard[existingIdx] = entry;
    } else {
      state.leaderboard.push(entry);
    }
  }

  function buildResultCopyString(entry) {
    return `[BUOI6-KQ] ${entry.name} | ${entry.mssv || "Tự do"} | Quiz: ${entry.quizScore} (${entry.quizCorrect}/${entry.quizTotal}) | Phish: ${entry.phishScore} (${entry.phishCorrect}/${entry.phishTotal}) | Tổng: ${entry.totalScore} | ${entry.durationSec}s`;
  }

  function renderResultView(entry) {
    const maxPossible = entry.quizTotal * 150 + entry.phishTotal * 150;
    const ratio = maxPossible > 0 ? entry.totalScore / maxPossible : 0;

    let crown = "🌱";
    let rankTitle = "Tân binh An ninh số";
    if (ratio >= 0.8) {
      crown = "🏆";
      rankTitle = "Chiến thần An toàn số";
    } else if (ratio >= 0.6) {
      crown = "🛡️";
      rankTitle = "Vệ sĩ Mạng TDMU";
    } else if (ratio >= 0.4) {
      crown = "⚡";
      rankTitle = "Tín đồ AI Cảnh giác";
    }

    document.getElementById("resultCrown").textContent = crown;
    document.getElementById("resultRankTitle").textContent = rankTitle;
    document.getElementById("resultPlayerHeading").textContent = entry.name;
    document.getElementById("resultPlayerSub").textContent = `MSSV / Nhóm: ${entry.mssv}`;

    document.getElementById("resQuizScore").textContent = String(entry.quizScore);
    document.getElementById("resQuizDetail").textContent = `${entry.quizCorrect}/${entry.quizTotal} câu đúng`;
    document.getElementById("resPhishScore").textContent = String(entry.phishScore);
    document.getElementById("resPhishDetail").textContent = `${entry.phishCorrect}/${entry.phishTotal} ca chuẩn`;
    document.getElementById("resTotalScore").textContent = String(entry.totalScore);
    document.getElementById("resDuration").textContent = `Thời gian: ${entry.durationSec}s`;

    document.getElementById("resCopyString").textContent = buildResultCopyString(entry);

    const retryBtn = document.getElementById("btnRetryCloudSync");
    const syncBadge = document.getElementById("resCloudSyncStatus");
    if (state.data.meta.leaderboardEndpoint) {
      retryBtn.classList.remove("hidden");
      syncBadge.textContent = "Đang đồng bộ lên BXH lớp...";
      syncBadge.classList.remove("ok");
    } else {
      retryBtn.classList.add("hidden");
      syncBadge.textContent = "Đã lưu trên trình duyệt · Copy gửi Chat lớp";
      syncBadge.classList.add("ok");
    }
  }

  async function syncEntryToCloud(entry) {
    const endpoint = state.data.meta.leaderboardEndpoint;
    if (!endpoint) return;
    const badge = document.getElementById("resCloudSyncStatus");
    const payload = {
      name: entry.name,
      mssv: entry.mssv,
      quizScore: entry.quizScore,
      quizCorrect: entry.quizCorrect,
      phishingScore: entry.phishScore,
      phishingCorrect: entry.phishCorrect,
      totalScore: entry.totalScore,
      durationSec: entry.durationSec,
      timestamp: entry.createdAt || new Date().toISOString()
    };
    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      if (badge) {
        badge.textContent = "☁️ Đã gửi kết quả lên BXH Online!";
        badge.classList.add("ok");
      }
      showToast("Đã gửi điểm lên Bảng Xếp Hạng Online!", "success");
    } catch (err) {
      if (badge) {
        badge.textContent = "⚠️ Gửi Online thất bại — hãy Copy dòng kết quả gửi Chat!";
        badge.classList.remove("ok");
      }
    }
  }

  // --------------------------------------------------------------------------
  // 9. LEADERBOARD VIEW
  // --------------------------------------------------------------------------
  function getSortedLeaderboard() {
    return [...state.leaderboard].sort((a, b) => {
      if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
      return (a.durationSec || 9999) - (b.durationSec || 9999);
    });
  }

  function renderLeaderboardView() {
    renderHeaderMeta();
    const sorted = getSortedLeaderboard();

    const cloudBtn = document.getElementById("btnRefreshCloudLb");
    if (cloudBtn) {
      cloudBtn.classList.toggle("hidden", !state.data.meta.leaderboardEndpoint);
    }

    const podium = document.getElementById("podiumGrid");
    const medals = ["🥇", "🥈", "🥉"];
    if (!sorted.length) {
      podium.innerHTML = "";
    } else {
      podium.innerHTML = sorted
        .slice(0, 3)
        .map(
          (e, i) => `
        <div class="podium-card podium-${i + 1}">
          <div class="podium-medal">${medals[i]}</div>
          <div class="podium-name">${escapeHtml(e.name)}</div>
          <div style="font-size:0.8rem;color:var(--muted);">${escapeHtml(e.mssv)}</div>
          <div class="podium-score">${e.totalScore}đ</div>
          <div style="font-size:0.78rem;color:var(--muted);">⏱️ ${e.durationSec}s · Quiz ${e.quizScore} + Phish ${e.phishScore}</div>
        </div>`
        )
        .join("");
    }

    const tbody = document.getElementById("leaderboardTableBody");
    if (!sorted.length) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--muted);padding:24px;">Chưa có dữ liệu xếp hạng. Hãy chơi thử hoặc để Giảng viên nhập kết quả từ Chat Meet/Zoom!</td></tr>`;
      return;
    }

    const modeMap = { combo: "Trọn bộ", quiz: "Quiz", phishing: "Phishing" };
    tbody.innerHTML = sorted
      .map(
        (e, i) => `
      <tr>
        <td><strong>${medals[i] || `#${i + 1}`}</strong></td>
        <td><strong>${escapeHtml(e.name)}</strong></td>
        <td>${escapeHtml(e.mssv)}</td>
        <td>${escapeHtml(modeMap[e.mode] || e.mode || "Trọn bộ")}</td>
        <td>${e.quizScore} (${e.quizCorrect}/${e.quizTotal})</td>
        <td>${e.phishScore} (${e.phishCorrect}/${e.phishTotal})</td>
        <td>${e.durationSec}s</td>
        <td><strong style="color:var(--navy);font-family:var(--mono);">${e.totalScore}đ</strong></td>
      </tr>`
      )
      .join("");
  }

  async function refreshCloudLeaderboard() {
    const endpoint = state.data.meta.leaderboardEndpoint;
    if (!endpoint) return;
    try {
      const resp = await fetch(endpoint);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      const rows = Array.isArray(json) ? json : json.leaderboard || json.entries || [];
      let added = 0;
      let updated = 0;
      for (const r of rows) {
        if (!r || !r.name) continue;
        const name = String(r.name).trim();
        const mssv = String(r.mssv || "Tự do").trim();
        const key = r.id || `cloud-${name.toLowerCase()}-${mssv.toLowerCase()}`;
        const entry = {
          id: key,
          name,
          mssv,
          mode: String(r.mode || "combo"),
          quizScore: Number(r.quizScore) || 0,
          quizCorrect: Number(r.quizCorrect) || 0,
          quizTotal: Number(r.quizTotal) || state.data.quizQuestions.length,
          phishScore: Number(r.phishingScore ?? r.phishScore) || 0,
          phishCorrect: Number(r.phishingCorrect ?? r.phishCorrect) || 0,
          phishTotal: Number(r.phishTotal) || state.data.phishingCases.length,
          totalScore: Number(r.totalScore) || 0,
          durationSec: Number(r.durationSec) || 0,
          source: "Cloud"
        };
        delete entry.phishingCorrect;
        const idx = state.leaderboard.findIndex(
          (x) => x.id === key || (x.name.toLowerCase() === name.toLowerCase() && x.mssv.toLowerCase() === mssv.toLowerCase())
        );
        if (idx >= 0) {
          if (entry.totalScore >= state.leaderboard[idx].totalScore) {
            state.leaderboard[idx] = entry;
            updated++;
          }
        } else {
          state.leaderboard.push(entry);
          added++;
        }
      }
      saveLeaderboard();
      renderLeaderboardView();
      showToast(`Đã đồng bộ BXH Online (+${added} mới, cập nhật ${updated})!`, "success");
    } catch (err) {
      showToast("Không tải được JSON từ Apps Script (kiểm tra CORS / quyền Web App).", "warning");
    }
  }

  // --------------------------------------------------------------------------
  // 10. TEACHER HUB (PIN GATE, BULK CHAT PARSER, CSV, CMS)
  // --------------------------------------------------------------------------
  function openTeacherGate() {
    const pin = state.data.meta.teacherPin;
    if (!pin || state.teacherUnlocked) {
      state.teacherUnlocked = true;
      showView("teacher");
      return;
    }

    openModal(
      "🔐 Xác Thực Giảng Viên",
      `<form id="formTeacherPin">
        <p class="muted">Nhập mã PIN giảng viên để mở Bảng điều khiển, nhập hàng loạt kết quả chat lớp và chỉnh sửa bộ đề (Mặc định: <code>2026</code>).</p>
        <div class="form-group">
          <label for="inputTeacherPin">Mã PIN</label>
          <input type="password" id="inputTeacherPin" class="input-lg" placeholder="Nhập mã PIN..." autofocus required />
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-outline js-close-modal">Hủy</button>
          <button type="submit" class="btn btn-primary">Mở Quản lý</button>
        </div>
      </form>`
    );

    setTimeout(() => document.getElementById("inputTeacherPin")?.focus(), 40);

    document.getElementById("formTeacherPin").addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("inputTeacherPin").value.trim();
      if (val === pin) {
        state.teacherUnlocked = true;
        closeModal();
        showView("teacher");
        showToast("Đã mở chế độ Giảng viên!", "success");
      } else {
        showToast("Mã PIN không đúng!", "error");
        document.getElementById("inputTeacherPin").select();
      }
    });
  }

  function renderTeacherView() {
    renderHeaderMeta();
    document.getElementById("tScoreCount").textContent = String(state.leaderboard.length);

    document.querySelectorAll(".t-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tTab === state.teacherTab);
    });
    document.querySelectorAll(".t-panel").forEach((p) => {
      p.classList.toggle("active", p.id === `tpanel-${state.teacherTab}`);
    });

    if (state.teacherTab === "scores") renderTeacherScoresTable();
    else if (state.teacherTab === "cms") renderTeacherCms();
  }

  function parseBulkMeetChat(rawText) {
    // Matches: [BUOI6-KQ] Tên | MSSV | Quiz: 850 (8/10) | Phish: 750 (5/6) | Tổng: 1600 | 112s
    const regex = /\[BUOI6-KQ\]\s*([^|\r\n]+?)\s*\|\s*([^|\r\n]*?)\s*\|\s*Quiz:\s*(\d+)\s*\((\d+)\/(\d+)\)\s*\|\s*Phish:\s*(\d+)\s*\((\d+)\/(\d+)\)\s*\|\s*Tổng:\s*(\d+)\s*\|\s*(\d+)s/gi;
    let match;
    let imported = 0;
    let updated = 0;

    while ((match = regex.exec(rawText)) !== null) {
      const name = match[1].trim();
      const mssv = match[2].trim() || "Tự do";
      const quizScore = Number(match[3]);
      const quizCorrect = Number(match[4]);
      const quizTotal = Number(match[5]);
      const phishScore = Number(match[6]);
      const phishCorrect = Number(match[7]);
      const phishTotal = Number(match[8]);
      const totalScore = Number(match[9]);
      const durationSec = Number(match[10]);

      const dedupeKey = `chat-${name.toLowerCase()}-${mssv.toLowerCase()}`;
      const existingIdx = state.leaderboard.findIndex(
        (x) => x.id === dedupeKey || (x.name.toLowerCase() === name.toLowerCase() && x.mssv.toLowerCase() === mssv.toLowerCase())
      );

      const mode = quizTotal > 0 && phishTotal > 0 ? "combo" : quizTotal > 0 ? "quiz" : "phishing";
      const record = {
        id: existingIdx >= 0 ? state.leaderboard[existingIdx].id : dedupeKey,
        name,
        mssv,
        mode,
        quizScore,
        quizCorrect,
        quizTotal,
        phishScore,
        phishCorrect,
        phishTotal,
        totalScore,
        durationSec,
        source: "Chat Meet/Zoom",
        createdAt: new Date().toISOString()
      };

      if (existingIdx >= 0) {
        // Keep the higher score if student submitted multiple times
        if (record.totalScore >= state.leaderboard[existingIdx].totalScore) {
          state.leaderboard[existingIdx] = record;
          updated++;
        }
      } else {
        state.leaderboard.push(record);
        imported++;
      }
    }

    saveLeaderboard();
    renderHeaderMeta();
    return { imported, updated };
  }

  function renderTeacherScoresTable() {
    const sorted = getSortedLeaderboard();
    const tbody = document.getElementById("teacherScoresTbody");
    if (!sorted.length) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:18px;">Chưa có kết quả nào.</td></tr>`;
      return;
    }
    tbody.innerHTML = sorted
      .map(
        (e, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${escapeHtml(e.name)}</strong></td>
        <td>${escapeHtml(e.mssv)}</td>
        <td>${e.quizScore} (${e.quizCorrect}/${e.quizTotal})</td>
        <td>${e.phishScore} (${e.phishCorrect}/${e.phishTotal})</td>
        <td><strong>${e.totalScore}đ</strong></td>
        <td>${e.durationSec}s</td>
        <td>${escapeHtml(e.source || "Trực tiếp")}</td>
        <td><button type="button" class="btn btn-danger-outline btn-sm js-del-score" data-id="${escapeHtml(e.id)}">✕</button></td>
      </tr>`
      )
      .join("");
  }

  function exportLeaderboardCsv() {
    const sorted = getSortedLeaderboard();
    const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = [];
    rows.push(["BẢNG XẾP HẠNG BUỔI 6 - AI MASTERY & PHISHING", state.data.meta.sessionTitle].map(esc).join(","));
    rows.push(["Hạng", "Họ và Tên", "MSSV / Nhóm", "Chế độ", "Điểm Quiz", "Quiz Đúng", "Điểm Phishing", "Phish Đúng", "Tổng Điểm", "Thời gian (giây)", "Nguồn"].map(esc).join(","));
    sorted.forEach((e, i) => {
      rows.push([
        i + 1,
        e.name,
        e.mssv,
        e.mode,
        e.quizScore,
        `${e.quizCorrect}/${e.quizTotal}`,
        e.phishScore,
        `${e.phishCorrect}/${e.phishTotal}`,
        e.totalScore,
        e.durationSec,
        e.source || "Trực tiếp"
      ].map(esc).join(","));
    });
    const blob = new Blob(["\uFEFF" + rows.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    downloadBlob(blob, `BangXepHang_Buoi6_${new Date().toISOString().slice(0, 10)}.csv`);
    showToast("Đã xuất bảng điểm CSV (UTF-8 BOM cho Excel)!", "success");
  }

  function renderTeacherCms() {
    document.getElementById("setSessionTitle").value = state.data.meta.sessionTitle;
    document.getElementById("setSchoolName").value = state.data.meta.schoolName;
    document.getElementById("setTeacherPin").value = state.data.meta.teacherPin;
    document.getElementById("setEndpoint").value = state.data.meta.leaderboardEndpoint;

    document.getElementById("cmsQuizCount").textContent = String(state.data.quizQuestions.length);
    document.getElementById("cmsPhishCount").textContent = String(state.data.phishingCases.length);

    const quizList = document.getElementById("cmsQuizList");
    quizList.innerHTML = state.data.quizQuestions
      .map(
        (q, i) => `
      <div class="cms-row">
        <div>
          <div class="cms-row-title">${i + 1}. ${escapeHtml(q.question)}</div>
          <div class="cms-row-meta">${escapeHtml(q.category)} · ${q.timeLimitSec}s · ${q.points}đ · Đáp án đúng: ${["A", "B", "C", "D"][q.correctIndex]}</div>
        </div>
        <div class="cms-row-btns">
          <button type="button" class="btn btn-outline btn-sm js-edit-quiz" data-id="${escapeHtml(q.id)}">Sửa</button>
          <button type="button" class="btn btn-danger-outline btn-sm js-del-quiz" data-id="${escapeHtml(q.id)}">Xóa</button>
        </div>
      </div>`
      )
      .join("");

    const phishList = document.getElementById("cmsPhishList");
    phishList.innerHTML = state.data.phishingCases
      .map(
        (c, i) => `
      <div class="cms-row">
        <div>
          <div class="cms-row-title">${i + 1}. ${escapeHtml(c.title)}</div>
          <div class="cms-row-meta">[${c.channel.toUpperCase()}] · ${c.isPhishing ? "🚨 PHISHING" : "✅ AN TOÀN"} · ${escapeHtml(c.difficulty)}</div>
        </div>
        <div class="cms-row-btns">
          <button type="button" class="btn btn-outline btn-sm js-edit-phish" data-id="${escapeHtml(c.id)}">Sửa</button>
          <button type="button" class="btn btn-danger-outline btn-sm js-del-phish" data-id="${escapeHtml(c.id)}">Xóa</button>
        </div>
      </div>`
      )
      .join("");
  }

  function openQuizEditor(existing = null) {
    const q = existing || {
      category: "AI Mastery",
      question: "",
      options: ["", "", "", ""],
      correctIndex: 0,
      timeLimitSec: 20,
      points: 100,
      explanation: ""
    };

    openModal(
      existing ? "✏️ Sửa Câu Hỏi Quiz" : "➕ Thêm Câu Hỏi Quiz",
      `<form id="formQuizEditor">
        <div class="form-row-2">
          <div class="form-group"><label>Chủ đề</label><input name="category" class="input-std" value="${escapeHtml(q.category)}" required /></div>
          <div class="form-row-2">
            <div class="form-group"><label>Thời gian (s)</label><input name="timeLimitSec" type="number" min="5" class="input-std" value="${q.timeLimitSec}" /></div>
            <div class="form-group"><label>Điểm gốc</label><input name="points" type="number" min="10" class="input-std" value="${q.points}" /></div>
          </div>
        </div>
        <div class="form-group"><label>Nội dung câu hỏi *</label><textarea name="question" class="textarea-std" required>${escapeHtml(q.question)}</textarea></div>
        <div class="form-row-2">
          <div class="form-group"><label>Đáp án A *</label><input name="opt0" class="input-std" required value="${escapeHtml(q.options[0])}" /></div>
          <div class="form-group"><label>Đáp án B *</label><input name="opt1" class="input-std" required value="${escapeHtml(q.options[1])}" /></div>
          <div class="form-group"><label>Đáp án C *</label><input name="opt2" class="input-std" required value="${escapeHtml(q.options[2])}" /></div>
          <div class="form-group"><label>Đáp án D *</label><input name="opt3" class="input-std" required value="${escapeHtml(q.options[3])}" /></div>
        </div>
        <div class="form-group"><label>Đáp án đúng</label>
          <select name="correctIndex" class="select-std">
            <option value="0" ${q.correctIndex === 0 ? "selected" : ""}>A</option>
            <option value="1" ${q.correctIndex === 1 ? "selected" : ""}>B</option>
            <option value="2" ${q.correctIndex === 2 ? "selected" : ""}>C</option>
            <option value="3" ${q.correctIndex === 3 ? "selected" : ""}>D</option>
          </select>
        </div>
        <div class="form-group"><label>Giải thích ngắn</label><textarea name="explanation" class="textarea-std">${escapeHtml(q.explanation)}</textarea></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-outline js-close-modal">Hủy</button>
          <button type="submit" class="btn btn-primary">Lưu câu hỏi</button>
        </div>
      </form>`
    );

    document.getElementById("formQuizEditor").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const item = {
        id: existing ? existing.id : genId("q"),
        category: fd.get("category").trim() || "Tổng hợp",
        question: fd.get("question").trim(),
        options: [fd.get("opt0").trim(), fd.get("opt1").trim(), fd.get("opt2").trim(), fd.get("opt3").trim()],
        correctIndex: Number(fd.get("correctIndex")) || 0,
        timeLimitSec: Math.max(5, Number(fd.get("timeLimitSec")) || 20),
        points: Math.max(10, Number(fd.get("points")) || 100),
        explanation: fd.get("explanation").trim()
      };
      if (existing) {
        const idx = state.data.quizQuestions.findIndex((x) => x.id === existing.id);
        if (idx >= 0) state.data.quizQuestions[idx] = item;
      } else {
        state.data.quizQuestions.push(item);
      }
      saveConfig();
      closeModal();
      renderTeacherCms();
      showToast("Đã lưu câu hỏi Quiz!", "success");
    });
  }

  function openPhishEditor(existing = null) {
    const c = existing || {
      channel: "email",
      title: "",
      senderName: "",
      senderAddress: "",
      subject: "",
      time: "Hôm nay",
      bodyHtml: "<p></p>",
      attachmentName: "",
      isPhishing: true,
      difficulty: "Trung bình",
      breachPreview: { fakeUrl: "", stolenItems: [], riskTitle: "", riskDetail: "" },
      signs: { A: "", B: "", C: "", D: "", E: "", F: "" },
      takeaway: ""
    };
    const stolenStr = (c.breachPreview?.stolenItems || []).join("\n");

    openModal(
      existing ? "✏️ Sửa Tình Huống Phishing" : "➕ Thêm Tình Huống Phishing",
      `<form id="formPhishEditor">
        <div class="form-row-2">
          <div class="form-group"><label>Tiêu đề tình huống *</label><input name="title" class="input-std" required value="${escapeHtml(c.title)}" /></div>
          <div class="form-row-2">
            <div class="form-group"><label>Kênh</label>
              <select name="channel" class="select-std">
                <option value="email" ${c.channel === "email" ? "selected" : ""}>Email</option>
                <option value="zalo" ${c.channel === "zalo" ? "selected" : ""}>Zalo</option>
                <option value="lms" ${c.channel === "lms" ? "selected" : ""}>LMS TDMU</option>
              </select>
            </div>
            <div class="form-group"><label>Loại ca</label>
              <select name="isPhishing" class="select-std">
                <option value="true" ${c.isPhishing ? "selected" : ""}>🚨 Phishing</option>
                <option value="false" ${!c.isPhishing ? "selected" : ""}>✅ An toàn</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group"><label>Tên người gửi</label><input name="senderName" class="input-std" value="${escapeHtml(c.senderName)}" /></div>
          <div class="form-group"><label>Email / Zalo / URL gửi</label><input name="senderAddress" class="input-std" value="${escapeHtml(c.senderAddress)}" /></div>
        </div>
        <div class="form-row-2">
          <div class="form-group"><label>Tiêu đề thư</label><input name="subject" class="input-std" value="${escapeHtml(c.subject)}" /></div>
          <div class="form-row-2">
            <div class="form-group"><label>Độ khó</label><input name="difficulty" class="input-std" value="${escapeHtml(c.difficulty)}" /></div>
            <div class="form-group"><label>File đính kèm</label><input name="attachmentName" class="input-std" value="${escapeHtml(c.attachmentName)}" /></div>
          </div>
        </div>
        <div class="form-group">
          <div class="section-between" style="margin-bottom:4px;">
            <label style="margin:0;">Nội dung HTML (&lt;a href="#" data-real-url="..."&gt;)</label>
            <button type="button" class="btn btn-teal btn-sm" id="btnAddTrapLink">+ Chèn link bẫy</button>
          </div>
          <textarea name="bodyHtml" id="edPhishBody" class="textarea-lg" style="min-height:95px;">${escapeHtml(c.bodyHtml)}</textarea>
        </div>
        <h4 style="margin:8px 0;color:var(--coral-dark);">Mô phỏng sự cố khi bấm nhầm bẫy (Breach Preview)</h4>
        <div class="form-row-2">
          <div class="form-group"><label>URL độc hại hiển thị</label><input name="fakeUrl" class="input-std" value="${escapeHtml(c.breachPreview?.fakeUrl || "")}" /></div>
          <div class="form-group"><label>Tiêu đề cảnh báo đỏ</label><input name="riskTitle" class="input-std" value="${escapeHtml(c.breachPreview?.riskTitle || "")}" /></div>
        </div>
        <div class="form-row-2">
          <div class="form-group"><label>Dữ liệu mô phỏng bị trích xuất (mỗi dòng 1 mục)</label><textarea name="stolenItems" class="textarea-std">${escapeHtml(stolenStr)}</textarea></div>
          <div class="form-group"><label>Giải thích hậu quả thực tế</label><textarea name="riskDetail" class="textarea-std">${escapeHtml(c.breachPreview?.riskDetail || "")}</textarea></div>
        </div>
        <h4 style="margin:8px 0;color:var(--navy);">Phân tích 6 dấu hiệu A–F &amp; Takeaway</h4>
        <div class="form-row-2">
          <div class="form-group"><label>A — Người gửi</label><input name="signA" class="input-std" value="${escapeHtml(c.signs.A)}" /></div>
          <div class="form-group"><label>B — Nội dung gấp</label><input name="signB" class="input-std" value="${escapeHtml(c.signs.B)}" /></div>
          <div class="form-group"><label>C — Liên kết</label><input name="signC" class="input-std" value="${escapeHtml(c.signs.C)}" /></div>
          <div class="form-group"><label>D — Tệp đính kèm</label><input name="signD" class="input-std" value="${escapeHtml(c.signs.D)}" /></div>
          <div class="form-group"><label>E — Dữ liệu yêu cầu</label><input name="signE" class="input-std" value="${escapeHtml(c.signs.E)}" /></div>
          <div class="form-group"><label>F — Cách xử lý</label><input name="signF" class="input-std" value="${escapeHtml(c.signs.F)}" /></div>
        </div>
        <div class="form-group"><label>Ghi nhớ chốt bài</label><input name="takeaway" class="input-std" value="${escapeHtml(c.takeaway)}" /></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-outline js-close-modal">Hủy</button>
          <button type="submit" class="btn btn-primary">Lưu tình huống</button>
        </div>
      </form>`
    );

    document.getElementById("btnAddTrapLink").addEventListener("click", () => {
      const text = prompt("Chữ hiển thị của link:", "https://tdmu.edu.vn/xac-nhan");
      if (text === null) return;
      const real = prompt("URL thật (data-real-url):", "http://tdmu-fake.xyz/login");
      if (real === null) return;
      document.getElementById("edPhishBody").value += ` <a href="#" data-real-url="${escapeHtml(real)}">${escapeHtml(text)}</a>`;
    });

    document.getElementById("formPhishEditor").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const item = {
        id: existing ? existing.id : genId("ph"),
        channel: fd.get("channel"),
        title: fd.get("title").trim(),
        senderName: fd.get("senderName").trim(),
        senderAddress: fd.get("senderAddress").trim(),
        subject: fd.get("subject").trim(),
        time: existing?.time || "Hôm nay",
        bodyHtml: fd.get("bodyHtml"),
        attachmentName: fd.get("attachmentName").trim(),
        isPhishing: fd.get("isPhishing") === "true",
        difficulty: fd.get("difficulty").trim() || "Trung bình",
        breachPreview: {
          fakeUrl: fd.get("fakeUrl").trim(),
          stolenItems: fd.get("stolenItems").split(/\r?\n/).map((x) => x.trim()).filter(Boolean),
          riskTitle: fd.get("riskTitle").trim(),
          riskDetail: fd.get("riskDetail").trim()
        },
        signs: {
          A: fd.get("signA").trim(),
          B: fd.get("signB").trim(),
          C: fd.get("signC").trim(),
          D: fd.get("signD").trim(),
          E: fd.get("signE").trim(),
          F: fd.get("signF").trim()
        },
        takeaway: fd.get("takeaway").trim()
      };
      if (existing) {
        const idx = state.data.phishingCases.findIndex((x) => x.id === existing.id);
        if (idx >= 0) state.data.phishingCases[idx] = item;
      } else {
        state.data.phishingCases.push(item);
      }
      saveConfig();
      closeModal();
      renderTeacherCms();
      showToast("Đã lưu tình huống Phishing!", "success");
    });
  }

  // --------------------------------------------------------------------------
  // 11. MODAL HELPERS & EVENT BINDING
  // --------------------------------------------------------------------------
  function openModal(title, html) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalContent").innerHTML = html;
    document.getElementById("modalBackdrop").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("modalBackdrop").classList.add("hidden");
    document.getElementById("modalContent").innerHTML = "";
  }

  function bindEvents() {
    // Topbar actions
    document.getElementById("btnBrandHome").addEventListener("click", () => showView("entry"));
    document.getElementById("btnBackHome").addEventListener("click", () => showView("entry"));
    document.getElementById("btnNavLeaderboard").addEventListener("click", () => showView("leaderboard"));
    document.getElementById("btnOpenTeacherGate").addEventListener("click", openTeacherGate);
    document.getElementById("btnToggleMute").addEventListener("click", () => {
      state.muted = !state.muted;
      renderHeaderMeta();
      showToast(state.muted ? "Đã tắt âm thanh" : "Đã bật âm thanh");
    });

    // Mode Hub buttons
    document.querySelectorAll("[data-start-mode]").forEach((btn) => {
      btn.addEventListener("click", () => startGameSession(btn.dataset.startMode));
    });

    // Quiz Events
    document.getElementById("quizOptionsGrid").addEventListener("click", (e) => {
      const btn = e.target.closest(".quiz-opt-btn");
      if (btn && !btn.disabled) handleQuizAnswer(Number(btn.dataset.optIdx));
    });
    document.getElementById("btnQuizNext").addEventListener("click", finishOrProceedFromQuiz);

    // Phishing Simulator Events (Hover Link Inspector + Click-Trap!)
    const simShell = document.getElementById("phishSimShell");
    simShell.addEventListener("mouseover", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const bar = document.getElementById("linkInspectorBar");
      const urlSpan = document.getElementById("linkInspectorUrl");
      if (bar && urlSpan) {
        urlSpan.textContent = link.getAttribute("data-real-url") || link.getAttribute("href") || "(Không xác định)";
        bar.classList.add("inspecting");
      }
    });
    simShell.addEventListener("mouseout", (e) => {
      if (e.target.closest("a")) {
        const bar = document.getElementById("linkInspectorBar");
        const urlSpan = document.getElementById("linkInspectorUrl");
        if (bar && urlSpan) {
          urlSpan.textContent = "Rê chuột vào liên kết để kiểm tra URL thật...";
          bar.classList.remove("inspecting");
        }
      }
    });
    simShell.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) {
        e.preventDefault();
        const url = link.getAttribute("data-real-url") || "";
        resolvePhishingInteraction("click_trap", url);
        return;
      }
      const attach = e.target.closest("#btnSimAttachment");
      if (attach) {
        const c = state.data.phishingCases[state.session?.phishIndex];
        resolvePhishingInteraction("click_trap", c ? `file://${c.attachmentName}` : "");
      }
    });

    document.getElementById("btnPhishTrust").addEventListener("click", () => resolvePhishingInteraction("trust"));
    document.getElementById("btnPhishBlock").addEventListener("click", () => resolvePhishingInteraction("block"));
    document.getElementById("btnCloseBreachToAnalysis").addEventListener("click", () => {
      document.getElementById("breachOverlay").classList.add("hidden");
    });

    document.getElementById("phishResultPanel").addEventListener("click", (e) => {
      if (e.target.closest("#btnPhishNext")) {
        const s = state.session;
        if (s.phishIndex < s.phishTotal - 1) {
          s.phishIndex += 1;
          renderPhishingCase();
        } else {
          completeSession();
        }
      }
    });

    // Result View Events
    document.getElementById("btnCopyResultLine").addEventListener("click", async () => {
      const text = document.getElementById("resCopyString").textContent;
      try {
        await navigator.clipboard.writeText(text);
        showToast("Đã copy! Hãy dán (Ctrl+V / Cmd+V) vào khung Chat lớp học!", "success");
      } catch (err) {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById("resCopyString"));
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        showToast("Đã bôi đen chuỗi kết quả — hãy bấm Ctrl+C / Cmd+C để copy!", "info");
      }
    });
    document.getElementById("btnRetryCloudSync").addEventListener("click", () => {
      if (state.session?.lastResultEntry) syncEntryToCloud(state.session.lastResultEntry);
    });
    document.getElementById("btnResultToLeaderboard").addEventListener("click", () => showView("leaderboard"));
    document.getElementById("btnResultPlayAgain").addEventListener("click", () => {
      if (state.session) startGameSession(state.session.mode);
      else showView("entry");
    });
    document.getElementById("btnResultHome").addEventListener("click", () => showView("entry"));

    // Leaderboard View Events
    document.getElementById("btnRefreshCloudLb").addEventListener("click", refreshCloudLeaderboard);
    document.getElementById("btnCelebrateWinner").addEventListener("click", () => {
      AudioEngine.fanfare();
      Confetti.launch();
      showToast("🎉 Chúc mừng Top 1 lớp học hôm nay!", "success");
    });
    document.getElementById("btnLbPlayEntry").addEventListener("click", () => showView("entry"));

    // Teacher View Events
    document.querySelectorAll(".t-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.teacherTab = btn.dataset.tTab;
        renderTeacherView();
      });
    });

    document.getElementById("btnParseBulkChat").addEventListener("click", () => {
      const raw = document.getElementById("bulkChatInput").value;
      const { imported, updated } = parseBulkMeetChat(raw);
      const report = document.getElementById("bulkImportReport");
      report.classList.remove("hidden");
      if (imported + updated === 0) {
        report.style.background = "var(--amber-soft)";
        report.style.borderColor = "var(--amber)";
        report.style.color = "#78350F";
        report.textContent = "Không tìm thấy dòng nào đúng định dạng [BUOI6-KQ] trong đoạn chat vừa dán.";
      } else {
        report.style.background = "var(--green-soft)";
        report.style.borderColor = "var(--green)";
        report.style.color = "#14532D";
        report.textContent = `✅ Đã quét thành công: Thêm mới ${imported} sinh viên, cập nhật ${updated} sinh viên lên Bảng Xếp Hạng!`;
        document.getElementById("tScoreCount").textContent = String(state.leaderboard.length);
      }
    });

    document.getElementById("btnFillSampleChat").addEventListener("click", () => {
      document.getElementById("bulkChatInput").value =
        "19:42 Nguyễn Văn An: [BUOI6-KQ] Nguyễn Văn An | 222480201 | Quiz: 1280 (9/10) | Phish: 900 (6/6) | Tổng: 2180 | 115s\n" +
        "19:43 Trần Thị Bình: Thầy ơi em nộp bài ạ [BUOI6-KQ] Trần Thị Bình | Nhóm 2 | Quiz: 1050 (8/10) | Phish: 750 (5/6) | Tổng: 1800 | 124s";
    });

    document.getElementById("teacherScoresTbody").addEventListener("click", (e) => {
      const del = e.target.closest(".js-del-score");
      if (!del) return;
      state.leaderboard = state.leaderboard.filter((x) => x.id !== del.dataset.id);
      saveLeaderboard();
      renderHeaderMeta();
      renderTeacherScoresTable();
    });

    document.getElementById("btnExportCsv").addEventListener("click", exportLeaderboardCsv);
    document.getElementById("btnClearLeaderboard").addEventListener("click", () => {
      if (!confirm("Xóa toàn bộ bảng xếp hạng hiện tại?")) return;
      state.leaderboard = [];
      saveLeaderboard();
      renderHeaderMeta();
      renderTeacherScoresTable();
    });

    document.getElementById("formTeacherSettings").addEventListener("submit", (e) => {
      e.preventDefault();
      state.data.meta.sessionTitle = document.getElementById("setSessionTitle").value.trim() || state.data.meta.sessionTitle;
      state.data.meta.schoolName = document.getElementById("setSchoolName").value.trim() || state.data.meta.schoolName;
      state.data.meta.teacherPin = document.getElementById("setTeacherPin").value.trim();
      state.data.meta.leaderboardEndpoint = document.getElementById("setEndpoint").value.trim();
      saveConfig();
      renderHeaderMeta();
      showToast("Đã lưu cài đặt lớp học!", "success");
    });

    document.getElementById("btnAddQuiz").addEventListener("click", () => openQuizEditor(null));
    document.getElementById("btnAddPhish").addEventListener("click", () => openPhishEditor(null));

    document.getElementById("cmsQuizList").addEventListener("click", (e) => {
      const edit = e.target.closest(".js-edit-quiz");
      const del = e.target.closest(".js-del-quiz");
      if (edit) {
        const item = state.data.quizQuestions.find((x) => x.id === edit.dataset.id);
        if (item) openQuizEditor(item);
      } else if (del && confirm("Xóa câu hỏi Quiz này?")) {
        state.data.quizQuestions = state.data.quizQuestions.filter((x) => x.id !== del.dataset.id);
        saveConfig();
        renderTeacherCms();
      }
    });

    document.getElementById("cmsPhishList").addEventListener("click", (e) => {
      const edit = e.target.closest(".js-edit-phish");
      const del = e.target.closest(".js-del-phish");
      if (edit) {
        const item = state.data.phishingCases.find((x) => x.id === edit.dataset.id);
        if (item) openPhishEditor(item);
      } else if (del && confirm("Xóa tình huống Phishing này?")) {
        state.data.phishingCases = state.data.phishingCases.filter((x) => x.id !== del.dataset.id);
        saveConfig();
        renderTeacherCms();
      }
    });

    document.getElementById("btnExportGameDataJs").addEventListener("click", () => {
      const content = `// Dữ liệu cấu hình Buổi 6 - GitHub Pages\nwindow.APP_DATA = ${JSON.stringify(state.data, null, 2)};\n`;
      downloadBlob(new Blob([content], { type: "application/javascript;charset=utf-8" }), "game_data.js");
      showToast("Đã xuất game_data.js để commit lên GitHub Pages!", "success");
    });

    document.getElementById("btnExportJson").addEventListener("click", () => {
      downloadBlob(new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json;charset=utf-8" }), "Buoi6_Quiz_Phishing_Config.json");
    });

    document.getElementById("inputImportJson").addEventListener("change", (e) => {
      const f = e.target.files?.[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          state.data = normalizeAppData(parsed);
          saveConfig();
          renderTeacherCms();
          renderHeaderMeta();
          showToast("Đã nhập JSON cấu hình!", "success");
        } catch (err) {
          showToast("File JSON không hợp lệ!", "error");
        } finally {
          e.target.value = "";
        }
      };
      reader.readAsText(f, "UTF-8");
    });

    document.getElementById("btnResetDefaults").addEventListener("click", () => {
      if (!confirm("Khôi phục bộ đề và cài đặt về mặc định gốc?")) return;
      localStorage.removeItem(CFG_STORAGE_KEY);
      state.data = getDefaultData();
      saveConfig();
      renderTeacherCms();
      renderHeaderMeta();
      showToast("Đã khôi phục bộ đề gốc!", "success");
    });

    // Modal closing
    document.addEventListener("click", (e) => {
      if (e.target.closest("#btnCloseModal") || e.target.closest(".js-close-modal") || e.target.id === "modalBackdrop") {
        closeModal();
      }
    });

    // Quiz keyboard shortcuts (1-4 / A-D / Enter)
    document.addEventListener("keydown", (e) => {
      if (state.activeView !== "quiz" || !state.session) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
      const k = e.key.toLowerCase();
      if (!state.session.quizAnswered) {
        const map = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3 };
        if (k in map) handleQuizAnswer(map[k]);
      } else if (e.key === "Enter") {
        e.preventDefault();
        finishOrProceedFromQuiz();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 12. BOOTSTRAP
  // --------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderEntryView();
    showView("entry");
  });
})();
