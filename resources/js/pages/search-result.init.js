/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: search-result init js
*/

// Images Slider menu
var swiper = new Swiper(".images-menu", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// GLightbox Popup

var lightbox = GLightbox({
    selector: '.image-popup',
    title: false,
});

// loadmore Js
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

var loadmore = document.querySelector("#loadmore");
var currentItems = 3;
loadmore.addEventListener("click", function (e) {
    var elementList = [].concat(
        _toConsumableArray(document.querySelectorAll(".list .list-element"))
    );
    for (var i = currentItems; i < currentItems + 3; i++) {
        if (elementList[i]) {
        elementList[i].style.display = "block";
        }
    }
    currentItems += 3;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        event.target.style.display = "none";
    }
});
