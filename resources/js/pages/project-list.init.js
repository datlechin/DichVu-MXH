/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Project list init js
*/

// favourite btn
document.querySelectorAll(".favourite-btn").forEach(function (item) {
    item.addEventListener("click", function (event) {
        this.classList.toggle("active");
    });
});

// Remove product from cart
var removeProduct = document.getElementById('removeProjectModal')
removeProduct.addEventListener('show.bs.modal', function (e) {
    document.getElementById('remove-project').addEventListener('click', function (event) {
        e.relatedTarget.closest('.project-card').remove();
        document.getElementById("close-modal").click();
    });
});