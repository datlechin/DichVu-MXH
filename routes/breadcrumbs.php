<?php

use App\Models\Category;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbsTrait;
use Illuminate\Support\Facades\Route;

Breadcrumbs::for('home', function (BreadcrumbsTrait $trail) {
    if (! Route::is('home')) {
        $trail->push('Trang chủ', route('home'));
    }
});

Breadcrumbs::for('deposit', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Nạp tiền', route('deposit'));
});

Breadcrumbs::for('tools', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Công cụ');
});

Breadcrumbs::for('tools.get-facebook-id', function (BreadcrumbsTrait $trail) {
    $trail->parent('tools');
    $trail->push('Lấy ID Facebook', route('tools.get-facebook-id'));
});

Breadcrumbs::for('service', function (BreadcrumbsTrait $trail, Category $category) {
    $trail->parent('home');
    $trail->push($category->name);
});

Breadcrumbs::for('admin.users.index', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Quản lý người dùng', route('admin.users.index'));
});

Breadcrumbs::for('admin.users.edit', function (BreadcrumbsTrait $trail, $id) {
    $trail->parent('admin.users.index');
    $trail->push('Sửa người dùng', route('admin.users.edit', $id));
});

Breadcrumbs::for('admin.money', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Cộng trừ tiền', route('admin.money'));
});

Breadcrumbs::for('admin.deposits.index', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Quản lý nạp tiền', route('admin.deposits.index'));
});

Breadcrumbs::for('admin.deposits.edit', function (BreadcrumbsTrait $trail, $id) {
    $trail->parent('admin.deposits.index');
    $trail->push('Sửa nạp tiền', route('admin.deposits.edit', $id));
});

Breadcrumbs::for('admin.categories.index', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Quản lý danh mục', route('admin.categories.index'));
});

Breadcrumbs::for('admin.categories.edit', function (BreadcrumbsTrait $trail, $id) {
    $trail->parent('admin.categories.index');
    $trail->push('Sửa danh mục', route('admin.categories.edit', $id));
});

Breadcrumbs::for('admin.services.index', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Quản lý dịch vụ', route('admin.services.index'));
});

Breadcrumbs::for('admin.services.edit', function (BreadcrumbsTrait $trail, $id) {
    $trail->parent('admin.services.index');
    $trail->push('Sửa dịch vụ', route('admin.services.edit', $id));
});

Breadcrumbs::for('admin.packages.index', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Quản lý gói dịch vụ', route('admin.packages.index'));
});

Breadcrumbs::for('admin.packages.edit', function (BreadcrumbsTrait $trail, $id) {
    $trail->parent('admin.packages.index');
    $trail->push('Sửa gói dịch vụ', route('admin.packages.edit', $id));
});

Breadcrumbs::for('admin.orders.index', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Quản lý đơn dịch vụ', route('admin.orders.index'));
});

Breadcrumbs::for('admin.orders.edit', function (BreadcrumbsTrait $trail, $id) {
    $trail->parent('admin.orders.index');
    $trail->push('Sửa đơn dịch vụ', route('admin.orders.edit', $id));
});

Breadcrumbs::for('admin.settings', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Cài đặt');
});

Breadcrumbs::for('admin.settings.general', function (BreadcrumbsTrait $trail) {
    $trail->parent('admin.settings');
    $trail->push('Cấu hình chung');
});

Breadcrumbs::for('admin.settings.site', function (BreadcrumbsTrait $trail) {
    $trail->parent('admin.settings');
    $trail->push('Cấu hình trang web');
});

Breadcrumbs::for('admin.settings.notifications', function (BreadcrumbsTrait $trail) {
    $trail->parent('admin.settings');
    $trail->push('Cấu hình thông báo');
});

Breadcrumbs::for('admin.transactions', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Nhật ký giao dịch');
});

Breadcrumbs::for('user.profile', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Thông tin cá nhân', route('user.profile'));
});

Breadcrumbs::for('user.change-password', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Đổi mật khẩu', route('user.change-password'));
});

Breadcrumbs::for('user.auth-log', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Nhật ký đăng nhập', route('user.auth-log'));
});

Breadcrumbs::for('user.tran-log', function (BreadcrumbsTrait $trail) {
    $trail->parent('home');
    $trail->push('Lịch sử giao dịch', route('user.tran-log'));
});
