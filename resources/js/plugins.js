/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Version: 1.0.0
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Common Plugins Js File
*/

//Common plugins
if(document.querySelectorAll("[toast-list]") || document.querySelectorAll('[data-choices]') || document.querySelectorAll("[data-provider]")){
  document.writeln("<script type='text/javascript' src=" + baseUrl + "'assets/libs/toastify-js/toastify-js.min.js'></script>");
  document.writeln("<script type='text/javascript' src=" + baseUrl + "'assets/libs/choices.js/choices.js.min.js'></script>");
  document.writeln("<script type='text/javascript' src=" + baseUrl + "'assets/libs/flatpickr/flatpickr.min.js'></script>");
}
