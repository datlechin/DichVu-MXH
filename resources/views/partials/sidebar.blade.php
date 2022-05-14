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
                    <a class="nav-link menu-link {{ Request::routeIs('deposit') ? 'active' : '' }}" href="{{ route('deposit') }}">
                        <i class="mdi mdi-cash"></i> <span>{{ __('Deposit') }}</span>
                    </a>
                </li>
                @if($categories->count() > 0)
                    <li class="menu-title"><span>{{ __('Services') }}</span></li>
                    @foreach($categories as $category)
                        <li class="nav-item">
                            <a class="nav-link menu-link" href="#{{ $category->slug }}" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="{{ $category->slug }}">
                                <i class="{{ $category->icon }}"></i> <span>{{ $category->name }}</span>
                            </a>
                            <div class="collapse menu-dropdown" id="{{ $category->slug }}">
                                <ul class="nav nav-sm flex-column">
                                    @foreach($category->services as $service)
                                        <li class="nav-item">
                                            <a href="{{ route('service', $service->slug) }}" class="nav-link">{{ $service->name }}</a>
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
                @endif
            </ul>
        </div>
    </div>
</div>
<div class="vertical-overlay"></div>
