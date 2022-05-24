<div class="app-menu navbar-menu">
    <div class="navbar-brand-box">
        <a href="{{ route('home') }}" class="logo logo-dark">
            <span class="logo-sm">
                <img src="{{ URL::asset('assets/images/logo-sm.png') }}" alt="" height="22" />
            </span>
            <span class="logo-lg">
                <img src="{{ URL::asset('assets/images/logo-dark.png') }}" alt="" height="17" />
            </span>
        </a>
        <a href="{{ route('home') }}" class="logo logo-light">
            <span class="logo-sm">
                <img src="{{ URL::asset('assets/images/logo-sm.png') }}" alt="" height="22" />
            </span>
            <span class="logo-lg">
                <img src="{{ URL::asset('assets/images/logo-light.png') }}" alt="" height="17" />
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">
            <div id="two-column-menu"></div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span>{{ __('Menu') }}</span></li>
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('home') ? 'active' : '' }}" href="{{ route('home') }}">
                        <i class="mdi mdi-home"></i> <span>{{ __('Home') }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('deposit.*') ? 'active' : '' }}" href="#sidebarDeposit" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDeposit">
                        <i class="mdi mdi-cash-plus"></i> <span>Nạp tiền</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarDeposit">
                        <ul class="nav nav-sm flex-column">
                            @can('charge-deposit')
                                <li class="nav-item">
                                    <a href="{{ route('deposit.thesieure') }}" class="nav-link">Nạp Thesieure.com</a>
                                </li>
                            @endcan
                            <li class="nav-item">
                                <a href="{{ route('deposit.charge') }}" class="nav-link">Nạp thẻ cào</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('order.history') ? 'active' : '' }}" href="{{ route('order.history') }}">
                        <i class="mdi mdi-cash-fast"></i> <span>Đơn đã đặt</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link {{ Request::routeIs('user.tran-log') ? 'active' : '' }}" href="{{ route('user.tran-log') }}">
                        <i class="mdi mdi-history"></i> <span>Lịch sử giao dịch</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#tools" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="tools">
                        <i class="mdi mdi-toolbox-outline"></i> <span>Công cụ</span>
                    </a>
                    <div class="collapse menu-dropdown" id="tools">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="{{ route('tools.get-facebook-id') }}" class="nav-link">Lấy ID Facebook</a>
                            </li>
                        </ul>
                    </div>
                </li>
                @if($sidebarCategories->count() > 0)
                    <li class="menu-title"><span>{{ __('Services') }}</span></li>
                    @foreach($sidebarCategories as $category)
                        <li class="nav-item">
                            <a class="nav-link menu-link" href="#{{ $category->slug }}" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="{{ $category->slug }}">
                                <i class="{{ $category->icon }}"></i> <span>{{ $category->name }}</span>
                            </a>
                            <div class="collapse menu-dropdown" id="{{ $category->slug }}">
                                <ul class="nav nav-sm flex-column">
                                    @foreach($category->services as $service)
                                        <li class="nav-item">
                                            <a href="{{ route('service.index', [$service->category->slug, $service->slug]) }}" class="nav-link" data-key="t-{{ $service->slug }}">{{ $service->name }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </li>
                    @endforeach
                @endif
                @if(Auth::user()->isAdmin())
                    <li class="menu-title"><span>{{ __('Manage') }}</span></li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.users.*') ? 'active' : '' }}" href="{{ route('admin.users.index') }}">
                            <i class="mdi mdi-account-multiple-outline"></i> <span>{{ __('Users') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.money') ? 'active' : '' }}" href="{{ route('admin.money') }}">
                            <i class="mdi mdi-cash"></i> <span>Cộng trừ tiền</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.transactions') ? 'active' : '' }}" href="{{ route('admin.transactions') }}">
                            <i class="mdi mdi-cash"></i> <span>Nhật ký giao dịch</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.deposits.*') ? 'active' : '' }}" href="{{ route('admin.deposits.index') }}">
                            <i class="mdi mdi-cash-check"></i> <span>Tiền đã nạp</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.categories.*') ? 'active' : '' }}" href="{{ route('admin.categories.index') }}">
                            <i class="mdi mdi-folder-multiple-outline"></i> <span>{{ __('Categories') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.services.*') ? 'active' : '' }}" href="{{ route('admin.services.index') }}">
                            <i class="mdi mdi-cube-outline"></i> <span>{{ __('Services') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.packages.*') ? 'active' : '' }}" href="{{ route('admin.packages.index') }}">
                            <i class="mdi mdi-package-variant-closed"></i> <span>{{ __('Service Packages') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link {{ Request::routeIs('admin.orders.*') ? 'active' : '' }}" href="{{ route('admin.orders.index') }}">
                            <i class="mdi mdi-cart-outline"></i> <span>Đơn dịch vụ</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="#sidebarSettings" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSettings">
                            <i class="mdi mdi-cog-outline"></i> <span>Cài đặt</span>
                        </a>
                        <div class="collapse menu-dropdown" id="sidebarSettings">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="{{ route('admin.settings.general') }}" class="nav-link">Cấu hình chung</a>
                                </li>
                                <li class="nav-item">
                                    <a href="{{ route('admin.settings.notifications') }}" class="nav-link">Thông báo</a>
                                </li>
                                <li class="nav-item">
                                    <a href="{{ route('admin.settings.deposit') }}" class="nav-link">Cấu hình nạp tiền</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</div>
<div class="vertical-overlay"></div>
