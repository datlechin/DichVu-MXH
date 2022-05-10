/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: mailbox init Js File
*/


// favourite btn
document.querySelectorAll(".favourite-btn").forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.getElementsByTagName('body')[0];
    document.querySelectorAll(".col-mail a").forEach(function (item) {
        item.addEventListener("click", function () {
            bodyElement.classList.add("email-detail-show");
        });
    });

    document.querySelectorAll(".close-btn-email").forEach(function (item) {
        
        item.addEventListener("click", function () {
            bodyElement.classList.remove("email-detail-show");
        });
    });
});

var isShowMenu = false;
var emailMenuSidebar = document.getElementsByClassName('email-menu-sidebar');
document.querySelectorAll(".email-menu-btn").forEach(function (item) {
    item.addEventListener("click", function () {
        emailMenuSidebar.forEach(function (elm) {
            elm.classList.add("menubar-show");
            isShowMenu = true;
        });

    });
});

window.addEventListener('click', function (e) {
    if (document.querySelector(".email-menu-sidebar").classList.contains('menubar-show')) {
        if (!isShowMenu) {
            document.querySelector(".email-menu-sidebar").classList.remove("menubar-show");
        }
        isShowMenu = false;

    }
});

// editor
ClassicEditor
    .create(document.querySelector('#email-editor'))
    .then(function (editor) {
        editor.ui.view.editable.element.style.height = '200px';
    })
    .catch(function (error) {
        console.error(error);
    });


// checkbox-wrapper-mail
document.querySelectorAll(".checkbox-wrapper-mail input").forEach(function (element) {
    element.addEventListener('click', function (el) {
        if (el.target.checked == true) {
            el.target.closest('li').classList.add("active");
        } else {
            el.target.closest('li').classList.remove("active");
        }
    });
});