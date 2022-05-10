/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ticket detail init js
*/


// favourite btn
document.querySelectorAll(".favourite-btn").forEach(function (item) {
    item.addEventListener("click", function (event) {
        this.classList.toggle("active");
    });
});