/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Two step verification Init Js File
*/


// move next
function moveToNext(elem, count){
    if(elem.value.length > 0) {
        document.getElementById("digit"+count+"-input").focus();
    }
}