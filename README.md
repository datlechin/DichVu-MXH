<p align="center">
<a href="https://travis-ci.org/datlechin/DichVu-MXH"><img src="https://app.travis-ci.com/datlechin/DichVu-MXH.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/datlechin/DichVu-MXH" alt="License"></a>
</p>

# Dịch vụ Mạng xã hội

## Cài đặt

Cài đặt môi trường phát triển trên máy cục bộ


```bash
git clone https://github.com/datlechin/DichVu-MXH
cd DichVu-MXH
cp .env.example .env
composer install
npm install
php artisan key:generate
```

Để chạy ứng dụng, sử dụng lệnh `php artisan serve`. Sau đó truy cập vào trang web bằng đường dẫn **http://127.0.0.1:8000**.

### Trước khi chạy

Khi đã chạy xong các câu lệnh trên, quá trình cài đặt trang web vẫn chưa hoàn tất:

Chạy lệnh sau để migrations và seeds:

```bash
php artisan migrate --seed
```

Sau đó chạy lệnh bên dưới để biên dịch các tệp js/css:

```bash
npm run dev
```

## Đóng góp

Đừng ngần ngại mà đóng góp cho dự án này bằng cách gửi các PR sửa lỗi hoặc thêm chức năng mới vào dự án.

## Giấy phép

Dự án này là mã nguồn mở dựa trên [giấy phép MIT](https://opensource.org/licenses/MIT).
