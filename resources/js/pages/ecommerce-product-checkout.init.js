/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ecommerce product Js File
*/


// Chocies Select plugin
document.addEventListener('DOMContentLoaded', function () {
    var genericExamples = document.querySelectorAll('[data-plugin="choices"]');
    for (i = 0; i < genericExamples.length; ++i) {
        var element = genericExamples[i];
        new Choices(element, {
            placeholderValue: 'This is a placeholder set in the config',
            searchPlaceholderValue: 'Search results here',
        });
    }
});

// Checkout nav tab
document.querySelectorAll(".checkout-tab").forEach(function (form) {

    // next tab
    form.querySelectorAll(".nexttab").forEach(function (nextButton) {
        var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
        tabEl.forEach(function (item) {
            item.addEventListener('show.bs.tab', function (event) {
                event.target.classList.add('done');
            });
        });
        nextButton.addEventListener("click", function () {
            var nextTab = nextButton.getAttribute('data-nexttab');
            document.getElementById(nextTab).click();
        });
    });

    //Pervies tab
    form.querySelectorAll(".previestab").forEach(function (prevButton) {

        prevButton.addEventListener("click", function () {
            var prevTab = prevButton.getAttribute('data-previous');
            var totalDone = prevButton.closest("form").querySelectorAll(".custom-nav .done").length;
            for (var i = totalDone - 1; i < totalDone; i++) {
                (prevButton.closest("form").querySelectorAll(".custom-nav .done")[i]) ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove('done') : '';
            }
            document.getElementById(prevTab).click();
        });
    });

    // Step number click
    var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
    tabButtons.forEach(function (button, i) {
        button.setAttribute("data-position", i);
        button.addEventListener("click", function () {
            (form.querySelectorAll(".custom-nav .done").length > 0) ?
                form.querySelectorAll(".custom-nav .done").forEach(function (doneTab) {
                    doneTab.classList.remove('done');
                })
                : '';
            for (var j = 0; j <= i; j++) {
                tabButtons[j].classList.contains('active') ?  tabButtons[j].classList.remove('done') :  tabButtons[j].classList.add('done');
            }
        });
    });
});