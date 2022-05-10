/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: nestable init js
*/

// Nested sortable demo
var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));

// Loop through each nested sortable element
for (var i = 0; i < nestedSortables.length; i++) {
    new Sortable(nestedSortables[i], {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
    });
}

// Nested sortable handle demo
var nestedSortablesHandles = [].slice.call(document.querySelectorAll('.nested-sortable-handle'));

// Loop through each nested sortable element
for (var i = 0; i < nestedSortablesHandles.length; i++) {
    new Sortable(nestedSortablesHandles[i], {
        handle: '.handle',
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
    });
}