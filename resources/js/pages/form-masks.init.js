/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Form masks Js File
*/

var cleaveDate = new Cleave('#cleave-date', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

var cleaveDateFormat = new Cleave('#cleave-date-format', {
    date: true,
    datePattern: ['m', 'y']
});


var cleaveTime = new Cleave('#cleave-time', {
    time: true,
    timePattern: ['h', 'm', 's']
});

var cleaveTimeFormat = new Cleave('#cleave-time-format', {
    time: true,
    timePattern: ['h', 'm']
});

var cleaveNumeral = new Cleave('#cleave-numeral', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

var cleaveBlocks = new Cleave('#cleave-ccard', {
    blocks: [4, 4, 4, 4],
    uppercase: true
});

var cleaveDelimiter = new Cleave('#cleave-delimiter', {
    delimiter: '·',
    blocks: [3, 3, 3],
    uppercase: true
});

var cleaveDelimiters = new Cleave('#cleave-delimiters', {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
    uppercase: true
});

var cleavePrefix = new Cleave('#cleave-prefix', {
    prefix: 'PREFIX',
    delimiter: '-',
    blocks: [6, 4, 4, 4],
    uppercase: true
});

var cleaveBlocks = new Cleave('#cleave-phone', {
    delimiters: ['(', ')', '-'],
    blocks: [0, 3, 3, 4]
});