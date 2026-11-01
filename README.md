# CGE 9 — bản tách `main` + `branches`

Tách từ `CGE_9 / Cambridge Global English 9 (2).html` (4,9 MB, 1 file) thành nhiều file.
Mở `index.html` trực tiếp (file://) hoặc đặt lên static host — không cần build.

## Cấu trúc

```
index.html          khung HTML + thẻ <script> của main
loader.js           nạp branch theo route (CGE.ensure / navigate / boot)
manifest.js         file main, từng branch, quy tắc route → branch   (tự sinh)
index-data.js       chỉ mục tĩnh: entry LMS + khóa MX + số Extra     (tự sinh)
css/                5 file CSS, giữ thứ tự cascade
main/               engine, router, Unit 1 data, vocab, UoE, kỹ năng, hoisted-shared
branches/unit-N/    dữ liệu & bản vá từng unit, nạp khi vào route của unit
branches/extra/     Extra practice + Đề số 1–5 (nạp khi vào #/lms/extra)
assets/img/         60 ảnh (trước là base64 trong JS)
dist/               bản 1 file đã ghép lại (ảnh nhúng)
tools/  tests/      công cụ sinh lại và bộ kiểm thử
```

| Nhánh | Số file | Dung lượng |
|---|---|---|
| `main` | 54 | 951 KB |
| `unit-2` | 22 | 252 KB |
| `unit-3` | 25 | 492 KB |
| `unit-4` | 31 | 403 KB |
| `unit-1` | 15 | 144 KB |
| `unit-5` | 30 | 384 KB |
| `unit-6` | 8 | 318 KB |
| `unit-7` | 10 | 290 KB |
| `extra` | 11 | 94 KB |

## Quy tắc route → branch (`tools/routes.json`)

| Route | Nạp thêm |
|---|---|
| mọi route `#/…` | `unit-1` (bản vá nghe + audio dùng chung nhiều unit) |
| `#/unit/N`, `#/lesson/N/…`, `#/check/N`, `#/start/N` | `unit-(N+1)` |
| `#/uoe/u/l/k` | `unit-(u+1)` |
| `#/skills…` | `unit-5` (bản nghe thay thế nằm trong danh sách kỹ năng) |
| `#/lms/extra…` | `extra` |
| `#/start/NN` (≥ 2 chữ số) | tất cả |

Sidebar, hub LMS và `#/uoe` đọc `index-data.js`, không cần nạp mọi unit.

## Các điểm nhạy cảm đã xử lý (đừng phá khi sửa)

1. **Xáo đáp án** (`CGE.shuffleNew`): bản gốc xáo `MX` đúng 1 lần, chỉ với khóa có trước mốc đó (main + Unit 2–4). Nhánh nạp sau mốc (unit-1/5/6/7, extra) được đánh dấu "đã xử lý" trong `loader.js`, nên thứ tự mở unit không ảnh hưởng kết quả.
2. **`main/121a-hoisted-shared.js`**: `MXG[...]`, `THR.unshift(...)` và 2 wrapper `unit`/`checkPage` từng nằm trong chunk Unit 4/7 nhưng tác động mọi unit, nên kéo lên main. Thứ tự `THR.unshift` được giữ nguyên.
3. **Audio**: script audio gắn `aud` vào `MX` theo chỉ số bước (Unit 1) và theo regex (Unit 3), nên chạy đúng giữa các bản vá `unit-1`; phần Unit 3 là hàm `__audApplyU3` gọi lại ngay sau dữ liệu `unit-3`.
4. **Router**: `hashchange` và lần `route()` đầu gọi `CGE.navigate()` / `CGE.boot()` (nạp dữ liệu rồi mới vẽ). Bản gốc render rỗng/lệch khi mở thẳng URL như `#/uoe/…`; bản tách vẽ đúng.

## Sinh lại (Node ≥ 18, `npm i -g typescript playwright`)

```bash
node tools/split.js CGE_9_original.html cge9      # tách (sửa tools/routes.json nếu đổi quy tắc)
node tools/build-index.js cge9                    # sinh index-data.js — bắt buộc sau mỗi lần split
node tools/build-single.js cge9 out.html --inline-assets   # ghép lại 1 file (tùy chọn)
node tools/scan-patches.js cge9                   # liệt kê code trong branch ghi đè thứ của main
```

## Kiểm thử

```bash
ORIG=CGE_9_original.html SPLIT=cge9/index.html node tests/data.js fwd   # fwd | perm | rev — so MX/LBC/WBC/RDT/MXG/THR…
node tests/crawl.js CGE_9_original.html tests/routes.orig.json            # crawl 241 route từ bản gốc
node tests/compare.js CGE_9_original.html cge9/index.html tests/routes.orig.json --conc=3
```

Kết quả lần chạy cuối: 240/241 route khớp DOM (`#view` + sidebar). Route lệch duy nhất là `#/lesson/0/1`, nơi bản gốc hiện bộ thẻ "15" khi mở thẳng URL do trạng thái cũ từ lần render sớm; điều hướng bình thường cả hai bản đều là 16. Registry dữ liệu khớp hoàn toàn với thứ tự nạp xuôi và một hoán vị thực tế.

## Còn lại / lưu ý

* **Audio `/_blob/…`** (12 tham chiếu) không có trong file gốc đã gửi: cần đặt file mp3 tương ứng hoặc sửa URL trong `branches/unit-1/183-…` và `184-…`.
* **Tailwind** vẫn nạp từ CDN; nên thay bằng CSS build sẵn khi triển khai.
* Unit 1 luôn được nạp; các unit khác chỉ nạp khi vào. Unit 8, 9 chưa có dữ liệu trong bản gốc.
* Chưa kiểm thử tương tác (bấm đáp án, nộp bài, lưu tiến độ) bằng tay; test tự động chỉ so nội dung render.
