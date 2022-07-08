const navbarMenuHTML = document.querySelector(".navbar-menu").innerHTML;
const hamburgerIcon = document.querySelector("#topnav-hamburger-icon");
const backToTopButton = document.querySelector("#back-to-top");
const ckClassicEditor = document.querySelectorAll(".ckeditor-classic")

// Toggle the menu
function toggleMenu() {
    const windowSize = document.documentElement.clientWidth;

    if (windowSize > 767) {
        document.querySelector(".hamburger-icon").classList.toggle('open');
    }

    if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove('vertical-sidebar-enable');
        (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', ''): document.documentElement.setAttribute('data-sidebar-size', 'sm');
    } else if (windowSize > 1025) {
        document.body.classList.remove('vertical-sidebar-enable');
        (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm'): document.documentElement.setAttribute('data-sidebar-size', 'lg');
    } else if (windowSize <= 767) {
        document.body.classList.add('vertical-sidebar-enable');
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
    }
}

// Toggle the scroll to top button
function toggleScrollToTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Scroll to top
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Check if the overlay is open and close it
function closeOverlay() {
    let verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
        Array.from(verticalOverlay).forEach(function (element) {
            element.addEventListener("click", function () {
                document.body.classList.remove('vertical-sidebar-enable');
                document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"))
            });
        });
    }
}

// Init left menu collapse
function initLeftMenuCollapse() {
    document.querySelector("#two-column-menu").innerHTML = '';
    document.querySelector(".navbar-menu").innerHTML = navbarMenuHTML;
    document.querySelector("#scrollbar").setAttribute("data-simplebar", '');
    document.querySelector("#navbar-nav").setAttribute("data-simplebar", '');
    document.querySelector("#scrollbar").classList.add("h-100");
}

// Init ckEditor
function initCkEditor() {
    ckClassicEditor.forEach(function () {
        ClassicEditor
            .create(document.querySelector('.ckeditor-classic'))
            .then(function (editor) {
                editor.ui.view.editable.element.style.height = '200px';
            })
            .catch(function (error) {
                console.error(error);
            });
    });
}

// Counter up
function counter() {
    const counter = document.querySelectorAll('.counter-value');
    const speed = 250; // The lower the slower
    counter && counter.forEach(function (counter_value) {
        function updateCount() {
            const target = +counter_value.getAttribute('data-target');
            const count = +counter_value.innerText;
            let inc = target / speed;
            if (inc < 1) inc = 1

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
        }
        updateCount();
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

// Initialize the functions
function init() {
    hamburgerIcon.addEventListener('click', toggleMenu);
    backToTopButton.addEventListener('click', goToTop)

    // Listen to scroll event
    window.onscroll = function () {
        toggleScrollToTopButton()
    }

    closeOverlay()
    initLeftMenuCollapse()
    counter()
    initCkEditor()
}

// Initialize the app
init();


