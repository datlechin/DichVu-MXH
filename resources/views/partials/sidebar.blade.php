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
                    <a class="nav-link menu-link" href="{{ route('home') }}">
                        <i class="mdi mdi-speedometer"></i> <span>{{ __('Dashboard') }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                        <i class="mdi mdi-view-carousel-outline"></i> <span>@lang('translation.layouts') </span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarLayouts">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="layouts-horizontal" class="nav-link" target="_blank">@lang('translation.horizontal') </a>
                            </li>
                            <li class="nav-item">
                                <a href="layouts-detached" class="nav-link" target="_blank">@lang('translation.detached') </a>
                            </li>
                            <li class="nav-item">
                                <a href="layouts-two-column" class="nav-link" target="_blank">@lang('translation.two-column') </a>
                            </li>
                            <li class="nav-item">
                                <a href="layouts-vertical-hovered" class="nav-link" target="_blank">@lang('translation.hovered') </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="vertical-overlay"></div>
