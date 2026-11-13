// Dữ liệu cho Web Game Buổi 6: Quiz nhanh & Phishing Simulator (GitHub Pages)
// Trường Đại học Thủ Dầu Một - Trung tâm Chuyển đổi số
window.APP_DATA = {
  "meta": {
    "courseTitle": "Năng lực số · Chuyên đề Công nghệ số",
    "sessionTitle": "Buổi 6: AI Mastery & Phòng chống Phishing",
    "schoolName": "Trường ĐH Thủ Dầu Một · Trung tâm Chuyển đổi số",
    "teacherPin": "2026",
    "leaderboardEndpoint": ""
  },
  "quizQuestions": [
    {
      "id": "q1",
      "category": "Tư duy AI",
      "question": "Theo bài giảng Buổi 6, đâu là tư duy cốt lõi đúng nhất khi sinh viên sử dụng AI tạo sinh trong học tập?",
      "options": [
        "Dùng AI làm thay toàn bộ bài tập để tiết kiệm thời gian tối đa",
        "Dùng AI để tăng chất lượng suy nghĩ, không thay thế suy nghĩ của bản thân",
        "Chỉ dùng AI để sửa lỗi chính tả, không nên dùng để lên ý tưởng hay phân tích",
        "Tin tưởng tuyệt đối vào câu trả lời của AI vì AI đã học từ hàng tỷ văn bản"
      ],
      "correctIndex": 1,
      "timeLimitSec": 20,
      "points": 100,
      "explanation": "Slide 4 nhấn mạnh: 'Dùng AI để tăng chất lượng suy nghĩ, không thay thế suy nghĩ'. Người học phải biết giao việc rõ ràng, kiểm chứng đầu ra và giữ vai trò quyết định cuối cùng."
    },
    {
      "id": "q2",
      "category": "Prompt Engineering",
      "question": "Công thức viết Prompt hiệu quả gồm 5 yếu tố theo đúng thứ tự nào sau đây?",
      "options": [
        "Nhiệm vụ → Định dạng → Vai trò → Ràng buộc → Bối cảnh",
        "Bối cảnh → Vai trò → Ràng buộc → Nhiệm vụ → Định dạng",
        "Vai trò → Bối cảnh → Nhiệm vụ → Định dạng → Ràng buộc",
        "Vai trò → Nhiệm vụ → Tiêu đề → Ngữ pháp → Độ dài"
      ],
      "correctIndex": 2,
      "timeLimitSec": 20,
      "points": 100,
      "explanation": "Slide 8 quy định công thức chuẩn 5 yếu tố: Vai trò → Bối cảnh → Nhiệm vụ → Định dạng → Ràng buộc."
    },
    {
      "id": "q3",
      "category": "Prompt Engineering",
      "question": "Nhận định nào dưới đây phản ánh ĐÚNG nhất tiêu chí của một Prompt tốt?",
      "options": [
        "Prompt càng dài hàng nghìn chữ thì AI trả lời càng thông minh",
        "Chỉ cần gõ ngắn gọn 3–5 chữ để AI tự do sáng tạo không bị gò bó",
        "Không cần nêu định dạng đầu ra vì AI luôn tự chọn bảng biểu đẹp nhất",
        "Rõ nhiệm vụ + đủ bối cảnh + có dữ liệu + có tiêu chí kiểm tra, giúp AI hiểu đúng việc cần làm"
      ],
      "correctIndex": 3,
      "timeLimitSec": 25,
      "points": 100,
      "explanation": "Slide 5 & 9: 'Một prompt tốt = rõ nhiệm vụ + đủ bối cảnh + có dữ liệu + có tiêu chí kiểm tra' và 'Prompt tốt không phải prompt dài nhất, mà là prompt giúp AI hiểu đúng việc cần làm'."
    },
    {
      "id": "q4",
      "category": "Xử lý văn bản dài",
      "question": "Công thức 4 bước xử lý văn bản dài với AI (quy trình 45–60 phút) theo đúng trình tự là gì?",
      "options": [
        "Dán toàn bộ PDF → Tóm tắt một lần → Xuất slide → Nộp bài",
        "Chia nhỏ → Tóm tắt → Kiểm chứng → Tổng hợp",
        "Dịch sang tiếng Anh → Tóm tắt → Trích dẫn → Chia nhỏ",
        "Tóm tắt → Chia nhỏ → Tổng hợp → Bỏ qua kiểm chứng"
      ],
      "correctIndex": 1,
      "timeLimitSec": 20,
      "points": 100,
      "explanation": "Slide 12 nêu rõ công thức 4 bước: Chia nhỏ → Tóm tắt → Kiểm chứng → Tổng hợp. Không đưa toàn bộ tài liệu dài rồi yêu cầu AI 'làm hết'."
    },
    {
      "id": "q5",
      "category": "Xử lý văn bản dài",
      "question": "Khi dùng AI xử lý tài liệu dài, vì sao KHÔNG nên yêu cầu AI tự trích dẫn nguồn nếu công cụ không có khả năng truy nguồn?",
      "options": [
        "Vì AI có thể tự bịa ra tên tác giả, năm xuất bản hoặc đường link không có thật (ảo giác AI)",
        "Vì AI sẽ tính thêm phí bản quyền cho mỗi dòng trích dẫn",
        "Vì công cụ AI không biết định dạng chuẩn APA hay IEEE",
        "Vì trích dẫn làm bài báo cáo dài hơn mức quy định"
      ],
      "correctIndex": 0,
      "timeLimitSec": 25,
      "points": 100,
      "explanation": "Slide 14 cảnh báo: 'Không yêu cầu AI trích dẫn nếu công cụ không có khả năng truy nguồn' để tránh hiện tượng AI bịa nguồn giả (Hallucination)."
    },
    {
      "id": "q6",
      "category": "Liêm chính AI",
      "question": "Theo nguyên tắc thực hành AI ở Buổi 6, hành động nào bị NGHIÊM CẤM khi làm bài tập nhóm hoặc đồ án?",
      "options": [
        "Ghi lại lịch sử các prompt đã dùng để minh chứng cho giảng viên",
        "Đánh dấu những đoạn đã đối chiếu và tự chỉnh sửa từ bản nháp AI",
        "Nộp nguyên văn đầu ra của AI như sản phẩm cá nhân mà không kiểm chứng hay viết lại",
        "Yêu cầu AI chỉ ra những điểm chưa chắc chắn để mình kiểm tra lại bản gốc"
      ],
      "correctIndex": 2,
      "timeLimitSec": 20,
      "points": 100,
      "explanation": "Slide 15 khẳng định nguyên tắc: 'Không nộp nguyên văn đầu ra AI như sản phẩm cá nhân'. Cần ghi lại prompt, đánh dấu phần chỉnh sửa và kiểm tra lỗi/thiên kiến/thông tin bịa."
    },
    {
      "id": "q7",
      "category": "Bắt lỗi AI · Cuối khóa",
      "question": "Nhờ AI tóm tắt file 'Hướng dẫn Sản phẩm Cuối khóa – CĐ Công nghệ số', AI trả lời 4 ý sau. Ý nào là ĐÚNG với tài liệu thật (không bị AI nói điêu)?",
      "options": [
        "Bắt buộc lập nhóm 5–7 người và phải lập trình website bằng Python hoặc ReactJS",
        "Làm cá nhân hoặc nhóm 2–4 người, không yêu cầu lập trình, chấm theo 4 CLO (20-30-30-20) và gợi ý 7 slide báo cáo",
        "CLO3 (Ứng dụng AI) chiếm 50% tổng điểm và phải nộp tối thiểu 15 slide kèm mã nguồn GitHub",
        "Sinh viên chỉ cần nộp link website, không cần lập kế hoạch trên Trello/Kanban"
      ],
      "correctIndex": 1,
      "timeLimitSec": 25,
      "points": 100,
      "explanation": "Theo tài liệu thật Hướng dẫn Sản phẩm Cuối khóa: Chọn 1/3 hướng, làm cá nhân hoặc nhóm 2–4 người, không yêu cầu lập trình, bắt buộc có Trello/Kanban, trọng số CLO1 20% - CLO2 30% - CLO3 30% - CLO4 20%, gợi ý 7 slide báo cáo."
    },
    {
      "id": "q8",
      "category": "Phòng chống Phishing",
      "question": "Theo Slide 17, quy tắc 'phản xạ vàng' cần làm NGAY trước khi nhấp vào một đường link hoặc tệp lạ là gì?",
      "options": [
        "Bấm nhanh xem thử là gì rồi tắt tab ngay nếu thấy khả nghi",
        "Chuyển tiếp link đó vào nhóm lớp hỏi cả lớp xem có ai bấm chưa",
        "Dừng 10 giây, kiểm tra kỹ người gửi, đường link (URL thật) và mục đích yêu cầu",
        "Đăng nhập thử bằng mật khẩu cũ xem trang web có hoạt động không"
      ],
      "correctIndex": 2,
      "timeLimitSec": 20,
      "points": 100,
      "explanation": "Slide 17 nhấn mạnh: 'Trước khi nhấp: dừng 10 giây, kiểm tra người gửi, link và mục đích'. Sau đó nếu nghi ngờ: không bấm link, chụp màn hình, báo giảng viên/IT."
    },
    {
      "id": "q9",
      "category": "Bảo mật dữ liệu",
      "question": "Loại dữ liệu nào TUYỆT ĐỐI KHÔNG ĐƯỢC nhập vào khung chat của các công cụ AI công cộng (ChatGPT, Gemini...)?",
      "options": [
        "Đoạn văn bản giáo trình cần tóm tắt thành 5 gạch đầu dòng",
        "Mật khẩu tài khoản, mã OTP, số CCCD/thẻ ngân hàng và dữ liệu cá nhân nhạy cảm",
        "Yêu cầu tạo bảng kế hoạch Trello cho đề tài sản phẩm cuối khóa",
        "Bối cảnh môn học và định dạng bảng Markdown mong muốn"
      ],
      "correctIndex": 1,
      "timeLimitSec": 20,
      "points": 100,
      "explanation": "Slide 10 & 18: Tuyệt đối không nhập mật khẩu, mã OTP, thông tin thẻ, CCCD hay dữ liệu cá nhân nhạy cảm vào chatbot AI để tránh nguy cơ rò rỉ dữ liệu."
    },
    {
      "id": "q10",
      "category": "Bảo mật tài khoản",
      "question": "Combo biện pháp nào giúp bảo vệ tài khoản học tập (Email TDMU, LMS) và tài khoản AI an toàn nhất?",
      "options": [
        "Dùng chung 1 mật khẩu ngày sinh cho mọi nơi để đỡ quên và lưu sẵn trên máy phòng lab",
        "Mật khẩu dài riêng biệt + Bật xác thực 2 lớp (2FA/MFA) + Đăng xuất khi dùng thiết bị lạ",
        "Chỉ cần đặt mật khẩu dài 6 ký tự và tắt thông báo đăng nhập cho đỡ phiền",
        "Chia sẻ tài khoản email trường cho bạn cùng nhóm để cùng đăng nhập làm bài cho tiện"
      ],
      "correctIndex": 1,
      "timeLimitSec": 25,
      "points": 100,
      "explanation": "Slide 18 quy định 4 lá chắn bảo mật: (1) Mật khẩu mạnh không dùng lại; (2) Bật 2FA/MFA; (3) Không nhập dữ liệu nhạy cảm vào chatbot; (4) Thiết bị an toàn (cập nhật trình duyệt, khóa màn hình, đăng xuất thiết bị lạ)."
    }
  ],
  "phishingCases": [
    {
      "id": "ph-1",
      "channel": "email",
      "title": "Case 1: Học bổng Khuyến khích 3.500.000đ sắp hết hạn",
      "senderName": "Phòng Công tác Sinh viên TDMU",
      "senderAddress": "ctsv@tdmu-portal.info",
      "subject": "[KHẨN] Xác nhận nhận Học bổng KKHT đợt 1 trị giá 3.500.000đ",
      "time": "19:15 hôm nay",
      "bodyHtml": "<p>Chào bạn sinh viên,</p><p>Chúc mừng bạn đã có tên trong danh sách nhận <b>Học bổng Khuyến khích học tập trị giá 3.500.000đ</b>. Do ngân sách đang chốt sổ cuối ngày, bạn bắt buộc phải xác nhận tài khoản trong vòng <b>02 giờ</b> kể từ khi nhận email này, nếu quá hạn suất học bổng sẽ tự động chuyển cho sinh viên khác.</p><p>Truy cập cổng xác minh: <a href=\"#\" class=\"sim-trap-link\" data-real-url=\"https://tdmu-edu-vn.support-xacminh.com/hocbong\">https://tdmu.edu.vn/hoc-bong-2026</a> và nhập đầy đủ Họ tên, MSSV, số CCCD, số tài khoản ngân hàng kèm mã OTP để giải ngân ngay tối nay.</p><p><a href=\"#\" class=\"sim-cta-btn sim-trap-link\" data-real-url=\"https://tdmu-edu-vn.support-xacminh.com/hocbong\">Xác nhận nhận học bổng ngay</a></p>",
      "attachmentName": "",
      "isPhishing": true,
      "difficulty": "Dễ",
      "breachPreview": {
        "fakeUrl": "https://tdmu-edu-vn.support-xacminh.com/hocbong",
        "stolenItems": [
          "Số CCCD & thông tin định danh cá nhân",
          "Số tài khoản / số thẻ ngân hàng",
          "Mã OTP giao dịch chiếm đoạt tiền trong tài khoản"
        ],
        "riskTitle": "CẢNH BÁO ĐỎ: BẠN VỪA SẬP BẪY TRANG GIẢ MẠO CHIẾM ĐOẠT TÀI CHÍNH!",
        "riskDetail": "Liên kết nhìn giống tdmu.edu.vn nhưng thực chất chuyển hướng tới tên miền lừa đảo support-xacminh.com. Kẻ gian dùng chiêu ép thời gian 02 giờ để lấy CCCD và mã OTP ngân hàng của bạn."
      },
      "signs": {
        "A": "Địa chỉ gửi ctsv@tdmu-portal.info là tên miền giả .info (email chính thức phải có đuôi @tdmu.edu.vn).",
        "B": "Thúc ép cực gấp ('trong vòng 02 giờ', 'chuyển cho người khác') để nạn nhân hoảng sợ làm theo.",
        "C": "Chữ hiển thị là tdmu.edu.vn nhưng URL thật dẫn tới tdmu-edu-vn.support-xacminh.com/hocbong.",
        "D": "Không có tệp đính kèm nhưng nhúng nút CTA dẫn ra trang web giả mạo.",
        "E": "Yêu cầu dữ liệu tối mật: số CCCD, số tài khoản ngân hàng và mã OTP.",
        "F": "Không bấm link, không nhập OTP; chụp màn hình và hỏi lại Phòng CTSV/Cố vấn học tập hoặc báo IT trường."
      },
      "takeaway": "Mọi thông báo trúng tiền/học bổng mà hối xác nhận gấp trong vài giờ và đòi OTP đều là Phishing 100%."
    },
    {
      "id": "ph-2",
      "channel": "zalo",
      "title": "Case 2: Tin nhắn 'Thầy/Cô' nhờ điểm danh bù & gửi mã OTP",
      "senderName": "Thầy Minh - TT Chuyển đổi số",
      "senderAddress": "Zalo SĐT lạ: 0918.xxx.402 (Tài khoản mới tạo)",
      "subject": "Tin nhắn Zalo khẩn cấp lúc 19h30",
      "time": "19:32 hôm nay",
      "bodyHtml": "<p>Alo em ơi, tối nay hệ thống E-Learning TDMU đang bảo trì đột xuất nên không vào điểm danh được. 5 phút nữa thầy phải chốt danh sách nộp lên Trung tâm rồi.</p><p>Em bấm nhanh vào link điểm danh dự phòng này cho cả nhóm nhé: <a href=\"#\" class=\"sim-trap-link\" data-real-url=\"https://diem-danh-tdmu.web-nhanh.top/qr\">https://elearning.tdmu.edu.vn/diem-danh-bu</a></p><p>Xong gửi thầy luôn mã OTP 6 số vừa nhắn về điện thoại/email của em để thầy xác thực đồng bộ tài khoản sinh viên trên hệ thống mới, gấp lắm!</p><p><a href=\"#\" class=\"sim-cta-btn sim-trap-link\" data-real-url=\"https://diem-danh-tdmu.web-nhanh.top/qr\">Mở trang điểm danh bù ngay</a></p>",
      "attachmentName": "",
      "isPhishing": true,
      "difficulty": "Trung bình",
      "breachPreview": {
        "fakeUrl": "https://diem-danh-tdmu.web-nhanh.top/qr",
        "stolenItems": [
          "Mã OTP 6 số đặt lại mật khẩu Microsoft 365 / Email sinh viên",
          "Quyền truy cập Zalo hoặc tài khoản ngân hàng liên kết SĐT",
          "Danh bạ bạn cùng lớp để kẻ gian tiếp tục đi lừa cả nhóm"
        ],
        "riskTitle": "CẢNH BÁO ĐỎ: CHIẾM QUYỀN TÀI KHOẢN (ACCOUNT TAKEOVER)!",
        "riskDetail": "Kẻ gian giả mạo ảnh đại diện và tên giảng viên trên Zalo SĐT lạ. Link dẫn tới tên miền .web-nhanh.top và mã OTP 6 số thực chất dùng để cướp tài khoản email/Zalo của bạn."
      },
      "signs": {
        "A": "Dùng tên và ảnh đại diện giống giảng viên nhưng nhắn từ SĐT lạ mới tạo, không có lịch sử chat trước đó.",
        "B": "Tạo áp lực '5 phút nữa chốt sổ', 'gấp lắm' đánh vào tâm lý sợ bị đánh vắng buổi tối.",
        "C": "Link hiển thị elearning.tdmu.edu.vn nhưng URL thật là diem-danh-tdmu.web-nhanh.top/qr.",
        "D": "Không đính kèm file nhưng dụ bấm link hoặc quét mã QR giả.",
        "E": "Đòi mã OTP 6 số gửi về điện thoại/email của sinh viên.",
        "F": "Không bấm link, không gửi OTP cho bất kỳ ai; nhắn vào group lớp chính thức hoặc gọi trực tiếp xác nhận với giảng viên."
      },
      "takeaway": "Giảng viên thật không bao giờ xin mã OTP cá nhân của sinh viên dưới bất kỳ lý do kỹ thuật nào."
    },
    {
      "id": "ph-3",
      "channel": "email",
      "title": "Case 3: Thông báo hạn nộp Sản phẩm cuối khóa từ E-Learning",
      "senderName": "Hệ thống E-Learning TDMU",
      "senderAddress": "no-reply@tdmu.edu.vn",
      "subject": "[E-Learning TDMU] Nhắc nhở hạn nộp Sản phẩm cuối khóa - CĐ Công nghệ số",
      "time": "16:00 hôm nay",
      "bodyHtml": "<p>Xin chào các bạn sinh viên lớp Chuyên đề Công nghệ số,</p><p>Hệ thống xin nhắc lịch nộp <b>Sản phẩm cuối khóa</b> (áp dụng cho cả 3 hướng sản phẩm). Các cá nhân/nhóm (2–4 người) vui lòng kiểm tra đủ: Link sản phẩm hoàn chỉnh, Link Trello/Kanban và File thuyết trình 7 slide (.pptx hoặc .pdf).</p><p>Truy cập cổng môn học chính thức để nộp bài trước hạn chót trên lịch học phần: <a href=\"#\" class=\"sim-trap-link\" data-real-url=\"https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042\">https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042</a></p><p><a href=\"#\" class=\"sim-cta-btn sim-trap-link\" data-real-url=\"https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042\">Đi tới cổng E-Learning TDMU</a></p><p><i>Lưu ý bảo mật: Nhà trường không bao giờ yêu cầu sinh viên gửi mật khẩu hay mã OTP qua email.</i></p>",
      "attachmentName": "",
      "isPhishing": false,
      "difficulty": "Khó (Bẫy Thật 100%)",
      "breachPreview": {
        "fakeUrl": "https://elearning.tdmu.edu.vn/mod/assign/view.php?id=6042",
        "stolenItems": [],
        "riskTitle": "XÁC NHẬN AN TOÀN: ĐÂY LÀ EMAIL THẬT 100% TỪ HỆ THỐNG TDMU!",
        "riskDetail": "Tên miền gửi (no-reply@tdmu.edu.vn) và liên kết (elearning.tdmu.edu.vn) khớp hoàn toàn tên miền chính thức của trường, không thúc ép hoảng loạn và không yêu cầu mật khẩu/OTP."
      },
      "signs": {
        "A": "Địa chỉ gửi hợp lệ 100%: no-reply@tdmu.edu.vn — đúng tên miền chính thức Trường ĐH Thủ Dầu Một.",
        "B": "Không dọa khóa tài khoản hay ép xác nhận trong vài phút; nội dung nhắc lịch học tập bình thường.",
        "C": "Liên kết hiển thị và URL thật trùng khớp hoàn toàn trên tên miền chính thức elearning.tdmu.edu.vn.",
        "D": "Không đính kèm file lạ (.exe, .xlsm, .zip đặt mật khẩu).",
        "E": "Không yêu cầu cung cấp mật khẩu, OTP, CCCD hay thông tin tài khoản ngân hàng.",
        "F": "Thông báo thật, an toàn! Sinh viên vẫn có thể mở trình duyệt tự gõ elearning.tdmu.edu.vn để yên tâm tuyệt đối khi nộp bài."
      },
      "takeaway": "Không phải email nào có link cũng là Phishing! Hãy kiểm tra đủ 6 tiêu chí A–F để không bỏ sót thông báo học tập quan trọng."
    },
    {
      "id": "ph-4",
      "channel": "email",
      "title": "Case 4: File Excel danh sách 'Cảnh báo học vụ & Nợ phí KTX'",
      "senderName": "Ban Quản Lý KTX & Đào Tạo",
      "senderAddress": "thongbao@tdmu-daotao.edu-vn.org",
      "subject": "KHẨN: Danh sách sinh viên bị cảnh báo học vụ và khóa cổng đăng ký môn 2026",
      "time": "20:05 hôm nay",
      "bodyHtml": "<p>Thông báo tới toàn thể sinh viên,</p><p>Qua rà soát dữ liệu học kỳ vừa qua, một số sinh viên nằm trong danh sách cảnh báo học vụ và nợ lệ phí KTX sẽ bị khóa tài khoản đăng ký học phần vào sáng mai.</p><p>Sinh viên tải tệp đính kèm bên dưới về máy tính để tra cứu MSSV của mình. <b>Lưu ý:</b> File có bảo vệ dữ liệu nội bộ, khi mở Excel hãy bấm nút <b>\"Enable Content / Enable Macro\"</b> ở thanh màu vàng phía trên để hiển thị danh sách.</p><p><a href=\"#\" class=\"sim-cta-btn sim-trap-link\" data-real-url=\"https://cdn-files-storage.top/download/Danh_sach_sinh_vien_bi_canh_bao_hoc_vu_2026.xlsm\">Tải ngay file .xlsm để tra cứu MSSV</a></p>",
      "attachmentName": "Danh_sach_sinh_vien_bi_canh_bao_hoc_vu_2026.xlsm",
      "isPhishing": true,
      "difficulty": "Trung bình",
      "breachPreview": {
        "fakeUrl": "https://cdn-files-storage.top/download/Danh_sach_sinh_vien_bi_canh_bao_hoc_vu_2026.xlsm",
        "stolenItems": [
          "Toàn bộ mật khẩu đã lưu trên trình duyệt Chrome/Edge",
          "Mã độc (Macro Malware / Ransomware) mã hóa dữ liệu đồ án trên laptop",
          "Cookie phiên đăng nhập Gmail, Facebook và LMS"
        ],
        "riskTitle": "CẢNH BÁO ĐỎ: MÃ ĐỘC MACRO TRONG FILE EXCEL (.XLSM) ĐÃ KÍCH HOẠT!",
        "riskDetail": "Tệp đuôi .xlsm chứa mã lệnh Macro tự động chạy ngầm khi bạn bấm 'Enable Content / Enable Macro'. Đây là chiêu phát tán mã độc đánh cắp mật khẩu và khóa dữ liệu cực kỳ nguy hiểm."
      },
      "signs": {
        "A": "Tên miền giả mạo tinh vi (@tdmu-daotao.edu-vn.org), dùng dấu gạch ngang và đuôi .org thay vì @tdmu.edu.vn.",
        "B": "Đánh vào nỗi sợ hãi lớn của sinh viên ('cảnh báo học vụ', 'khóa cổng đăng ký môn vào sáng mai').",
        "C": "Nút tải tệp trỏ ra tên miền lạ cdn-files-storage.top không thuộc hạ tầng trường.",
        "D": "Tệp đính kèm đuôi .xlsm (Excel chứa Macro) và ép bấm 'Enable Content / Enable Macro' để xem danh sách.",
        "E": "Không xin OTP trực tiếp nhưng Macro độc hại sẽ âm thầm đánh cắp mật khẩu và dữ liệu trên máy tính.",
        "F": "Không tải và tuyệt đối không bấm Enable Macro; xóa email và báo ngay cho giảng viên hoặc Trung tâm CNTT."
      },
      "takeaway": "Thấy file .xlsm, .exe, .scr hoặc hướng dẫn bấm 'Enable Macro' để xem điểm/danh sách cảnh báo thì 100% là mã độc!"
    },
    {
      "id": "ph-5",
      "channel": "lms",
      "title": "Case 5: Quà tặng ChatGPT Plus & Gemini Pro miễn phí 1 năm",
      "senderName": "Liên minh AI Giáo dục Việt Nam",
      "senderAddress": "support@edu-ai-vietnam.org",
      "subject": "[Ưu đãi TDMU] Nhận gói ChatGPT Plus & Gemini Pro miễn phí 12 tháng bằng Email sinh viên",
      "time": "18:45 hôm nay",
      "bodyHtml": "<p>Chúc mừng sinh viên Trường ĐH Thủ Dầu Một!</p><p>Nhằm hỗ trợ sinh viên làm Sản phẩm cuối khóa môn Năng lực số, hệ thống mở cổng tặng <b>500 suất ChatGPT Plus & Gemini Pro miễn phí 1 năm</b> (chỉ còn 14 suất cuối cùng!).</p><p>Bấm vào cổng xác thực SSO sinh viên dưới đây và đăng nhập bằng Email trường + Mật khẩu hiện tại để kích hoạt bản quyền ngay: <a href=\"#\" class=\"sim-trap-link\" data-real-url=\"https://login.tdmu.edu.vn.verify-sso.cc/oauth\">https://login.tdmu.edu.vn/ai-student-pack</a></p><p><a href=\"#\" class=\"sim-cta-btn sim-trap-link\" data-real-url=\"https://login.tdmu.edu.vn.verify-sso.cc/oauth\">Đăng nhập SSO nhận gói AI miễn phí</a></p>",
      "attachmentName": "",
      "isPhishing": true,
      "difficulty": "Khó",
      "breachPreview": {
        "fakeUrl": "https://login.tdmu.edu.vn.verify-sso.cc/oauth",
        "stolenItems": [
          "Email sinh viên (@student.tdmu.edu.vn) & Mật khẩu đăng nhập SSO",
          "Toàn bộ dữ liệu bài tập, sản phẩm cuối khóa trên OneDrive / Google Drive",
          "Quyền truy cập cổng LMS & Cổng đăng ký học phần"
        ],
        "riskTitle": "CẢNH BÁO ĐỎ: BẪY TÊN MIỀN PHỤ ĐÁNH CẮP TÀI KHOẢN SSO TRƯỜNG!",
        "riskDetail": "Chữ 'login.tdmu.edu.vn' chỉ là tên miền phụ đánh lừa mắt nhìn; tên miền gốc thực sự nằm ngay trước dấu '/' là 'verify-sso.cc'. Nhập tài khoản trường vào đây đồng nghĩa trao toàn bộ email và dữ liệu học tập cho kẻ xấu."
      },
      "signs": {
        "A": "Đơn vị tự xưng 'Liên minh AI Giáo dục' gửi từ tên miền lạ edu-ai-vietnam.org, không phải thông báo của TDMU.",
        "B": "Tạo tâm lý khan hiếm giả ('chỉ còn 14 suất cuối cùng') đánh đúng nhu cầu cần AI làm đồ án.",
        "C": "Kỹ thuật tên miền phụ (Subdomain trick): chuỗi 'login.tdmu.edu.vn' đứng trước, tên miền gốc thực tế là 'verify-sso.cc'.",
        "D": "Không có file đính kèm, sử dụng trang đăng nhập SSO giả mạo.",
        "E": "Yêu cầu nhập Email sinh viên + Mật khẩu SSO hiện tại của trường.",
        "F": "Luôn đọc phần tên miền ngay trước dấu '/' đầu tiên; không đăng nhập SSO trường trên trang lạ; kiểm chứng ưu đãi tại tdmu.edu.vn."
      },
      "takeaway": "Cảnh giác bẫy 'login.tdmu.edu.vn.verify-sso.cc' — tên miền thật luôn nằm ngay trước dấu gạch chéo '/' đầu tiên!"
    },
    {
      "id": "ph-6",
      "channel": "zalo",
      "title": "Case 6: Zalo OA tích vàng thông báo bảo trì & nhắc bật 2FA",
      "senderName": "Trung tâm Chuyển đổi số TDMU",
      "senderAddress": "Zalo Official Account (Đã xác thực tích vàng)",
      "subject": "Thông báo lịch bảo trì định kỳ hệ thống & Khuyến nghị bật 2FA",
      "time": "17:00 hôm nay",
      "bodyHtml": "<p><b>[THÔNG BÁO CHÍNH THỨC]</b></p><p>Trung tâm Chuyển đổi số TDMU thông báo bảo trì định kỳ cổng thông tin từ 00h00 đến 02h00 sáng Chủ nhật.</p><p>Trong thời gian này sinh viên không cần thực hiện bất kỳ thao tác xác minh nào. Để bảo vệ tài khoản học tập, sinh viên chủ động xem hướng dẫn bật Xác thực 2 lớp (2FA) tại cổng chính thức: <a href=\"#\" class=\"sim-trap-link\" data-real-url=\"https://tdmu.edu.vn/huong-dan-bat-2fa\">https://tdmu.edu.vn/huong-dan-bat-2fa</a></p><p><a href=\"#\" class=\"sim-cta-btn sim-trap-link\" data-real-url=\"https://tdmu.edu.vn/huong-dan-bat-2fa\">Xem hướng dẫn bật 2FA trên tdmu.edu.vn</a></p><p><i>Trung tâm KHÔNG bao giờ yêu cầu sinh viên gửi mật khẩu hay mã OTP qua tin nhắn.</i></p>",
      "attachmentName": "",
      "isPhishing": false,
      "difficulty": "Khó (Bẫy Thật 100%)",
      "breachPreview": {
        "fakeUrl": "https://tdmu.edu.vn/huong-dan-bat-2fa",
        "stolenItems": [],
        "riskTitle": "XÁC NHẬN AN TOÀN: ĐÂY LÀ THÔNG BÁO THẬT 100% TỪ ZALO OA CHÍNH THỨC!",
        "riskDetail": "Kênh gửi là Zalo OA đã xác thực tích vàng, liên kết trỏ về đúng tên miền tdmu.edu.vn, không hối thúc xác minh và còn chủ động nhắc sinh viên không gửi mật khẩu/OTP."
      },
      "signs": {
        "A": "Zalo Official Account có dấu tích vàng xác thực chính chủ của đơn vị, không phải nick cá nhân SĐT lạ.",
        "B": "Không dọa khóa tài khoản hay ép làm gấp; nêu rõ 'không cần thao tác xác minh nào'.",
        "C": "Liên kết hiển thị và URL thật đều trỏ về đúng tên miền chính thức tdmu.edu.vn.",
        "D": "Không đính kèm file lạ (.xlsm/.exe) hay mã QR chuyển tiền.",
        "E": "Không yêu cầu cung cấp bất kỳ dữ liệu nhạy cảm nào.",
        "F": "Tin nhắn thật, an toàn! Sinh viên nên đọc hướng dẫn và bật 2FA ngay để bảo vệ tài khoản."
      },
      "takeaway": "Phản xạ bảo mật chuẩn không phải 'thấy gì cũng bấm Phishing', mà là kiểm tra bình tĩnh 6 tiêu chí A–F để phân biệt đúng Thật và Giả."
    }
  ]
};
