/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Invoice create init Js File
*/
var paymentSign = "$";
function otherPayment() {
  var paymentType = document.getElementById("choices-payment-currency").value;
  paymentSign = paymentType;
  document
    .getElementsByClassName("product-line-price")
    .forEach(function (item) {
      isUpdate = item.value.slice(1);
      item.value = paymentSign + isUpdate;
    });
  recalculateCart();
}
var isPaymentEl = document.getElementById("choices-payment-currency");
var choices = new Choices(isPaymentEl, {
    searchEnabled: false
});
// Profile Img
document
  .querySelector("#profile-img-file-input")
  .addEventListener("change", function () {
    var preview = document.querySelector(".user-profile-image");
    var file = document.querySelector(".profile-img-file-input").files[0];
    var reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        preview.src = reader.result;
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  });
flatpickr("#date-field", {
  enableTime: true,
  dateFormat: "d M, Y, h:i K",
});
isData();
function isData() {
  var plus = document.getElementsByClassName("plus"),
    minus = document.getElementsByClassName("minus");
  if (plus) {
    plus.forEach(function (e) {
      e.onclick = function(event) {
        if (parseInt(e.previousElementSibling.value) < 10) {
            event.target.previousElementSibling.value++;
            var itemAmount = e.parentElement.parentElement.previousElementSibling.querySelector(".product-price").value;
            var priceselection = e.parentElement.parentElement.nextElementSibling.querySelector(".product-line-price");
            var productQty = e.parentElement.querySelector(".product-quantity").value;
            updateQuantity(productQty, itemAmount,priceselection);
          }
      }
    });
  }
  if (minus) {
    minus.forEach(function (e) {
      e.onclick = function(event) {
        if (parseInt(e.nextElementSibling.value) > 1) {
          event.target.nextElementSibling.value--;
          var itemAmount = e.parentElement.parentElement.previousElementSibling.querySelector(".product-price").value;
          var priceselection = e.parentElement.parentElement.nextElementSibling.querySelector(".product-line-price");
          // var productQty = 1;
          var productQty = e.parentElement.querySelector(".product-quantity").value;
          updateQuantity(productQty, itemAmount,priceselection);
        }
      };
    });
  }
}
var count = 1;
function new_link() {
  count++;
  var tr1 = document.createElement("tr");
  tr1.id = count;
  tr1.className = "product";
  var delLink =
    "<tr>" +
    '<th scope="row" class="product-id">' +
    count +
    "</th>" +
    '<td class="text-start">' +
    '<div class="mb-2">' +
    '<input class="form-control bg-light border-0" type="text" id="shippingTaxno" placeholder="Product Name">' +
    '</div>' +
    '<textarea class="form-control bg-light border-0" id="shippingAddress" rows="2" placeholder="Product Details"></textarea>' +
    "</div>" +
    "</td>" +
    "<td>" +
    '<input class="form-control bg-light border-0 product-price" type="number" placeholder="$0.00">' +
    "</td>" +
    "<td>" +
    '<div class="input-step">' +
    '<button type="button" class="minus">–</button>' +
    '<input type="number" class="product-quantity" value="0" readonly>' +
    '<button type="button" class="plus">+</button>' +
    "</div>" +
    "</td>" +
    '<td class="text-end">' +
    "<div>" +
    '<input type="text" class="form-control bg-light border-0 product-line-price" placeholder="$0.00" />' +
    "</div>" +
    "</td>" +
    '<td class="product-removal">' +
    '<a class="btn btn-success">Delete</a>' +
    "</td>" +
    "</tr";
  tr1.innerHTML = document.getElementById("newForm").innerHTML + delLink;
  document.getElementById("newlink").appendChild(tr1);
  var genericExamples = document.querySelectorAll("[data-trigger]");
  for (i = 0; i < genericExamples.length; ++i) {
    var element = genericExamples[i];
    new Choices(element, {
      placeholderValue: "This is a placeholder set in the config",
      searchPlaceholderValue: "This is a search placeholder",
    });
  }
  isData();
  remove();
  amountKeyup();
  resetRow()
}
remove();
/* Set rates + misc */
var taxRate = 0.125;
var shippingRate = 65.0;
var discountRate = 0.15;
function remove() {
  document.querySelectorAll(".product-removal a").forEach(function (el) {
    el.addEventListener("click", function (e) {
      removeItem(e);
      resetRow()
    });
  });
}
function resetRow() {
  document.getElementById("newlink").querySelectorAll("tr").forEach(function (subItem,index) {
    var incid = index+1;
    subItem.querySelector('.product-id').innerHTML = incid;
  });
}
/* Recalculate cart */
function recalculateCart() {
  var subtotal = 0;
  document.getElementsByClassName("product").forEach(function (item) {
    item.getElementsByClassName("product-line-price").forEach(function (e) {
      if(e.value){
        subtotal += parseFloat(e.value.slice(1));
      }
    });
  });
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var discount = subtotal * discountRate;
  var shipping = subtotal > 0 ? shippingRate : 0;
  var total = subtotal + tax + shipping - discount;
  document.getElementById("cart-subtotal").value =
    paymentSign + subtotal.toFixed(2);
  document.getElementById("cart-tax").value = paymentSign + tax.toFixed(2);
  document.getElementById("cart-shipping").value =
    paymentSign + shipping.toFixed(2);
  document.getElementById("cart-total").value = paymentSign + total.toFixed(2);
  document.getElementById("cart-discount").value =
    paymentSign + discount.toFixed(2);
  document.getElementById("totalamountInput").value =
    paymentSign + total.toFixed(2);
  document.getElementById("amountTotalPay").value =
    paymentSign + total.toFixed(2);
}
function amountKeyup() {
  // var listArray = [];
  // listArray.push(document.getElementsByClassName('product-price'));
  document.getElementsByClassName('product-price').forEach(function (item) {
    item.addEventListener('keyup', function (e) {
      var priceselection = item.parentElement.nextElementSibling.nextElementSibling.querySelector('.product-line-price');
      var amount = e.target.value;
      var itemQuntity = item.parentElement.nextElementSibling.querySelector('.product-quantity').value;
      updateQuantity(amount, itemQuntity,priceselection);
    });
  });
}
amountKeyup();
/* Update quantity */
function updateQuantity(amount, itemQuntity,priceselection) {
  var linePrice = amount * itemQuntity;
  /* Update line price display and recalc cart totals */
    linePrice = linePrice.toFixed(2);
    priceselection.value = paymentSign + linePrice;
    recalculateCart();
}
/* Remove item from cart */
function removeItem(removeButton) {
  removeButton.target.closest("tr").remove();
  recalculateCart();
}

//Choise Js
var genericExamples = document.querySelectorAll("[data-trigger]");
for (i = 0; i < genericExamples.length; ++i) {
  var element = genericExamples[i];
  new Choices(element, {
    placeholderValue: "This is a placeholder set in the config",
    searchPlaceholderValue: "This is a search placeholder",
  });
}
//Address
function billingFunction() {
  if (document.getElementById("same").checked) {
    document.getElementById("shippingName").value =
      document.getElementById("billingName").value;
    document.getElementById("shippingAddress").value =
      document.getElementById("billingAddress").value;
    document.getElementById("shippingPhoneno").value =
      document.getElementById("billingPhoneno").value;
    document.getElementById("shippingTaxno").value =
      document.getElementById("billingTaxno").value;
  } else {
    document.getElementById("shippingName").value = "";
    document.getElementById("shippingAddress").value = "";
    document.getElementById("shippingPhoneno").value = "";
    document.getElementById("shippingTaxno").value = "";
  }
}
//Form Validation
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
var cleaveBlocks = new Cleave('#cardNumber', {
  blocks: [4, 4, 4, 4],
  uppercase: true
});

var genericExamples = document.querySelectorAll('[data-plugin="cleave-phone"]');
for (i = 0; i < genericExamples.length; ++i) {
  var element = genericExamples[i];
  new Cleave(element, {
    delimiters: ['(', ')', '-'],
    blocks: [0, 3, 3, 4]
  });
}
