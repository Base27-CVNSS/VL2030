# VL2030 · Strategy & Planning Dashboard

Dashboard chiến lược tĩnh cho GitHub Pages, kết nối **Quy hoạch 2030 → 3 trụ cột → 8 lĩnh vực → 9 bài toán → kiến trúc dữ liệu → IOC → lộ trình → KPI**.

## Nguyên tắc

- **QH**: chỉ tiêu/mục tiêu lấy từ Báo cáo Điều chỉnh Quy hoạch tỉnh Vĩnh Long thời kỳ 2021–2030, tầm nhìn 2050.
- **AF**: nội dung khung VL-AF và 9 bài toán từ bản thảo người dùng cung cấp.
- **ĐX**: KPI kỹ thuật/điều hành đề xuất để biến kiến trúc thành hệ thống có thể đo lường.
- Không hiển thị số liệu “live” giả. Khi chưa có nguồn dữ liệu, IOC hiển thị **N/A**.
- Mỗi KPI có công thức, đơn vị, tần suất, nguồn/chủ dữ liệu và kết quả kỳ vọng.
- Giao diện sáng, tối giản, navy–ivory–gold, phong cách tư vấn chiến lược.

## Cấu trúc

- `index.html`
- `assets/css/app.css`
- `assets/js/app.js`
- `.nojekyll`

## GitHub Pages

Repo public có thể phát hành từ branch `main`, thư mục `/ (root)` trong **Settings → Pages**.

## Hướng phát triển tiếp

1. Tách KPI/data registry sang JSON hoặc API.
2. Kết nối PostGIS / Data Lake / API Gateway.
3. Bổ sung WebGIS quy hoạch và lớp PMTiles.
4. Kết nối dữ liệu thật cho IOC, giữ provenance/lineage.
5. Bổ sung đăng nhập, phân quyền, audit nếu chuyển sang môi trường nghiệp vụ.

> Đây là dashboard tư vấn/kiến trúc. Các chỉ tiêu QH cần được rà soát với hồ sơ quy hoạch chính thức trước khi dùng trong báo cáo pháp lý hoặc hệ thống điều hành chính thức.
