/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ecommerce-order Init Js File
*/

var isChoiceEl = document.getElementById("idStatus");
var choices = new Choices(isChoiceEl, {
    searchEnabled: false,
});

var isPaymentEl = document.getElementById("idPayment");
var choices = new Choices(isPaymentEl, {
    searchEnabled: false,
});

var checkAll = document.getElementById("checkAll");
if (checkAll) {
    checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
            '.form-check-all input[type="checkbox"]'
        );
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = this.checked;
            if (checkboxes[i].checked) {
                checkboxes[i].closest("tr").classList.add("table-active");
            } else {
                checkboxes[i].closest("tr").classList.remove("table-active");
            }
        }
    };
}
var perPage = 8;

//Table
var options = {
    valueNames: [
        "id",
        "customer_name",
        "product_name",
        "date",
        "amount",
        "payment",
        "status",
    ],
    page: perPage,
    pagination: true,
    plugins: [
        ListPagination({
            left: 2,
            right: 2,
        }),
    ],
};
// Init list
var orderList = new List("orderList", options).on("updated", function (list) {
    list.matchingItems.length == 0 ?
        (document.getElementsByClassName("noresult")[0].style.display = "block") :
        (document.getElementsByClassName("noresult")[0].style.display = "none");
    var isFirst = list.i == 1;
    var isLast = list.i > list.matchingItems.length - list.page;
    // make the Prev and Nex buttons disabled on first and last pages accordingly
    document.querySelector(".pagination-prev.disabled") ?
        document
        .querySelector(".pagination-prev.disabled")
        .classList.remove("disabled") :
        "";
    document.querySelector(".pagination-next.disabled") ?
        document
        .querySelector(".pagination-next.disabled")
        .classList.remove("disabled") :
        "";
    if (isFirst) {
        document.querySelector(".pagination-prev").classList.add("disabled");
    }
    if (isLast) {
        document.querySelector(".pagination-next").classList.add("disabled");
    }
    if (list.matchingItems.length <= perPage) {
        document.querySelector(".pagination-wrap").style.display = "none";
    } else {
        document.querySelector(".pagination-wrap").style.display = "flex";
    }

    if (list.matchingItems.length == perPage) {
        document.querySelector(".pagination.listjs-pagination").firstElementChild.children[0].click()
    }

    if (list.matchingItems.length > 0) {
        document.getElementsByClassName("noresult")[0].style.display = "none";
    } else {
        document.getElementsByClassName("noresult")[0].style.display = "block";
    }
});

isCount = new DOMParser().parseFromString(
    orderList.items.slice(-1)[0]._values.id,
    "text/html"
);

var isValue = isCount.body.firstElementChild.innerHTML;

var idField = document.getElementById("orderId"),
    customerNameField = document.getElementById("customername-field"),
    productNameField = document.getElementById("productname-field"),
    dateField = document.getElementById("date-field"),
    amountField = document.getElementById("amount-field"),
    paymentField = document.getElementById("payment-field"),
    statusField = document.getElementById("delivered-status"),
    addBtn = document.getElementById("add-btn"),
    editBtn = document.getElementById("edit-btn"),
    removeBtns = document.getElementsByClassName("remove-item-btn"),
    editBtns = document.getElementsByClassName("edit-item-btn");
refreshCallbacks();
filterOrder("All");

var tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]');
tabEl.forEach(function (item) {
    item.addEventListener("shown.bs.tab", function (event) {
        filterOrder(event.target.id);
    });
});

function filterOrder(isValue) {
    var values_status = isValue;
    orderList.filter(function (data) {
        var statusFilter = false;
        matchData = new DOMParser().parseFromString(
            data.values().status,
            "text/html"
        );
        var status = matchData.body.firstElementChild.innerHTML;
        if (status == "All" || values_status == "All") {
            statusFilter = true;
        } else {
            statusFilter = status == values_status;
        }
        return statusFilter;
    });

    orderList.update();
}

function updateList() {
    var values_status = document.querySelector(
        "input[name=status]:checked"
    ).value;

    data = userList.filter(function (item) {
        var statusFilter = false;

        if (values_status == "All") {
            statusFilter = true;
        } else {
            statusFilter = item.values().sts == values_status;
        }
        return statusFilter;
    });
    userList.update();
}

document
    .getElementById("showModal")
    .addEventListener("show.bs.modal", function (e) {
        if (e.relatedTarget.classList.contains("edit-item-btn")) {
            document.getElementById("exampleModalLabel").innerHTML = "Edit Order";
            document
                .getElementById("showModal")
                .querySelector(".modal-footer").style.display = "block";
            document.getElementById("add-btn").style.display = "none";
            document.getElementById("edit-btn").style.display = "block";
        } else if (e.relatedTarget.classList.contains("add-btn")) {
            document.getElementById("modal-id").style.display = "none";
            document.getElementById("exampleModalLabel").innerHTML = "Add Order";
            document
                .getElementById("showModal")
                .querySelector(".modal-footer").style.display = "block";
            document.getElementById("edit-btn").style.display = "none";
            document.getElementById("add-btn").style.display = "block";
        } else {
            document.getElementById("exampleModalLabel").innerHTML = "List Order";
            document
                .getElementById("showModal")
                .querySelector(".modal-footer").style.display = "none";
        }
    });
ischeckboxcheck();

document
    .getElementById("showModal")
    .addEventListener("hidden.bs.modal", function () {
        clearFields();
    });

document.querySelector("#orderList").addEventListener("click", function () {
    refreshCallbacks();
    ischeckboxcheck();
});

var table = document.getElementById("orderTable");
// save all tr
var tr = table.getElementsByTagName("tr");
var trlist = table.querySelectorAll(".list tr");

function SearchData() {
    var isstatus = document.getElementById("idStatus").value;
    var payment = document.getElementById("idPayment").value;
    var pickerVal = document.getElementById("demo-datepicker").value;

    var date1 = pickerVal.split(" to ")[0];
    var date2 = pickerVal.split(" to ")[1];

    orderList.filter(function (data) {
        matchData = new DOMParser().parseFromString(
            data.values().status,
            "text/html"
        );
        var status = matchData.body.firstElementChild.innerHTML;
        var statusFilter = false;
        var paymentFilter = false;
        var dateFilter = false;

        if (status == "all" || isstatus == "all") {
            statusFilter = true;
        } else {
            statusFilter = status == isstatus;
        }

        if (data.values().payment == "all" || payment == "all") {
            paymentFilter = true;
        } else {
            paymentFilter = data.values().payment == payment;
        }

        if (
            new Date(data.values().date.slice(0, 12)) >= new Date(date1) &&
            new Date(data.values().date.slice(0, 12)) <= new Date(date2)
        ) {
            dateFilter = true;
        } else {
            dateFilter = false;
        }

        if (statusFilter && paymentFilter && dateFilter) {
            return statusFilter && paymentFilter && dateFilter;
        } else if (statusFilter && paymentFilter && pickerVal == "") {
            return statusFilter && paymentFilter;
        } else if (paymentFilter && dateFilter && pickerVal == "") {
            return paymentFilter && dateFilter;
        }
    });
    orderList.update();
}

var count = Number(isValue.replace(/[^0-9]/g, "")) + 1;
addBtn.addEventListener("click", function (e) {
    if (
        customerNameField.value !== "" &&
        productNameField.value !== "" &&
        dateField.value !== "" &&
        amountField.value !== "" &&
        paymentField.value !== ""
    ) {
        orderList.add({
            id: '<a href="apps-ecommerce-order-details.html" class="fw-medium link-primary">#VZ' +
                count +
                "</a>",
            customer_name: customerNameField.value,
            product_name: productNameField.value,
            date: dateField.value,
            amount: "$" + amountField.value,
            payment: paymentField.value,
            status: isStatus(statusField.value),
        });

        document.getElementById("close-modal").click();
        clearFields();
        refreshCallbacks();
        filterOrder("All");
        count++;
    }
});

editBtn.addEventListener("click", function (e) {
    document.getElementById("exampleModalLabel").innerHTML = "Edit Order";
    var editValues = orderList.get({
        id: idField.value,
    });
    editValues.forEach(function (x) {
        isid = new DOMParser().parseFromString(x._values.id, "text/html");
        var selectedid = isid.body.firstElementChild.innerHTML;
        if (selectedid == itemId) {
            x.values({
                id: '<a href="javascript:void(0);" class="fw-medium link-primary">' +
                    idField.value +
                    "</a>",
                customer_name: customerNameField.value,
                product_name: productNameField.value,
                date: dateField.value.slice(0, 14) +
                    '<small class="text-muted">' +
                    dateField.value.slice(14, 22),
                amount: amountField.value,
                payment: paymentField.value,
                status: isStatus(statusField.value),
            });
        }
    });
    document.getElementById("close-modal").click();
    clearFields();
});
var example = new Choices(paymentField);
var statusVal = new Choices(statusField);
var productnameVal = new Choices(productNameField);

function isStatus(val) {
    switch (val) {
        case "Delivered":
            return (
                '<span class="badge badge-soft-success text-uppercase">' +
                val +
                "</span>"
            );
        case "Cancelled":
            return (
                '<span class="badge badge-soft-danger text-uppercase">' +
                val +
                "</span>"
            );
        case "Inprogress":
            return (
                '<span class="badge badge-soft-secondary text-uppercase">' +
                val +
                "</span>"
            );
        case "Pickups":
            return (
                '<span class="badge badge-soft-info text-uppercase">' + val + "</span>"
            );
        case "Returns":
            return (
                '<span class="badge badge-soft-primary text-uppercase">' +
                val +
                "</span>"
            );
        case "Pending":
            return (
                '<span class="badge badge-soft-warning text-uppercase">' +
                val +
                "</span>"
            );
    }
}

function ischeckboxcheck() {
    document.getElementsByName("checkAll").forEach(function (x) {
        x.addEventListener("click", function (e) {
            if (e.target.checked) {
                e.target.closest("tr").classList.add("table-active");
            } else {
                e.target.closest("tr").classList.remove("table-active");
            }
        });
    });
}

function refreshCallbacks() {
    removeBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.target.closest("tr").children[1].innerText;
            itemId = e.target.closest("tr").children[1].innerText;
            var itemValues = orderList.get({
                id: itemId,
            });

            itemValues.forEach(function (x) {
                deleteid = new DOMParser().parseFromString(x._values.id, "text/html");

                var isElem = deleteid.body.firstElementChild;
                var isdeleteid = deleteid.body.firstElementChild.innerHTML;

                if (isdeleteid == itemId) {
                    document
                        .getElementById("delete-record")
                        .addEventListener("click", function () {
                            orderList.remove("id", isElem.outerHTML);
                            document.getElementById("deleteOrder").click();
                        });
                }
            });
        });
    });

    editBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.target.closest("tr").children[1].innerText;
            itemId = e.target.closest("tr").children[1].innerText;
            var itemValues = orderList.get({
                id: itemId,
            });

            itemValues.forEach(function (x) {
                isid = new DOMParser().parseFromString(x._values.id, "text/html");
                var selectedid = isid.body.firstElementChild.innerHTML;
                if (selectedid == itemId) {
                    idField.value = selectedid;
                    customerNameField.value = x._values.customer_name;
                    productNameField.value = x._values.product_name;
                    dateField.value = x._values.date;
                    amountField.value = x._values.amount;

                    if (example) example.destroy();
                    example = new Choices(paymentField, {
                        searchEnabled: false
                    });
                    var selected = x._values.payment;
                    example.setChoiceByValue(selected);

                    if (productnameVal) productnameVal.destroy();
                    productnameVal = new Choices(productNameField, {
                        searchEnabled: false,
                    });
                    var selectedproduct = x._values.product_name;
                    productnameVal.setChoiceByValue(selectedproduct);

                    if (statusVal) statusVal.destroy();
                    statusVal = new Choices(statusField, {
                        searchEnabled: false
                    });
                    val = new DOMParser().parseFromString(x._values.status, "text/html");
                    var statusSelec = val.body.firstElementChild.innerHTML;
                    statusVal.setChoiceByValue(statusSelec);

                    flatpickr("#date-field", {
                        enableTime: true,
                        dateFormat: "d M, Y, h:i K",
                        defaultDate: x._values.date,
                    });
                }
            });
        });
    });
}

function clearFields() {
    customerNameField.value = "";
    productNameField.value = "";
    dateField.value = "";
    amountField.value = "";
    paymentField.value = "";

    if (example) example.destroy();
    example = new Choices(paymentField);

    if (productnameVal) productnameVal.destroy();
    productnameVal = new Choices(productNameField);

    if (statusVal) statusVal.destroy();
    statusVal = new Choices(statusField);
}

document
    .querySelector(".pagination-next")
    .addEventListener("click", function () {
        document.querySelector(".pagination.listjs-pagination") ?
            document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active") ?
            document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active")
            .nextElementSibling.children[0].click() :
            "" :
            "";
    });
document
    .querySelector(".pagination-prev")
    .addEventListener("click", function () {
        document.querySelector(".pagination.listjs-pagination") ?
            document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active") ?
            document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active")
            .previousSibling.children[0].click() :
            "" :
            "";
    });