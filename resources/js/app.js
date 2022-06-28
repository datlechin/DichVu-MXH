let navbarMenuHTML = document.querySelector('.navbar-menu').innerHTML;
document.getElementById("topnav-hamburger-icon").addEventListener('click', toggleHamburgerMenu);
isLoadBodyElement()
initLeftMenuCollapse()
const backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleHamburgerMenu() {
    let windowSize = document.documentElement.clientWidth;

    if(windowSize > 767) document.querySelector(".hamburger-icon").classList.toggle('open');

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
}

function isLoadBodyElement() {
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
}


let ckClassicEditor = document.querySelectorAll(".ckeditor-classic")
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
