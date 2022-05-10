/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Form input spin Js File
*/

// input spin
isData();

function isData() {
    var plus = document.getElementsByClassName('plus');
    var minus = document.getElementsByClassName('minus');
    var product = document.getElementsByClassName("product");

    if (plus) {
        plus.forEach(function (e) {
            e.addEventListener('click', function (event) {
                // if(event.target.previousElementSibling.value )
                if (parseInt(e.previousElementSibling.value) < event.target.previousElementSibling.getAttribute('max')) {
                    event.target.previousElementSibling.value++;
                    if (product) {
                        product.forEach(function (x) {
                            updateQuantity(event.target);
                        })
                    }

                }
            });
        });
    }

    if (minus) {
        minus.forEach(function (e) {
            e.addEventListener('click', function (event) {
                if (parseInt(e.nextElementSibling.value) > event.target.nextElementSibling.getAttribute('min')) {
                    event.target.nextElementSibling.value--;
                    if (product) {
                        product.forEach(function (x) {
                            updateQuantity(event.target);
                        })
                    }
                }
            });
        });
    }
}