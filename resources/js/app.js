/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Version: 1.0.0
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Main Js File
*/

(function () {

    'use strict';

    /**
     *  global variables
     */
    var navbarMenuHTML = document.querySelector('.navbar-menu').innerHTML;
    var horizontalMenuSplit = 6; // after this number all horizontal menus will be moved in More menu options
    var default_lang = 'en'; // set Default Language
    var language = localStorage.getItem('language');

    function initLanguage() {
        // Set new language
        if (language != "null" && language !== default_lang)
            setLanguage(language);
        var languages = document.getElementsByClassName("language");
        languages && languages.forEach(function (dropdown) {
            dropdown.addEventListener('click', function (event) {
                setLanguage(dropdown.getAttribute('data-lang'));
            });
        });
    }

    function setLanguage(lang) {
        if (document.getElementById("header-lang-img")) {
            if (lang == 'en') {
                document.getElementById("header-lang-img").src = "assets/images/flags/us.svg";
            } else if (lang == 'sp') {
                document.getElementById("header-lang-img").src = "assets/images/flags/spain.svg";
            } else if (lang == 'gr') {
                document.getElementById("header-lang-img").src = "assets/images/flags/germany.svg";
            } else if (lang == 'it') {
                document.getElementById("header-lang-img").src = "assets/images/flags/italy.svg";
            } else if (lang == 'ru') {
                document.getElementById("header-lang-img").src = "assets/images/flags/russia.svg";
            }else if (lang == 'ch') {
                document.getElementById("header-lang-img").src = "assets/images/flags/china.svg";
            }else if (lang == 'fr') {
                document.getElementById("header-lang-img").src = "assets/images/flags/french.svg";
            }
            localStorage.setItem('language', lang);
            language = localStorage.getItem('language');
            getLanguage();
        }
    }

    // Multi language setting
    function getLanguage() {
        (language == null) ? setLanguage(default_lang): false;
        var request = new XMLHttpRequest();
        // Instantiating the request object
        request.open("GET", 'assets/lang/' + language + '.json');
        // Defining event listener for readystatechange event
        request.onreadystatechange = function () {
            // Check if the request is compete and was successful
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                Object.keys(data).forEach(function (key) {
                    var elements = document.querySelectorAll("[data-key='" + key + "']");
                    elements.forEach(function (elem) {
                        elem.textContent = data[key];
                    })
                });
            }
        };
        // Sending the request to the server
        request.send();
    }

    function pluginData() {
        /**
         * Common plugins
         */
        /**
         * Toast UI Notification
         */
        var toastExamples = document.querySelectorAll("[data-toast]");
        toastExamples.forEach(function (element) {
            element.addEventListener("click", function () {
                var toastData = {};
                var isToastVal = element.attributes;
                if (isToastVal["data-toast-text"]) {
                    toastData.text = isToastVal["data-toast-text"].value.toString();
                }
                if (isToastVal["data-toast-gravity"]) {
                    toastData.gravity = isToastVal["data-toast-gravity"].value.toString();
                }
                if (isToastVal["data-toast-position"]) {
                    toastData.position = isToastVal["data-toast-position"].value.toString();
                }
                if (isToastVal["data-toast-className"]) {
                    toastData.className = isToastVal["data-toast-className"].value.toString();
                }
                if (isToastVal["data-toast-duration"]) {
                    toastData.duration = isToastVal["data-toast-duration"].value.toString();
                }
                if (isToastVal["data-toast-close"]) {
                    toastData.close = isToastVal["data-toast-close"].value.toString();
                }
                if (isToastVal["data-toast-style"]) {
                    toastData.style = isToastVal["data-toast-style"].value.toString();
                }
                if (isToastVal["data-toast-offset"]) {
                    toastData.offset = isToastVal["data-toast-offset"]
                }
                Toastify({
                    newWindow: true,
                    text: toastData.text,
                    gravity: toastData.gravity,
                    position: toastData.position,
                    className: "bg-" + toastData.className,
                    stopOnFocus: true,
                    offset: {
                        x: toastData.offset ? 50 : 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                        y: toastData.offset ? 10 : 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
                    },
                    duration: toastData.duration,
                    close: toastData.close == "close" ? true : false,
                    style: toastData.style == "style" ? {
                        background: "linear-gradient(to right, #0AB39C, #405189)",
                    } : "",
                }).showToast();
            });
        });

        /**
         * Choices Select plugin
         */
        var choicesExamples = document.querySelectorAll("[data-choices]");
        choicesExamples.forEach(function (item) {
            var choiceData = {};
            var isChoicesVal = item.attributes;
            if (isChoicesVal["data-choices-groups"]) {
                (choiceData.placeholderValue = "This is a placeholder set in the config")
            }
            if (isChoicesVal["data-choices-search-false"]) {
                (choiceData.searchEnabled = false)
            }
            if (isChoicesVal["data-choices-search-true"]) {
                (choiceData.searchEnabled = true)
            }
            if (isChoicesVal["data-choices-removeItem"]) {
                (choiceData.removeItemButton = true)
            }
            if (isChoicesVal["data-choices-sorting-false"]) {
                choiceData.shouldSort = false;
            }
            if (isChoicesVal["data-choices-sorting-true"]) {
                choiceData.shouldSort = true;
            }
            if (isChoicesVal["data-choices-multiple-default"]) {
                // choiceData.removeItemButton=true
            }
            if (isChoicesVal["data-choices-multiple-groups"]) {
                // choiceData.removeItemButton=true
            }
            if (isChoicesVal["data-choices-multiple-remove"]) {
                choiceData.removeItemButton = true;
            }
            if (isChoicesVal["data-choices-limit"]) {
                choiceData.maxItemCount = isChoicesVal["data-choices-limit"].value.toString();
            }
            if (isChoicesVal["data-choices-limit"]) {
                choiceData.maxItemCount = isChoicesVal["data-choices-limit"].value.toString();
            }
            if (isChoicesVal["data-choices-editItem-true"]) {
                choiceData.maxItemCount = true
            }
            if (isChoicesVal["data-choices-editItem-false"]) {
                choiceData.maxItemCount = false
            }
            if (isChoicesVal["data-choices-text-unique-true"]) {
                (choiceData.duplicateItemsAllowed = false)
            }
            if (isChoicesVal["data-choices-text-disabled-true"]) {
                (choiceData.addItems = false)
            }
            isChoicesVal["data-choices-text-disabled-true"] ?
                new Choices(item, choiceData).disable() :
                new Choices(item, choiceData);
        });

        /**
         * flatpickr
         */
        var flatpickrExamples = document.querySelectorAll("[data-provider]");
        flatpickrExamples.forEach(function (item) {
            if (item.getAttribute("data-provider") == "flatpickr") {
                var dateData = {};
                var isFlatpickerVal = item.attributes;
                if (isFlatpickerVal["data-date-format"]) {
                    (dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString());
                }
                if (isFlatpickerVal["data-enable-time"]) {
                    dateData.enableTime = true,
                        dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString() + " H:i";
                }
                if (isFlatpickerVal["data-altFormat"]) {
                    dateData.altInput = true,
                        dateData.altFormat = isFlatpickerVal["data-altFormat"].value.toString();
                }
                if (isFlatpickerVal["data-minDate"]) {
                    dateData.minDate = isFlatpickerVal["data-minDate"].value.toString();
                    dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString();
                }
                if (isFlatpickerVal["data-maxDate"]) {
                    dateData.maxDate = isFlatpickerVal["data-maxDate"].value.toString();
                    dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString();
                }
                if (isFlatpickerVal["data-deafult-date"]) {
                    dateData.defaultDate = isFlatpickerVal["data-deafult-date"].value.toString();
                    dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString();
                }
                if (isFlatpickerVal["data-multiple-date"]) {
                    dateData.mode = "multiple";
                    dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString();
                }
                if (isFlatpickerVal["data-range-date"]) {
                    dateData.mode = "range";
                    dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString();
                }
                if (isFlatpickerVal["data-inline-date"]) {
                    dateData.inline = true,
                        dateData.defaultDate = isFlatpickerVal["data-deafult-date"].value.toString();
                    dateData.dateFormat = isFlatpickerVal["data-date-format"].value.toString();
                }
                if (isFlatpickerVal["data-disable-date"]) {
                    var dates = []
                    dates.push(isFlatpickerVal["data-disable-date"].value);
                    dateData.disable = dates.toString().split(",");
                }
                flatpickr(item, dateData);
            } else if (item.getAttribute("data-provider") == "timepickr") {
                var timeData = {};
                var isTimepickerVal = item.attributes;
                if (isTimepickerVal["data-time-basic"]) {
                    (timeData.enableTime = true),
                    (timeData.noCalendar = true),
                    (timeData.dateFormat = "H:i");
                }
                if (isTimepickerVal["data-time-hrs"]) {
                    (timeData.enableTime = true),
                    (timeData.noCalendar = true),
                    (timeData.dateFormat = "H:i"),
                    (timeData.time_24hr = true);
                }
                if (isTimepickerVal["data-min-time"]) {
                    (timeData.enableTime = true),
                    (timeData.noCalendar = true),
                    (timeData.dateFormat = "H:i"),
                    timeData.minTime = isTimepickerVal["data-min-time"].value.toString()
                }
                if (isTimepickerVal["data-max-time"]) {
                    (timeData.enableTime = true),
                    (timeData.noCalendar = true),
                    (timeData.dateFormat = "H:i"),
                    timeData.minTime = isTimepickerVal["data-max-time"].value.toString()
                }
                if (isTimepickerVal["data-default-time"]) {
                    (timeData.enableTime = true),
                    (timeData.noCalendar = true),
                    (timeData.dateFormat = "H:i"),
                    (timeData.defaultDate = isTimepickerVal["data-default-time"].value.toString());
                }
                if (isTimepickerVal["data-time-inline"]) {
                    (timeData.enableTime = true),
                    (timeData.noCalendar = true),
                    (timeData.defaultDate = isTimepickerVal["data-time-inline"].value.toString());
                    (timeData.inline = true);
                }
                flatpickr(item, timeData);
            }
        });

        // Dropdown
        document.querySelectorAll('.dropdown-menu a[data-bs-toggle="tab"]').forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.stopPropagation();
                bootstrap.Tab.getInstance(e.target).show();
            });
        });
    }

    // on click collapse menu
    function isCollapseMenu() {
        /**
         * Sidebar menu collapse
         */
        if (document.querySelectorAll('.navbar-nav .collapse')) {
            var collapses = document.querySelectorAll('.navbar-nav .collapse');
            collapses.forEach(function (collapse) {
                // Init collapses
                var collapseInstance = new bootstrap.Collapse(collapse, {
                    toggle: false
                });
                // Hide sibling collapses on `show.bs.collapse`
                collapse.addEventListener('show.bs.collapse', function (e) {
                    e.stopPropagation();
                    var closestCollapse = collapse.parentElement.closest('.collapse');
                    if (closestCollapse) {
                        var siblingCollapses = closestCollapse.querySelectorAll('.collapse');
                        siblingCollapses.forEach(function (siblingCollapse) {
                            var siblingCollapseInstance = bootstrap.Collapse.getInstance(siblingCollapse);
                            if (siblingCollapseInstance === collapseInstance) {
                                return;
                            }
                            siblingCollapseInstance.hide();
                        });
                    } else {
                        var getSiblings = function (elem) {
                            // Setup siblings array and get the first sibling
                            var siblings = [];
                            var sibling = elem.parentNode.firstChild;
                            // Loop through each sibling and push to the array
                            while (sibling) {
                                if (sibling.nodeType === 1 && sibling !== elem) {
                                    siblings.push(sibling);
                                }
                                sibling = sibling.nextSibling;
                            }
                            return siblings;
                        };
                        var siblings = getSiblings(collapse.parentElement);
                        siblings.forEach(function (item) {
                            if (item.childNodes.length > 2)
                                item.firstElementChild.setAttribute('aria-expanded', 'false');
                            var ids = item.querySelectorAll('*[id]');
                            ids.forEach(function (item1) {
                                item1.classList.remove('show');
                                if (item1.childNodes.length > 2) {
                                    var val = item1.querySelectorAll('ul li a');

                                    val.forEach(function (subitem) {
                                        if (subitem.hasAttribute('aria-expanded'))
                                            subitem.setAttribute('aria-expanded', 'false');
                                    });
                                }
                            });
                        });
                    }
                });

                // Hide nested collapses on `hide.bs.collapse`
                collapse.addEventListener('hide.bs.collapse', function (e) {
                    e.stopPropagation();
                    var childCollapses = collapse.querySelectorAll('.collapse');
                    childCollapses.forEach(function (childCollapse) {
                        childCollapseInstance = bootstrap.Collapse.getInstance(childCollapse);
                        childCollapseInstance.hide();
                    });
                });
            });
        }
    }

    /**
     * Generate two column menu
     */
    function twoColumnMenuGenerate() {
        var isTwoColumn = document.documentElement.getAttribute("data-layout");
        var isValues = sessionStorage.getItem('defaultAttribute');
        var defaultValues = JSON.parse(isValues);

        if (defaultValues && (isTwoColumn == "twocolumn" || defaultValues['data-layout'] == 'twocolumn')) {
            document.querySelector('.navbar-menu').innerHTML = navbarMenuHTML;

            var ul = document.createElement("ul");
            ul.innerHTML = '<a href="#" class="logo"><img src="assets/images/logo-sm.png" alt="" height="22"></a>';
            document.getElementById("navbar-nav").querySelectorAll(".menu-link").forEach(function (item) {
                ul.className = "twocolumn-iconview";
                var li = document.createElement("li");
                var a = item; //document.createElement("a");
                a.querySelectorAll('span').forEach(function (element) {
                    element.classList.add('d-none');
                });

                // need to remove below code
                if (item.parentElement.classList.contains("twocolumn-item-show")) {
                    item.classList.add('active');
                }
                li.appendChild(a);
                ul.appendChild(li);

                a.classList.contains("nav-link") ? a.classList.replace("nav-link", "nav-icon") : "";
                a.classList.remove("collapsed", "menu-link");
            });
            var currentPath = location.pathname == "/" ? "index" : location.pathname.substring(1);
            currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);
            if (currentPath) {
                // navbar-nav
                var a = document.getElementById("navbar-nav").querySelector('[href="' + currentPath + '"]');

                if (a) {
                    var parentCollapseDiv = a.closest('.collapse.menu-dropdown');
                    if (parentCollapseDiv) {
                        parentCollapseDiv.classList.add("show");
                        parentCollapseDiv.parentElement.children[0].classList.add("active");
                        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
                        if (parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown')) {
                            parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                            if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                                parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                        }
                    }
                }
            }
            // add all sidebar menu icons
            document.getElementById("two-column-menu").innerHTML = ul.outerHTML;

            // show submenu on sidebar menu click
            document.querySelector("#two-column-menu ul").querySelectorAll("li a").forEach(function (element) {
                var currentPath = location.pathname == "/" ? "index" : location.pathname.substring(1);
                    currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);
                element.addEventListener("click", function (e) {
                    if (!(currentPath == '/' + element.getAttribute("href") && !element.getAttribute("data-bs-toggle")))
                        (document.body.classList.contains("twocolumn-panel")) ? document.body.classList.remove("twocolumn-panel") : "";
                    document.getElementById("navbar-nav").classList.remove('twocolumn-nav-hide');
                    document.querySelector(".hamburger-icon").classList.remove('open');
                    if (e.target && e.target.matches("a.nav-icon") || e.target && e.target.matches("i")) {

                        if (document.querySelector('#two-column-menu ul .nav-icon.active') !== null)
                            document.querySelector('#two-column-menu ul .nav-icon.active').classList.remove('active');
                        (e.target.matches("i")) ? e.target.closest('a').classList.add("active"): e.target.classList.add("active");

                        var twoColumnItem = document.getElementsByClassName('twocolumn-item-show');

                        (twoColumnItem.length > 0) ? twoColumnItem[0].classList.remove('twocolumn-item-show'): '';

                        var currentMenu = (e.target.matches("i")) ? e.target.closest('a') : e.target;
                        var childMenusId = currentMenu.getAttribute('href').slice(1);
                        if(document.getElementById(childMenusId))
                            document.getElementById(childMenusId).parentElement.classList.add('twocolumn-item-show');
                    }
                });

                // add active class to the sidebar menu icon who has direct link
                if (currentPath == '/' + element.getAttribute("href") && !element.getAttribute("data-bs-toggle")) {
                    element.classList.add('active');
                    document.getElementById("navbar-nav").classList.add('twocolumn-nav-hide');
                    document.querySelector(".hamburger-icon").classList.add('open');
                }
            });

            var currentLayout = document.documentElement.getAttribute("data-layout");
            if(currentLayout !== "horizontal") {
                var simpleBar = new SimpleBar(document.getElementById("navbar-nav"));
                if(simpleBar)
                    simpleBar.getContentElement();

                var simpleBar1 = new SimpleBar(document.getElementsByClassName("twocolumn-iconview")[0]);
                if(simpleBar1)
                    simpleBar1.getContentElement();
            }
        }
    }

    //  search menu dropdown on topbar
    function isCustomDropdown() {
        //Search bar
        var searchOptions = document.getElementById("search-close-options");
        var dropdown = document.getElementById("search-dropdown");
        var searchInput = document.getElementById("search-options");

        searchInput.addEventListener("focus", function () {
            var inputLength = searchInput.value.length;
            if (inputLength > 0) {
                dropdown.classList.add("show");
                searchOptions.classList.remove("d-none");
            } else {
                dropdown.classList.remove("show");
                searchOptions.classList.add("d-none");
            }
        });

        searchInput.addEventListener("keyup", function () {
            var inputLength = searchInput.value.length;
            if (inputLength > 0) {
                dropdown.classList.add("show");
                searchOptions.classList.remove("d-none");
            } else {
                dropdown.classList.remove("show");
                searchOptions.classList.add("d-none");
            }
        });

        searchOptions.addEventListener("click", function () {
            searchInput.value = "";
            dropdown.classList.remove("show");
            searchOptions.classList.add("d-none");
        });

        document.body.addEventListener("click", function (e) {
            if (e.target.getAttribute('id') !== "search-options") {
                dropdown.classList.remove("show");
                searchOptions.classList.add("d-none");
            }
        });
    }

    function elementInViewport(el) {
        if (el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            if (el.offsetParent) {
                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }
            }
            return (
                top >= window.pageYOffset &&
                left >= window.pageXOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight) &&
                (left + width) <= (window.pageXOffset + window.innerWidth)
            );
        }
    }

    function initLeftMenuCollapse() {
        /**
         * Vertical layout menu scroll add
         */
        if (document.documentElement.getAttribute("data-layout") == 'vertical') {
            document.getElementById('two-column-menu').innerHTML = '';
            document.querySelector('.navbar-menu').innerHTML = navbarMenuHTML;

            document.getElementById('scrollbar').setAttribute("data-simplebar", "");
            document.getElementById('navbar-nav').setAttribute("data-simplebar", "");
            document.getElementById('scrollbar').classList.add("h-100");

        }

        /**
         * Twocolumn layout menu scroll add
         */
        if (document.documentElement.getAttribute("data-layout") == 'twocolumn') {
            document.getElementById('scrollbar').removeAttribute("data-simplebar");
            document.getElementById('scrollbar').classList.remove("h-100");
        }

        /**
         * Horizontal layout menu
         */
        if (document.documentElement.getAttribute("data-layout") == 'horizontal') {
            updateHorizontalMenus();
        }
    }

    function isLoadBodyElement() {
        var verticalOverlay = document.getElementsByClassName("vertical-overlay");
        if (verticalOverlay) {
            verticalOverlay.forEach(function (element) {
                element.addEventListener("click", function () {
                    document.body.classList.remove('vertical-sidebar-enable');
                    if(sessionStorage.getItem("data-layout") == "twocolumn")
                        document.body.classList.add('twocolumn-panel');
                    else
                        document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"))
                });
            });
        }
    }

    function windowResizeHover() {
        feather.replace();
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 1025 && windowSize > 767) {
            document.body.classList.remove('twocolumn-panel');
            if(sessionStorage.getItem("data-layout") == "twocolumn"){
                document.documentElement.setAttribute("data-layout", "twocolumn");
                if(document.getElementById("customizer-layout03")){
                document.getElementById("customizer-layout03").click();
            }
                twoColumnMenuGenerate();
                initTwoColumnActiveMenu();
                isCollapseMenu();
            }
            if(sessionStorage.getItem("data-layout") == "vertical"){
                document.documentElement.setAttribute("data-sidebar-size", "sm");
            }
            document.querySelector(".hamburger-icon").classList.add('open');
        } else if (windowSize >= 1025) {
            document.body.classList.remove('twocolumn-panel');
            if(sessionStorage.getItem("data-layout") == "twocolumn"){
                document.documentElement.setAttribute("data-layout", "twocolumn");
                if(document.getElementById("customizer-layout03")){
                document.getElementById("customizer-layout03").click();
                }
                twoColumnMenuGenerate();
                initTwoColumnActiveMenu();
                isCollapseMenu();
            }
            if(sessionStorage.getItem("data-layout") == "vertical"){
                document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
            }
            document.querySelector(".hamburger-icon").classList.remove('open');
        } else if (windowSize <= 767) {
            document.body.classList.remove('vertical-sidebar-enable');
            document.body.classList.add('twocolumn-panel');
            if(sessionStorage.getItem("data-layout") == "twocolumn"){
                document.documentElement.setAttribute("data-layout", "vertical");
                hideShowLayoutOptions("vertical");
                isCollapseMenu();
            }
            if(sessionStorage.getItem("data-layout") != "horizontal"){
                document.documentElement.setAttribute("data-sidebar-size", "lg");
            }
            document.querySelector(".hamburger-icon").classList.add('open');
        }

        var isElement = document.querySelectorAll("#navbar-nav > li.nav-item");
        isElement.forEach(function (item) {
            item.addEventListener('click', menuItem.bind(this), false);
            item.addEventListener('mouseover', menuItem.bind(this), false);
        });
    }

    function menuItem(e) {
        if (e.target && e.target.matches("a.nav-link span")) {
            if (elementInViewport(e.target.parentElement.nextElementSibling) == false) {
                e.target.parentElement.nextElementSibling.classList.add('dropdown-custom-right');
                e.target.parentElement.parentElement.parentElement.parentElement.classList.add('dropdown-custom-right');
                var eleChild = e.target.parentElement.nextElementSibling;
                eleChild.querySelectorAll('.menu-dropdown').forEach(function (item) {
                    item.classList.add('dropdown-custom-right');
                });
            } else if (elementInViewport(e.target.parentElement.nextElementSibling) == true) {
                if (window.innerWidth >= 1848) {
                    var elements = document.getElementsByClassName('dropdown-custom-right');
                    while (elements.length > 0) {
                        elements[0].classList.remove('dropdown-custom-right');
                    }
                }
            }
        }

        if (e.target && e.target.matches("a.nav-link")) {
            if (elementInViewport(e.target.nextElementSibling) == false) {
                e.target.nextElementSibling.classList.add('dropdown-custom-right');

                e.target.parentElement.parentElement.parentElement.classList.add('dropdown-custom-right');
                var eleChild = e.target.nextElementSibling;
                eleChild.querySelectorAll('.menu-dropdown').forEach(function (item) {
                    item.classList.add('dropdown-custom-right');
                });
            } else if (elementInViewport(e.target.nextElementSibling) == true) {
                if (window.innerWidth >= 1848) {
                    var elements = document.getElementsByClassName('dropdown-custom-right');
                    while (elements.length > 0) {
                        elements[0].classList.remove('dropdown-custom-right');
                    }
                }
            }
        }
    }

    function toggleHamburgerMenu() {
        var windowSize = document.documentElement.clientWidth;

        if(windowSize > 767)
            document.querySelector(".hamburger-icon").classList.toggle('open');

        //For collapse horizontal menu
        if (document.documentElement.getAttribute('data-layout') === "horizontal") {
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        }

        //For collapse vertical menu
        if (document.documentElement.getAttribute('data-layout') === "vertical") {
            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') == 'sm') ? document.documentElement.setAttribute('data-sidebar-size', ''): document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') == 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm'): document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {
                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }

        //Two column menu
        if (document.documentElement.getAttribute('data-layout') == "twocolumn") {
            document.body.classList.contains('twocolumn-panel') ? document.body.classList.remove('twocolumn-panel') : document.body.classList.add('twocolumn-panel');
        }
    }

    function windowLoadContent() {
        // Demo show code
        document.addEventListener('DOMContentLoaded', function () {
            var checkbox = document.getElementsByClassName("code-switcher");
            checkbox.forEach(function (check, i) {
                check.addEventListener('change', function () {
                    var card = check.closest('.card');
                    var preview = card.querySelector(".live-preview");
                    var code = card.querySelector(".code-view");

                    if (check.checked) {
                        // do this
                        preview.classList.add("d-none");
                        code.classList.remove("d-none");
                    } else {
                        // do that
                        preview.classList.remove("d-none");
                        code.classList.add("d-none");
                    }
                });
            });
            feather.replace();
        });

        window.addEventListener('resize', windowResizeHover);
        windowResizeHover();

        Waves.init();

        document.addEventListener('scroll', function () {
            windowScroll();
        });

        window.addEventListener('load', function () {
            var isTwoColumn = document.documentElement.getAttribute("data-layout");
            if (isTwoColumn == "twocolumn") {
                initTwoColumnActiveMenu();
            } else {
                initActiveMenu();
            }
            isLoadBodyElement();
            addEventListenerOnSmHoverMenu();
        });

        document.getElementById("topnav-hamburger-icon").addEventListener('click', toggleHamburgerMenu);

        var isValues = sessionStorage.getItem('defaultAttribute');
        var defaultValues = JSON.parse(isValues);
        var windowSize = document.documentElement.clientWidth;

        if (defaultValues['data-layout'] == "twocolumn" && windowSize < 767) {
            document.getElementById("two-column-menu").querySelectorAll("li").forEach(function (item) {
                item.addEventListener("click", function (e) {
                    document.body.classList.remove('twocolumn-panel');
                });
            });
        }
    }

    // page topbar class added
    function windowScroll() {
        var pageTopbar = document.getElementById("page-topbar");
        (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 )
            ? pageTopbar.classList.add("topbar-shadow")
            : pageTopbar.classList.remove("topbar-shadow");
    }

    //Menu Activation
    // Two-column menu activation
    function initTwoColumnActiveMenu() {
        feather.replace();
        // two column sidebar active js
        var currentPath = location.pathname == "/" ? "index" : location.pathname.substring(1);
        currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        if (currentPath) {
            // navbar-nav
            var a = document.getElementById("navbar-nav").querySelector('[href="' + currentPath + '"]');
            if (a) {
                a.classList.add("active");
                var parentCollapseDiv = a.closest('.collapse.menu-dropdown');
                if (parentCollapseDiv && parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown')) {
                    parentCollapseDiv.classList.add("show");
                    parentCollapseDiv.parentElement.children[0].classList.add("active");
                    parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown').parentElement.classList.add("twocolumn-item-show");

                    var menuId = parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown').getAttribute("id");
                    if (document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]'))
                        document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]').classList.add("active");
                } else {
                    a.closest('.collapse.menu-dropdown').parentElement.classList.add("twocolumn-item-show")
                    var menuId = parentCollapseDiv.getAttribute("id");
                    if (document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]'))
                        document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]').classList.add("active");
                }
            } else {
                document.body.classList.add('twocolumn-panel');
            }
        }
    }

    function initActiveMenu() {
        // two column sidebar active js
        var currentPath = location.pathname == "/" ? "index" : location.pathname.substring(1);
        currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        if (currentPath) {
            // navbar-nav
            var a = document.getElementById("navbar-nav").querySelector('[href="' + currentPath + '"]');

            if (a) {
                a.classList.add("active");
                var parentCollapseDiv = a.closest('.collapse.menu-dropdown');
                if (parentCollapseDiv) {
                    parentCollapseDiv.classList.add("show");
                    parentCollapseDiv.parentElement.children[0].classList.add("active");
                    parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
                    if (parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown')) {
                        parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                            parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                    }
                }
            }
        }
    }

    function elementInViewport(el) {
        if (el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            if (el.offsetParent) {
                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }
            }
            return (
                top >= window.pageYOffset &&
                left >= window.pageXOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight) &&
                (left + width) <= (window.pageXOffset + window.innerWidth)
            );
        }
    }

    function initComponents() {
        // tooltip
        var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // popover
        var popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }

    // Counter Number
    function counter() {
        var counter = document.querySelectorAll('.counter-value');
        var speed = 250; // The lower the slower
        counter && counter.forEach(function (counter_value) {
            function updateCount() {
                var target = +counter_value.getAttribute('data-target');
                var count = +counter_value.innerText;
                var inc = target / speed;
                if (inc < 1) {
                    inc = 1;
                }
                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter_value
                    counter_value.innerText = (count + inc).toFixed(0);
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter_value.innerText = numberWithCommas(target);
                }
                numberWithCommas(counter_value.innerText);
            };
            updateCount();
        });

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    function updateHorizontalMenus() {
        document.getElementById('two-column-menu').innerHTML = '';
        document.querySelector('.navbar-menu').innerHTML = navbarMenuHTML;

        document.getElementById('scrollbar').removeAttribute("data-simplebar");
        document.getElementById('navbar-nav').removeAttribute("data-simplebar");
        document.getElementById('scrollbar').classList.remove("h-100");

        var splitMenu = horizontalMenuSplit;
        var extraMenuName = "More";
        var menuData = document.querySelectorAll("ul.navbar-nav > li.nav-item");
        var newMenus = '';
        var splitItem = '';

        menuData.forEach(function (item, index) {
            if (index + 1 === splitMenu) {
                splitItem = item;
            }
            if (index + 1 > splitMenu) {
                newMenus += item.outerHTML;
                item.remove();
            }

            if (index + 1 === menuData.length) {
                splitItem.insertAdjacentHTML("afterend", '<li class="nav-item">\
                <a class="nav-link" href="#sidebarMore" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMore">\
                    <i class="ri-briefcase-2-line"></i> ' + extraMenuName + '\
                </a>\
                <div class="collapse menu-dropdown" id="sidebarMore">\
             <ul class="nav nav-sm flex-column">' + newMenus + '</ul></div></li>');
            }
        });
    }

    function hideShowLayoutOptions(dataLayout) {
        if (dataLayout == "vertical") {
            document.getElementById('two-column-menu').innerHTML = '';
            document.querySelector('.navbar-menu').innerHTML = navbarMenuHTML;
            if(document.getElementById("theme-settings-offcanvas")){
            document.getElementById('sidebar-size').style.display = 'block';
            document.getElementById('sidebar-view').style.display = 'block';
            document.getElementById('sidebar-color').style.display = 'block';
            document.getElementById('layout-position').style.display = 'block';
            document.getElementById('layout-width').style.display = 'block';
        }
            initLeftMenuCollapse();
            initActiveMenu();
            addEventListenerOnSmHoverMenu();
        } else if (dataLayout == "horizontal") {
            updateHorizontalMenus();
            if(document.getElementById("theme-settings-offcanvas")){
            document.getElementById('sidebar-size').style.display = 'none';
            document.getElementById('sidebar-view').style.display = 'none';
            document.getElementById('sidebar-color').style.display = 'none';
            document.getElementById('layout-position').style.display = 'block';
            document.getElementById('layout-width').style.display = 'block';
            }
            initActiveMenu();
        } else if (dataLayout == "twocolumn") {
            document.getElementById('scrollbar').removeAttribute("data-simplebar");
            document.getElementById('scrollbar').classList.remove("h-100");
            if(document.getElementById("theme-settings-offcanvas")){
            document.getElementById('sidebar-size').style.display = 'none';
            document.getElementById('sidebar-view').style.display = 'none';
            document.getElementById('sidebar-color').style.display = 'block';
            document.getElementById('layout-position').style.display = 'none';
            document.getElementById('layout-width').style.display = 'none';
            }
        }
    }

    function addEventListenerOnSmHoverMenu() {
        // add listener Sidebar Hover icon on change layout from setting
        document.getElementById('vertical-hover').addEventListener('click', function () {
            if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
                document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
            } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
                document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
            } else {
                document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
            }
        });
    }
    // set full layout
    function layoutSwitch(isLayoutAttributes) {
        switch (isLayoutAttributes) {
            case isLayoutAttributes:
                switch (isLayoutAttributes['data-layout']) {
                    case 'vertical':
                        getElementUsingTagname('data-layout', 'vertical');
                        sessionStorage.setItem('data-layout', 'vertical');
                        document.documentElement.setAttribute('data-layout', 'vertical');
                        hideShowLayoutOptions("vertical");
                        isCollapseMenu();
                        break;
                    case 'horizontal':
                        getElementUsingTagname('data-layout', 'horizontal');
                        sessionStorage.setItem('data-layout', 'horizontal');
                        document.documentElement.setAttribute('data-layout', 'horizontal');
                        hideShowLayoutOptions("horizontal");
                        break;
                    case 'twocolumn':
                        getElementUsingTagname('data-layout', 'twocolumn');
                        sessionStorage.setItem('data-layout', 'twocolumn');
                        document.documentElement.setAttribute('data-layout', 'twocolumn');
                        hideShowLayoutOptions("twocolumn");
                        break;
                    default:
                        if (sessionStorage.getItem('data-layout') == 'vertical' && sessionStorage.getItem('data-layout')) {
                            getElementUsingTagname('data-layout', 'vertical');
                            sessionStorage.setItem('data-layout', 'vertical');
                            document.documentElement.setAttribute('data-layout', 'vertical');
                            hideShowLayoutOptions("vertical");
                            isCollapseMenu();
                        } else if (sessionStorage.getItem('data-layout') == 'horizontal') {
                            getElementUsingTagname('data-layout', 'horizontal');
                            sessionStorage.setItem('data-layout', 'horizontal');
                            document.documentElement.setAttribute('data-layout', 'horizontal');
                            hideShowLayoutOptions("horizontal");
                        } else if (sessionStorage.getItem('data-layout') == 'twocolumn') {
                            getElementUsingTagname('data-layout', 'twocolumn');
                            sessionStorage.setItem('data-layout', 'twocolumn');
                            document.documentElement.setAttribute('data-layout', 'twocolumn');
                            hideShowLayoutOptions("twocolumn");
                        }
                        break;
                }
                switch (isLayoutAttributes['data-topbar']) {
                    case 'light':
                        getElementUsingTagname('data-topbar', 'light');
                        sessionStorage.setItem('data-topbar', 'light');
                        document.documentElement.setAttribute('data-topbar', 'light');
                        break;
                    case 'dark':
                        getElementUsingTagname('data-topbar', 'dark');
                        sessionStorage.setItem('data-topbar', 'dark');
                        document.documentElement.setAttribute('data-topbar', 'dark');
                        break;
                    default:
                        if (sessionStorage.getItem('data-topbar') == 'dark') {
                            getElementUsingTagname('data-topbar', 'dark');
                            sessionStorage.setItem('data-topbar', 'dark');
                            document.documentElement.setAttribute('data-topbar', 'dark');
                        } else {
                            getElementUsingTagname('data-topbar', 'light');
                            sessionStorage.setItem('data-topbar', 'light');
                            document.documentElement.setAttribute('data-topbar', 'light');
                        }
                        break;
                }

                switch (isLayoutAttributes['data-layout-style']) {
                    case 'default':
                        getElementUsingTagname('data-layout-style', 'default');
                        sessionStorage.setItem('data-layout-style', 'default');
                        document.documentElement.setAttribute('data-layout-style', 'default');
                        break;
                    case 'detached':
                        getElementUsingTagname('data-layout-style', 'detached');
                        sessionStorage.setItem('data-layout-style', 'detached');
                        document.documentElement.setAttribute('data-layout-style', 'detached');
                        break;
                    default:
                        if (sessionStorage.getItem('data-layout-style') == 'detached') {
                            getElementUsingTagname('data-layout-style', 'detached');
                            sessionStorage.setItem('data-layout-style', 'detached');
                            document.documentElement.setAttribute('data-layout-style', 'detached');
                        } else {
                            getElementUsingTagname('data-layout-style', 'default');
                            sessionStorage.setItem('data-layout-style', 'default');
                            document.documentElement.setAttribute('data-layout-style', 'default');
                        }
                        break;
                }

                switch (isLayoutAttributes['data-sidebar-size']) {
                    case 'lg':
                        getElementUsingTagname('data-sidebar-size', 'lg');
                        document.documentElement.setAttribute('data-sidebar-size', 'lg');
                        sessionStorage.setItem('data-sidebar-size', 'lg');
                        break;

                    case 'sm':
                        getElementUsingTagname('data-sidebar-size', 'sm');
                        document.documentElement.setAttribute('data-sidebar-size', 'sm');
                        sessionStorage.setItem('data-sidebar-size', 'sm');
                        break;

                    case 'md':
                        getElementUsingTagname('data-sidebar-size', 'md');
                        document.documentElement.setAttribute('data-sidebar-size', 'md');
                        sessionStorage.setItem('data-sidebar-size', 'md');
                        break;

                    case 'sm-hover':
                        getElementUsingTagname('data-sidebar-size', 'sm-hover');
                        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
                        sessionStorage.setItem('data-sidebar-size', 'sm-hover');
                        break;

                    default:
                        if (sessionStorage.getItem("data-sidebar-size") == 'sm') {
                            document.documentElement.setAttribute('data-sidebar-size', 'sm')
                            getElementUsingTagname('data-sidebar-size', 'sm');
                            sessionStorage.setItem('data-sidebar-size', 'sm')
                        } else if (sessionStorage.getItem("data-sidebar-size") == 'md') {
                            document.documentElement.setAttribute('data-sidebar-size', 'md')
                            getElementUsingTagname('data-sidebar-size', 'md')
                            sessionStorage.setItem('data-sidebar-size', 'md')
                        } else if (sessionStorage.getItem("data-sidebar-size") == 'sm-hover') {
                            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover')
                            getElementUsingTagname('data-sidebar-size', 'sm-hover')
                            sessionStorage.setItem('data-sidebar-size', 'sm-hover')
                        } else {
                            document.documentElement.setAttribute('data-sidebar-size', 'lg');
                            getElementUsingTagname('data-sidebar-size', 'lg');
                            sessionStorage.setItem('data-sidebar-size', 'lg');
                        }
                        break;
                }

                switch (isLayoutAttributes['data-layout-mode']) {
                    case 'light':
                        getElementUsingTagname('data-layout-mode', 'light');
                        document.documentElement.setAttribute('data-layout-mode', 'light')
                        sessionStorage.setItem('data-layout-mode', 'light');
                        break;
                    case 'dark':
                        getElementUsingTagname('data-layout-mode', 'dark');
                        document.documentElement.setAttribute('data-layout-mode', 'dark')
                        sessionStorage.setItem('data-layout-mode', 'dark');
                        break;
                    default:
                        if (sessionStorage.getItem('data-layout-mode') && sessionStorage.getItem('data-layout-mode') == 'dark') {
                            sessionStorage.setItem('data-layout-mode', 'dark');
                            document.documentElement.setAttribute('data-layout-mode', 'dark')
                            getElementUsingTagname('data-layout-mode', 'dark');
                        } else {
                            sessionStorage.setItem('data-layout-mode', 'light');
                            document.documentElement.setAttribute('data-layout-mode', 'light')
                            getElementUsingTagname('data-layout-mode', 'light');
                        }
                        break;
                }

                switch (isLayoutAttributes['data-layout-width']) {
                    case 'fluid':
                        getElementUsingTagname('data-layout-width', 'fluid');
                        document.documentElement.setAttribute('data-layout-width', 'fluid');
                        sessionStorage.setItem('data-layout-width', 'fluid');
                        break;
                    case 'boxed':
                        getElementUsingTagname('data-layout-width', 'boxed');
                        document.documentElement.setAttribute('data-layout-width', 'boxed');
                        sessionStorage.setItem('data-layout-width', 'boxed');
                        break;
                    default:
                        if (sessionStorage.getItem('data-layout-width') == 'boxed') {
                            sessionStorage.setItem('data-layout-width', 'boxed');
                            document.documentElement.setAttribute('data-layout-width', 'boxed')
                            getElementUsingTagname('data-layout-width', 'boxed')
                        } else {
                            sessionStorage.setItem('data-layout-width', 'fluid');
                            document.documentElement.setAttribute('data-layout-width', 'fluid');
                            getElementUsingTagname('data-layout-width', 'fluid')
                        }
                        break;
                }

                switch (isLayoutAttributes['data-sidebar']) {
                    case 'light':
                        getElementUsingTagname('data-sidebar', 'light');
                        sessionStorage.setItem('data-sidebar', 'light');
                        document.documentElement.setAttribute('data-sidebar', 'light');
                        break;
                    case 'dark':
                        getElementUsingTagname('data-sidebar', 'dark');
                        sessionStorage.setItem('data-sidebar', 'dark');
                        document.documentElement.setAttribute('data-sidebar', 'dark');
                        break;
                    default:
                        if (sessionStorage.getItem('data-sidebar') && sessionStorage.getItem('data-sidebar') == 'light') {
                            sessionStorage.setItem('data-sidebar', 'light');
                            getElementUsingTagname('data-sidebar', 'light');
                            document.documentElement.setAttribute('data-sidebar', 'light');
                        } else {
                            sessionStorage.setItem('data-sidebar', 'dark');
                            getElementUsingTagname('data-sidebar', 'dark');
                            document.documentElement.setAttribute('data-sidebar', 'dark');
                        }
                        break;
                }

                switch (isLayoutAttributes['data-layout-position']) {
                    case 'fixed':
                        getElementUsingTagname('data-layout-position', 'fixed');
                        sessionStorage.setItem('data-layout-position', 'fixed');
                        document.documentElement.setAttribute('data-layout-position', 'fixed');
                        break;
                    case 'scrollable':
                        getElementUsingTagname('data-layout-position', 'scrollable');
                        sessionStorage.setItem('data-layout-position', 'scrollable');
                        document.documentElement.setAttribute('data-layout-position', 'scrollable');
                        break;
                    default:
                        if (sessionStorage.getItem('data-layout-position') && sessionStorage.getItem('data-layout-position') == 'scrollable') {
                            getElementUsingTagname('data-layout-position', 'scrollable');
                            sessionStorage.setItem('data-layout-position', 'scrollable');
                            document.documentElement.setAttribute('data-layout-position', 'scrollable');
                        } else {
                            getElementUsingTagname('data-layout-position', 'fixed');
                            sessionStorage.setItem('data-layout-position', 'fixed');
                            document.documentElement.setAttribute('data-layout-position', 'fixed');
                        }
                        break;
                }
                default:

                    break;
        }
    }

    function initMenuItemScroll() {
        setTimeout(function () {
            var sidebarMenu = document.getElementById("navbar-nav");
            if (sidebarMenu) {
                var activeMenu = sidebarMenu.querySelector('.nav-item .active');
                var offset = (activeMenu) ? activeMenu.offsetTop : 0;
                if (offset > 300) {
                    var verticalMenu = (document.getElementsByClassName("app-menu")) ? document.getElementsByClassName("app-menu")[0] : '';
                    if (verticalMenu && verticalMenu.querySelector(".simplebar-content-wrapper")) {
                        setTimeout(function () {
                            (offset == 330) ? verticalMenu.querySelector(".simplebar-content-wrapper").scrollTop = offset + 85: verticalMenu.querySelector(".simplebar-content-wrapper").scrollTop = offset;
                        }, 0);
                    }
                }
            }
        }, 0);
    }

    // add change event listener on right layout setting
    function getElementUsingTagname(ele, val) {
        document.querySelectorAll('input[name=' + ele + ']').forEach(function (x) {
            val == x.value ? x.checked = true : x.checked = false;

            x.addEventListener('change', function () {
                document.documentElement.setAttribute(ele, x.value);
                sessionStorage.setItem(ele, x.value);

                if (ele == 'data-layout-width' && x.value == 'boxed') {
                    document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
                    sessionStorage.setItem("data-sidebar-size", "sm-hover");
                    document.getElementById('sidebar-size-small-hover').checked = true;
                } else if (ele == 'data-layout-width' && x.value == 'fluid') {
                    document.documentElement.setAttribute('data-sidebar-size', 'lg');
                    sessionStorage.setItem("data-sidebar-size", "lg");
                    document.getElementById('sidebar-size-default').checked = true;
                }

                if (ele == 'data-layout') {
                    if (x.value == 'vertical') {
                        hideShowLayoutOptions("vertical");
                        isCollapseMenu();
                        feather.replace();
                    } else if (x.value == 'horizontal') {
                        hideShowLayoutOptions("horizontal");
                        feather.replace();
                    } else if (x.value == 'twocolumn') {
                        hideShowLayoutOptions("twocolumn");
                        document.documentElement.setAttribute("data-layout-width", 'fluid');
                        document.getElementById("layout-width-fluid").click();
                        twoColumnMenuGenerate();
                        initTwoColumnActiveMenu();
                        isCollapseMenu();
                        feather.replace();
                    }
                }
            })
        })
    }

    function setDefaultAttribute() {
        if(!sessionStorage.getItem('defaultAttribute')) {
            var attributesValue = document.documentElement.attributes;
            var isLayoutAttributes = {};
            attributesValue.forEach(function (x) {
                if (x && x.nodeName && x.nodeName != "undefined") {
                    var nodeKey = x.nodeName;
                    isLayoutAttributes[nodeKey] = x.nodeValue;
                    sessionStorage.setItem(nodeKey, x.nodeValue);
                }
            });
            sessionStorage.setItem('defaultAttribute', JSON.stringify(isLayoutAttributes));
            layoutSwitch(isLayoutAttributes);

            // open right sidebar on first time load
            var offCanvas = document.querySelector('.btn[data-bs-target="#theme-settings-offcanvas"]');
            (offCanvas) ? offCanvas.click(): '';
        } else {
            var isLayoutAttributes = {};
            isLayoutAttributes['data-layout'] = sessionStorage.getItem('data-layout');
            isLayoutAttributes['data-sidebar-size'] = sessionStorage.getItem('data-sidebar-size');
            isLayoutAttributes['data-layout-mode'] = sessionStorage.getItem('data-layout-mode');
            isLayoutAttributes['data-layout-width'] = sessionStorage.getItem('data-layout-width');
            isLayoutAttributes['data-sidebar'] = sessionStorage.getItem('data-sidebar');
            isLayoutAttributes['data-layout-position'] = sessionStorage.getItem('data-layout-position');
            isLayoutAttributes['data-layout-style'] = sessionStorage.getItem('data-layout-style');
            isLayoutAttributes['data-topbar'] = sessionStorage.getItem('data-topbar');
            layoutSwitch(isLayoutAttributes);
        }
    }

    function initFullScreen() {
        var fullscreenBtn = document.querySelector('[data-toggle="fullscreen"]');
        fullscreenBtn && fullscreenBtn.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.toggle("fullscreen-enable");
            if (
                !document.fullscreenElement &&
                /* alternative standard method */
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement
            ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(
                        Element.ALLOW_KEYBOARD_INPUT
                    );
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        });

        document.addEventListener("fullscreenchange", exitHandler);
        document.addEventListener("webkitfullscreenchange", exitHandler);
        document.addEventListener("mozfullscreenchange", exitHandler);

        function exitHandler() {
            if (
                !document.webkitIsFullScreen &&
                !document.mozFullScreen &&
                !document.msFullscreenElement
            ) {
                document.body.classList.remove("fullscreen-enable");
            }
        }
    }

    function setLayoutMode(mode, modeType, modeTypeId, html) {
        var isModeTypeId = document.getElementById(modeTypeId);
        html.setAttribute(mode, modeType);
        if(isModeTypeId){
            document.getElementById(modeTypeId).click();
        }
    }

    function initModeSetting() {
        var html = document.getElementsByTagName("HTML")[0];
        var lightDarkBtn = document.querySelectorAll('.light-dark-mode')
        if (lightDarkBtn && lightDarkBtn.length) {
            lightDarkBtn[0].addEventListener('click', function (event) {
                (html.hasAttribute("data-layout-mode") && html.getAttribute("data-layout-mode") == "dark") ?
                    setLayoutMode('data-layout-mode', 'light', "layout-mode-light", html)
                    : setLayoutMode('data-layout-mode', 'dark', "layout-mode-dark", html);
            });
        }
    }

    function resetLayout() {
        if (document.getElementById('reset-layout')) {
            document.getElementById('reset-layout').addEventListener('click', function () {
                sessionStorage.clear();
                window.location.reload();
            });
        }
    }

    function init() {
        setDefaultAttribute();
        twoColumnMenuGenerate();
        isCustomDropdown();
        initFullScreen();
        initModeSetting();
        windowLoadContent();
        counter();
        initLeftMenuCollapse();
        initComponents();
        initMenuItemScroll();
        resetLayout();
        pluginData();
        initLanguage();
        isCollapseMenu();
    }
    init();

    var timeOutFunctionId;
    function setResize(){
        var currentLayout = document.documentElement.getAttribute("data-layout");
        if(currentLayout !== "horizontal") {
            if(document.getElementById("navbar-nav")) {
                var simpleBar = new SimpleBar(document.getElementById("navbar-nav"));
                if(simpleBar)
                    simpleBar.getContentElement();
            }

            if(document.getElementsByClassName("twocolumn-iconview")[0]) {
                var simpleBar1 = new SimpleBar(document.getElementsByClassName("twocolumn-iconview")[0]);
                if(simpleBar1)
                    simpleBar1.getContentElement();
            }
            clearTimeout(timeOutFunctionId);
        }
    }

    window.addEventListener('resize', function () {
        if(timeOutFunctionId)
            clearTimeout(timeOutFunctionId);
        timeOutFunctionId = setTimeout(setResize, 2000);
    });
})();


//
/********************* scroll top js ************************/
//

var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
