/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: landing Js File
*/

//  Window scroll sticky class add

function windowScroll() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
}

window.addEventListener('scroll', function (ev) {
    ev.preventDefault();
    windowScroll();
});


// Collapse Menu
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
let bsCollapse = '';
window.addEventListener('load', function () {
    window.dispatchEvent(new Event('resize'));
});
window.addEventListener('resize', function () {
    var windowSize = document.documentElement.clientWidth;
    bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    if (windowSize < 980) {
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { toggleMenu(); });
        });
    } else {
        toggleMenu();
    }
});
function toggleMenu() {
    var windowSize = document.documentElement.clientWidth;
    if (windowSize < 980) {
        bsCollapse.toggle();
    } else {
        bsCollapse = '';
    }
}


// trusted-client-slider
var swiper = new Swiper(".trusted-client-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});


// pricing
function check() {
    var checkBox = document.getElementById("plan-switch");
    var month = document.getElementsByClassName("month");
    var annual = document.getElementsByClassName("annual");

    for (var i = 0; i < month.length; i++) {
        if (checkBox.checked == true) {
            annual[i].style.display = "block";
            month[i].style.display = "none";
        } else if (checkBox.checked == false) {
            annual[i].style.display = "none";
            month[i].style.display = "block";
        }
    }
}
check();


// client-review-swiper
var swiper = new Swiper(".client-review-swiper", {
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
});

// counter-value
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
};
counter();