# Hướng dẫn Deploy Web Game Buổi 6 lên GitHub Pages

Thư mục **`Buoi6_Quiz_Phishing_Pages`** chứa bộ Web Game tối giản cho lớp học online tối nay gồm:
- **Phần 1 – Quiz nhanh (10 câu):** Bám sát giáo trình Buổi 6 & Hướng dẫn Sản phẩm cuối khóa TDMU, có nhập Tên/MSSV, đếm giờ và xếp hạng.
- **Phần 2 – Phishing Simulator (6 tình huống):** Mô phỏng Email, Zalo, LMS; sinh viên bấm trực tiếp vào link/nút CTA để trải nghiệm cảnh báo rò rỉ dữ liệu thật (4 ca Phishing + 2 ca Thật 100%).

> **QUAN TRỌNG VỀ BẢO MẬT KHO LƯU TRỮ:**
> Chỉ đưa **duy nhất nội dung bên trong thư mục `Buoi6_Quiz_Phishing_Pages/`** lên GitHub repository. Tuyệt đối **KHÔNG** đẩy thư mục cha chứa tài liệu nội bộ hay dữ liệu sao kê/tài chính cá nhân lên GitHub công khai!

---

## Cách 1: Đưa lên GitHub Pages cực nhanh bằng Giao diện Web (Không cần cài Git)

1. Đăng nhập [github.com](https://github.com) → bấm dấu **`+`** góc trên bên phải → chọn **New repository**.
2. Đặt tên repo (ví dụ: `tdmu-buoi6-ai-phishing`), chọn **Public** → bấm **Create repository**.
3. Tại màn hình repo mới, bấm liên kết **`uploading an existing file`**.
4. Kéo thả toàn bộ các file **bên trong** thư mục `Buoi6_Quiz_Phishing_Pages/` (`index.html`, `styles.css`, `game_data.js`, `README_GITHUB_PAGES.md`...) vào khung upload → bấm **Commit changes**.
5. Vào tab **Settings** → chọn mục **Pages** (cột trái):
   - Ở phần **Branch**, chọn **`main`** và thư mục **`/ (root)`** → bấm **Save**.
6. Đợi khoảng 30–60 giây và tải lại trang **Settings → Pages**: GitHub sẽ hiển thị đường link dạng:
   `https://<ten-tai-khoan>.github.io/tdmu-buoi6-ai-phishing/`
7. Gửi link này vào khung chat Google Meet / Zoom / MS Teams cho sinh viên mở ngay trên điện thoại hoặc laptop!

---

## Cách 2: Đẩy bằng dòng lệnh Git (Dành cho máy đã cài Git)

Mở Terminal **ngay bên trong thư mục `Buoi6_Quiz_Phishing_Pages`**:

```bash
cd "/Users/btvdev/Downloads/2. Trung tâm Chuyển đổi số/Đào tạo/NĂNG LỰC SỐ/BÀI GIẢNG CÔNG NGHỆ SỐ/Buoi6_Quiz_Phishing_Pages"
git init -b main
git add index.html styles.css game_data.js GoogleAppsScript_Leaderboard.gs README_GITHUB_PAGES.md
git commit -m "Deploy Buoi 6 Quiz & Phishing Simulator"
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git push -u origin main
```

Sau đó vào **Settings → Pages** chọn nhánh `main` (`/root`) và bấm **Save**.

---

## Kết nối Bảng Xếp Hạng Live bằng Google Sheets (Tùy chọn – 1 phút)

Nếu muốn toàn bộ sinh viên trong lớp tự động gửi điểm về **1 Bảng Xếp Hạng chung real-time**:

1. Tạo một **Google Sheets** mới trên Google Drive (đặt tên ví dụ: `BangXepHang_Buoi6`).
2. Vào menu **Extensions (Tiện ích mở rộng) → Apps Script**.
3. Xóa hết code mẫu, mở file `GoogleAppsScript_Leaderboard.gs` trong thư mục này, copy toàn bộ và dán vào trình soạn thảo Apps Script → bấm **Save** (`Cmd+S` / `Ctrl+S`).
4. Bấm **Deploy (Triển khai) → New deployment**:
   - Biểu tượng bánh răng chọn **Web app**.
   - **Execute as:** `Me` (Tôi).
   - **Who has access:** `Anyone` (Bất kỳ ai).
   - Bấm **Deploy** → cấp quyền truy cập cho Google Sheets → copy đường link **Web app URL** (dạng `https://script.google.com/macros/s/.../exec`).
5. Mở file `game_data.js`, dán URL vừa copy vào trường `leaderboardEndpoint`:
   ```js
   leaderboardEndpoint: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
   ```
   (Hoặc giảng viên có thể mở chế độ Giáo viên trên web với mã PIN mặc định `2026` để dán nhanh).

### Phương án dự phòng (Không cần Apps Script – Dùng ngay với Chat Meet/Zoom)
Nếu không kịp cấu hình Google Sheets trước giờ dạy, sinh viên sau khi chơi xong chỉ cần bấm nút **Copy kết quả** trên màn hình tổng kết rồi dán vào khung chat Meet/Zoom; giảng viên dùng tính năng **Import/Paste từ Chat** trong trang quản lý (PIN: `2026`) để tổng hợp bảng xếp hạng tức thì!
