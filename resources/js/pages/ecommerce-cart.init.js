/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ecommerce cart Js File
*/


var taxRate = 0.125;
var shippingRate = 65.00;
var discountRate = 0.15;

var currencySign = "$";

function recalculateCart() {

    var subtotal = 0;

    document.getElementsByClassName("product").forEach(function (item) {
        item.getElementsByClassName('product-line-price').forEach(function (e) {
            subtotal += parseFloat(e.innerHTML);
        });
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var discount = subtotal * discountRate;

    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping - discount;

    document.getElementById("cart-subtotal").innerHTML = currencySign + subtotal.toFixed(2);
    document.getElementById("cart-tax").innerHTML = currencySign + tax.toFixed(2);
    document.getElementById("cart-shipping").innerHTML = currencySign + shipping.toFixed(2);
    document.getElementById("cart-total").innerHTML = currencySign + total.toFixed(2);
    document.getElementById("cart-discount").innerHTML = "-" + currencySign + discount.toFixed(2);
}

function updateQuantity(quantityInput) {
    var productRow = quantityInput.closest('.product');
    var price;

    productRow.getElementsByClassName('product-price').forEach(function (e) {
        price = parseFloat(e.innerHTML);
    });

    if (quantityInput.previousElementSibling && quantityInput.previousElementSibling.classList.contains("product-quantity")) {
        var quantity = quantityInput.previousElementSibling.value;
    } else if (quantityInput.nextElementSibling && quantityInput.nextElementSibling.classList.contains("product-quantity")) {
        var quantity = quantityInput.nextElementSibling.value;
    }
    var linePrice = price * quantity;
    /* Update line price display and recalc cart totals */
    productRow.getElementsByClassName('product-line-price').forEach(function (e) {
        e.innerHTML = linePrice.toFixed(2);
        recalculateCart();
    });
}


// Remove product from cart
var removeProduct = document.getElementById('removeItemModal')
removeProduct.addEventListener('show.bs.modal', function (e) {
    document.getElementById('remove-product').addEventListener('click', function (event) {
        e.relatedTarget.closest('.product').remove();
        document.getElementById("close-modal").click();
        recalculateCart();
    });
});