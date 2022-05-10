/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: pricing init js
*/

document
    .querySelectorAll(".plan-nav .nav-item .nav-link")
    .forEach(function (e) {
        var month = document.getElementsByClassName("month");
        var annual = document.getElementsByClassName("annual");
        if (e.classList.contains("active") == true) {
            for (var i = 0; i < month.length; i++) {
                annual[i].style.display = "none";
                month[i].style.display = "block";
            }
        }
    });

document.getElementById("month-tab").addEventListener("click", function () {
    var month = document.getElementsByClassName("month");
    var annual = document.getElementsByClassName("annual");

    for (var i = 0; i < month.length; i++) {
        if (annual[i]) annual[i].style.display = "none";
        if (month[i]) month[i].style.display = "block";
    }
});

document.getElementById("annual-tab").addEventListener("click", function () {
    var month = document.getElementsByClassName("month");
    var annual = document.getElementsByClassName("annual");

    for (var i = 0; i < month.length; i++) {
        if (annual[i]) annual[i].style.display = "block";
        if (month[i]) month[i].style.display = "none";
    }
});