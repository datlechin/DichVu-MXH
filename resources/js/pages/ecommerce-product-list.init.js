/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ecommerce product list Js File
*/

var slider = document.getElementById('product-price-range');

noUiSlider.create(slider, {
	start: [1000, 3000], // Handle start position
	step: 10, // Slider moves in increments of '10'
	margin: 20, // Handles must be more than '20' apart
	connect: true, // Display a colored bar between the handles
	behaviour: 'tap-drag', // Move handle on tap, bar is draggable
	range: { // Slider can select '0' to '100'
		'min': 0,
		'max': 5000
	},
	format: wNumb({ decimals: 0, prefix: '$ ' })

});

var minCostInput = document.getElementById('minCost'),
	maxCostInput = document.getElementById('maxCost');

// When the slider value changes, update the input and span
slider.noUiSlider.on('update', function (values, handle) {
	if (handle) {
		maxCostInput.value = values[handle];
	} else {
		minCostInput.value = values[handle];
	}
});

minCostInput.addEventListener('change', function () {
	slider.noUiSlider.set([null, this.value]);
});

maxCostInput.addEventListener('change', function () {
	slider.noUiSlider.set([null, this.value]);
});


// table select to remove

var isSelected = 0;
var tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]');
tabEl.forEach(function (el) {
	el.addEventListener('show.bs.tab', function (event) {
		isSelected = 0;
		document.getElementById("selection-element").style.display = 'none';
	});
});
// Get the value of the input field with id="numb"
setTimeout(function () {
	document.querySelectorAll(".gridjs-checkbox").forEach(function (item) {
		item.addEventListener("click", function (event) {


			if (event.target.closest('.gridjs-tr').classList.contains("gridjs-tr-selected")) {
				isSelected--;
				document.getElementById("select-content").innerHTML = isSelected;
				(isSelected > 0) ? document.getElementById("selection-element").style.display = 'block' : document.getElementById("selection-element").style.display = 'none';
			} else {
				document.getElementById("delete-product").addEventListener("click", function () {
					event.target.closest('.gridjs-tr').remove();
					document.getElementById("btn-close").click();
					document.getElementById("selection-element").style.display = 'none';
				});
				isSelected++;
				document.getElementById("select-content").innerHTML = isSelected;
				(isSelected > 0) ? document.getElementById("selection-element").style.display = 'block' : document.getElementById("selection-element").style.display = 'none';
			}
		});
	});
}, 100);


var removeItem = document.getElementById('removeItemModal');
removeItem.addEventListener('show.bs.modal', function (event) {
	isSelected = 0;

	document.getElementById("delete-product").addEventListener("click", function () {
		if (event.relatedTarget.closest('.gridjs-tr')) {
			event.relatedTarget.closest('.gridjs-tr').remove();
			document.getElementById("select-content").innerHTML = isSelected;
		}
		document.getElementById("btn-close").click();
		if (document.getElementById("text"))
			document.getElementById("text").style.display = 'none';
	});
})

// table-product-list-all
new gridjs.Grid({
	columns:
		[
			{
				id: 'productListAllCheckbox',
				name: '#',
				width: '40px',
				sort: {
					enabled: false
				},
				plugin: {
					component: gridjs.plugins.selection.RowSelection,
					props: {
						id: (function (row) {
							return row.cell(6).data;
						})
					}
				}
			},
			{
				name: 'Product',
				width: '360px',
				formatter: (function (cell) {
					return gridjs.html('<div class="d-flex align-items-center">' +
						'<div class="flex-shrink-0 me-3">' +
						'<div class="avatar-sm bg-light rounded p-1"><img src="assets/images/products/' + cell[0] + '" alt="" class="img-fluid d-block"></div>' +
						'</div>' +
						'<div class="flex-grow-1">' +
						'<h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details" class="text-dark">' + cell[1] + '</a></h5>' +
						'<p class="text-muted mb-0">Category : <span class="fw-medium">' + cell[2] + '</span></p>' +
						'</div>' +
						'</div>');
				})
			},

			{
				name: 'Stock',
				width: '94px',
			},
			{
				name: 'Price',
				width: '101px',
			},
			{
				name: 'Orders',
				width: '84px',
			},
			{
				name: 'Rating',
				width: '105px',
				formatter: (function (cell) {
					return gridjs.html('<span class="badge bg-light text-body fs-12 fw-medium"><i class="mdi mdi-star text-warning me-1"></i>' + cell + '</span></td>');
				})
			},
			{
				name: 'Published',
				width: '220px',
				formatter: (function (cell) {
					return gridjs.html(cell[0] + '<small class="text-muted ms-1">' + cell[1] + '</small>');
				})
			},
			{
				name: "Action",
				width: '80px',
				sort: {
					enabled: false
				},
				formatter: (function (cell) {
					return gridjs.html('<div class="dropdown">' +
						'<button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">' +
						'<i class="ri-more-fill"></i>' +
						'</button>' +
						'<ul class="dropdown-menu dropdown-menu-end">' +
						'<li><a class="dropdown-item" href="apps-ecommerce-product-details"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>' +
						'<li><a class="dropdown-item" href="apps-ecommerce-add-product"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li>' +
						'<li class="dropdown-divider"></li>' +
						'<li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>' +
						'</ul>' +
						'</div>');
				})
			}
		],
	className: {
		th: 'text-muted',
	},
	pagination: {
		limit: 10
	},
	sort: true,
	data: [
		[["img-1.png", "Half Sleeve Round Neck T-Shirts", "Clothes"], "12", "$ 115.00", "48", "4.2", ["12 Oct, 2021", "10:05 AM"]],
		[["img-2.png", "Urban Ladder Pashe Chair", "Furniture"], "06", "$ 160.00", "30", "4.3", ["06 Jan, 2021", "01:31 PM"]],
		[["img-3.png", "350 ml Glass Grocery Container", "Kitchen Storage & Containers"], "10", "$ 25.00", "48", "4.5", ["26 Mar, 2021", "11:40 AM"]],
		[["img-4.png", "Fabric Dual Tone Living Room Chair", "Furniture"], "15", "$ 140.00", "40", "4.2", ["19 Apr, 2021", "02:51 PM"]],
		[["img-5.png", "Crux Motorsports Helmet", "Bike Accessories"], "08", "$ 135.00", "55", "4.4", ["30 Mar, 2021", "09:42 AM"]],
		[["img-6.png", "Half Sleeve T-Shirts (Blue)", "Clothes"], "15", "$ 125.00", "48", "4.2", ["12 Oct, 2021", "04:55 PM"]],
		[["img-7.png", "Noise Evolve Smartwatch", "Watches"], "12", "$ 95.00", "45", "4.3", ["15 May, 2021", "03:40 PM"]],
		[["img-8.png", "Sweatshirt for Men (Pink)", "Clothes"], "20", "$ 120.00", "48", "4.2", ["21 Jun, 2021", "12:18 PM"]],
		[["img-9.png", "Reusable Ecological Coffee Cup", "Tableware & Dinnerware"], "14", "$ 125.00", "55", "4.3", ["15 Jan, 2021", "10:29 AM"]],
		[["img-10.png", "Travel Carrying Pouch Bag", "Bags, Wallets and Luggage"], "20", "$ 115.00", "60", "4.3", ["15 Jun, 2021", "03:51 Pm"]],
		[["img-1.png", "Half Sleeve Round Neck T-Shirts", "Clothes"], "12", "$ 115.00", "48", "4.2", ["12 Oct, 2021", "10:05 AM"]],
		[["img-2.png", "Urban Ladder Pashe Chair", "Furniture"], "06", "$ 160.00", "30", "4.3", ["06 Jan, 2021", "01:31 PM"]],
	]
}).render(document.getElementById("table-product-list-all"));




// table-product-list-published
new gridjs.Grid({
	columns:
		[
			{
				id: 'productListPublishedCheckbox',
				name: '#',
				width: '40px',
				sort: {
					enabled: false
				},
				plugin: {
					component: gridjs.plugins.selection.RowSelection,
					props: {
						id: (function (row) {
							return row.cell(6).data;
						})
					}
				}
			},
			{
				name: 'Product',
				width: '360px',
				formatter: (function (cell) {
					return gridjs.html('<div class="d-flex align-items-center">' +
						'<div class="flex-shrink-0 me-3">' +
						'<div class="avatar-sm bg-light rounded p-1"><img src="assets/images/products/' + cell[0] + '" alt="" class="img-fluid d-block"></div>' +
						'</div>' +
						'<div class="flex-grow-1">' +
						'<h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details" class="text-dark">' + cell[1] + '</a></h5>' +
						'<p class="text-muted mb-0">Category : <span class="fw-medium">' + cell[2] + '</span></p>' +
						'</div>' +
						'</div>');
				})
			},
			{
				name: 'Stock',
				width: '94px',
			},
			{
				name: 'Price',
				width: '101px',
			},
			{
				name: 'Orders',
				width: '84px',
			},
			{
				name: 'Rating',
				width: '105px',
				formatter: (function (cell) {
					return gridjs.html('<span class="badge bg-light text-body fs-12 fw-medium"><i class="mdi mdi-star text-warning me-1"></i>' + cell + '</span></td>');
				})
			},
			{
				name: 'Published',
				width: '220px',
				formatter: (function (cell) {
					return gridjs.html(cell[0] + '<small class="text-muted ms-1">' + cell[1] + '</small>');
				})
			},
			{
				name: "Action",
				width: '80px',
				sort: {
					enabled: false
				},
				formatter: (function (cell) {
					return gridjs.html('<div class="dropdown">' +
						'<button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">' +
						'<i class="ri-more-fill"></i>' +
						'</button>' +
						'<ul class="dropdown-menu dropdown-menu-end">' +
						'<li><a class="dropdown-item" href="apps-ecommerce-product-details"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>' +
						'<li><a class="dropdown-item" href="apps-ecommerce-add-product"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li>' +
						'<li class="dropdown-divider"></li>' +
						'<li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>' +
						'</ul>' +
						'</div>');
				})
			}
		],
	className: {
		th: 'text-muted',
	},
	pagination: {
		limit: 10
	},
	sort: true,
	data: [
		[["img-2.png", "Urban Ladder Pashe Chair", "Furniture"], "06", "$ 160.00", "30", "4.3", ["06 Jan, 2021", "01:31 PM"]],
		[["img-6.png", "Half Sleeve T-Shirts (Blue)", "Clothes"], "15", "$ 125.00", "48", "4.2", ["12 Oct, 2021", "04:55 PM"]],
		[["img-4.png", "Fabric Dual Tone Living Room Chair", "Furniture"], "15", "$ 140.00", "40", "4.2", ["19 Apr, 2021", "02:51 PM"]],
		[["img-3.png", "350 ml Glass Grocery Container", "Kitchen Storage & Containers"], "10", "$ 25.00", "48", "4.5", ["26 Mar, 2021", "11:40 AM"]],
		[["img-5.png", "Crux Motorsports Helmet", "Bike Accessories"], "08", "$ 135.00", "55", "4.4", ["30 Mar, 2021", "09:42 AM"]],
	]
}).render(document.getElementById("table-product-list-published"));
