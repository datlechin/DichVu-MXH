/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Card init js
*/

var Portlet = function () {
    el = document.querySelector('.card a[data-toggle="reload"]');
    el.addEventListener("click", function (ev) {
        ev.preventDefault();
        var $portlet = el.closest(".card");
        insertEl =
            '<div class="card-preloader"><div class="card-status"><div class="spinner-border text-success"><span class="visually-hidden">Loading...</span></div></div></div>';
        $portlet.children[1].insertAdjacentHTML("beforeend", insertEl);
        var $pd = $portlet.getElementsByClassName("card-preloader")[0];
        setTimeout(function () {
            $pd.remove();
        }, 500 + 300 * (Math.random() * 5));
    });
};

Portlet();

var growingLoader = function () {
    element = document.querySelector('.card a[data-toggle="growing-reload"]');
    element.addEventListener("click", function (ev) {
        ev.preventDefault();
        var $portlet = element.closest(".card");
        insertEl =
            '<div class="card-preloader"><div class="card-status"><div class="spinner-grow text-danger"><span class="visually-hidden">Loading...</span></div></div></div>';
        $portlet.children[1].insertAdjacentHTML("beforeend", insertEl);
        var $pd = $portlet.getElementsByClassName("card-preloader")[0];
        setTimeout(function () {
            $pd.remove();
        }, 500 + 300 * (Math.random() * 5));
    });
};
growingLoader();

var customLoader = function () {
    customLoader1 = document.querySelector(
        '.card a[data-toggle="customer-loader"]'
    );
    customLoader1.addEventListener("click", function (elem) {
        elem.preventDefault();
        var $portlet = customLoader1.closest(".card");
        insertEl =
            '<div class="card-preloader"><div class="card-status"><img src="assets/images/logo-sm.png" alt="" class="img-fluid custom-loader"></div></div>';
        $portlet.children[1].insertAdjacentHTML("beforeend", insertEl);
        var $pd = $portlet.getElementsByClassName("card-preloader")[0];
        setTimeout(function () {
            $pd.remove();
        }, 500 + 300 * (Math.random() * 5));
    });
};

customLoader();

//card-remove Js

function delthis(id) {
    document.getElementById(id).remove();
}