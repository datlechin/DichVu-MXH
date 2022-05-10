/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ticket list init js
*/


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
        "tasks_name",
        "client_name",
        "assignedto",
        "create_date",
        "due_date",
        "status",
        "priority",
    ],
    page: perPage,
    pagination: true,
    plugins: [
        ListPagination({
            left: 2,
            right: 2
        })
    ]
};
// Init list
var ticketsList = new List('ticketsList', options).on("updated", function (list) {
    (list.matchingItems.length == 0) ? document.getElementsByClassName("noresult")[0].style.display = "block": document.getElementsByClassName("noresult")[0].style.display = "none";
    var isFirst = list.i == 1;
    var isLast = list.i > list.matchingItems.length - list.page;
    // make the Prev and Nex buttons disabled on first and last pages accordingly
    (document.querySelector(".pagination-prev.disabled")) ? document.querySelector(".pagination-prev.disabled").classList.remove("disabled"): '';
    (document.querySelector(".pagination-next.disabled")) ? document.querySelector(".pagination-next.disabled").classList.remove("disabled"): '';
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
});;

isCount = new DOMParser().parseFromString(
    ticketsList.items.slice(-1)[0]._values.id,
    "text/html"
);

var isValue = isCount.body.firstElementChild.innerHTML;

var idField = document.getElementById("orderId"),
    tasksTitleField = document.getElementById("tasksTitle-field"),
    clientNameField = document.getElementById("clientName-field"),
    assignedtoNameField = document.getElementById("assignedtoName-field"),
    dateField = document.getElementById("date-field"),
    dateDueField = document.getElementById("duedate-field"),
    priorityField = document.getElementById("priority-field"),
    statusField = document.getElementById("ticket-status"),
    addBtn = document.getElementById("add-btn"),
    editBtn = document.getElementById("edit-btn"),
    removeBtns = document.getElementsByClassName("remove-item-btn"),
    editBtns = document.getElementsByClassName("edit-item-btn");
refreshCallbacks();
filterOrder("All");


function filterOrder(isValue) {
    var values_status = isValue;
    ticketsList.filter(function (data) {
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

    ticketsList.update();
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
    //console.log('Filtered: ' + values_gender);
}

document
    .getElementById("showModal")
    .addEventListener("show.bs.modal", function (e) {
        if (e.relatedTarget.classList.contains("edit-item-btn")) {
            document.getElementById("exampleModalLabel").innerHTML = "Edit Ticket";
            document
                .getElementById("showModal")
                .querySelector(".modal-footer").style.display = "block";
            document.getElementById("add-btn").style.display = "none";
            document.getElementById("edit-btn").style.display = "block";
        } else if (e.relatedTarget.classList.contains("add-btn")) {
            document.getElementById("modal-id").style.display = "none";
            document.getElementById("exampleModalLabel").innerHTML = "Add Ticket";
            document
                .getElementById("showModal")
                .querySelector(".modal-footer").style.display = "block";
            document.getElementById("edit-btn").style.display = "none";
            document.getElementById("add-btn").style.display = "block";
        } else {
            document.getElementById("exampleModalLabel").innerHTML = "List Ticket";
            document
                .getElementById("showModal")
                .querySelector(".modal-footer").style.display = "none";
        }
    });
ischeckboxcheck();

document.getElementById("showModal")
    .addEventListener("hidden.bs.modal", function () {
        clearFields();
    });

document.querySelector("#ticketsList").addEventListener("click", function () {
    refreshCallbacks();
    ischeckboxcheck();
});

var table = document.getElementById("ticketTable");
// save all tr
var tr = table.getElementsByTagName("tr");
var trlist = table.querySelectorAll(".list tr");

function SearchData() {
    var isstatus = document.getElementById("idStatus").value;
    var pickerVal = document.getElementById("demo-datepicker").value;

    var date1 = pickerVal.split(" to ")[0];
    var date2 = pickerVal.split(" to ")[1];

    ticketsList.filter(function (data) {
        matchData = new DOMParser().parseFromString(data.values().status, 'text/html');
        var status = matchData.body.firstElementChild.innerHTML;
        var statusFilter = false;
        var dateFilter = false;

        if (status == 'all' || isstatus == 'all') {
            statusFilter = true;
        } else {
            statusFilter = status == isstatus;
        }

        if (new Date(data.values().create_date.slice(0, 12)) >= new Date(date1) && new Date(data.values().create_date.slice(0, 12)) <= new Date(date2)) {
            dateFilter = true;
        } else {
            dateFilter = false;
        }

        if (statusFilter && dateFilter) {
            return statusFilter && dateFilter
        } else if (statusFilter && pickerVal == "") {
            return statusFilter
        } else if (dateFilter && pickerVal == "") {
            return dateFilter
        }
    });
    ticketsList.update();
}

var count = Number(isValue.replace(/[^0-9]/g, "")) + 1;
addBtn.addEventListener("click", function (e) {
    if (
        tasksTitleField.value !== "" &&
        clientNameField.value !== "" &&
        assignedtoNameField.value !== "" &&
        dateField.value !== "" &&
        dateDueField.value !== "" &&
        statusField.value !== "" &&
        priorityField.value !== ""
    ) {
        ticketsList.add({
            id: '<a href="javascript:void(0);" class="fw-medium link-primary">#VLZ' +
                count +
                "</a>",
            tasks_name: tasksTitleField.value,
            client_name: clientNameField.value,
            assignedto: assignedtoNameField.value,
            create_date: dateField.value,
            due_date: dateDueField.value,
            priority: isPriority(priorityField.value),
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
    var editValues = ticketsList.get({
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
                tasks_name: tasksTitleField.value,
                client_name: clientNameField.value,
                create_date: dateField.value,
                due_date: dateDueField.value,
                priority: isPriority(priorityField.value),
                status: isStatus(statusField.value),
            });
        }
    });
    document.getElementById("close-modal").click();
    clearFields();
});
var example = new Choices(priorityField, {
    searchEnabled: false,
});
var statusVal = new Choices(statusField, {
    searchEnabled: false,
});

function isStatus(val) {
    switch (val) {
        case "Open":
            return (
                '<span class="badge badge-soft-success text-uppercase">' +
                val +
                "</span>"
            );
        case "Inprogress":
            return (
                '<span class="badge badge-soft-warning text-uppercase">' +
                val +
                "</span>"
            );
        case "Closed":
            return (
                '<span class="badge badge-soft-danger text-uppercase">' + val + "</span>"
            );
        case "New":
            return (
                '<span class="badge badge-soft-info text-uppercase">' +
                val +
                "</span>"
            );
    }
}

function isPriority(val) {
    switch (val) {
        case "High":
            return (
                '<span class="badge bg-danger text-uppercase">' +
                val +
                "</span>"
            );
        case "Low":
            return (
                '<span class="badge bg-success text-uppercase">' +
                val +
                "</span>"
            );
        case "Medium":
            return (
                '<span class="badge bg-warning text-uppercase">' +
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
            var itemValues = ticketsList.get({
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
                            ticketsList.remove("id", isElem.outerHTML);
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
            var itemValues = ticketsList.get({
                id: itemId,
            });

            itemValues.forEach(function (x) {
                isid = new DOMParser().parseFromString(x._values.id, "text/html");
                var selectedid = isid.body.firstElementChild.innerHTML;
                if (selectedid == itemId) {
                    idField.value = selectedid;
                    tasksTitleField.value = x._values.tasks_name;
                    clientNameField.value = x._values.client_name;
                    assignedtoNameField.value = x._values.assignedto;
                    dateField.value = x._values.create_date;
                    dateDueField.value = x._values.due_date;

                    if (example) example.destroy();
                    example = new Choices(priorityField, {
                        searchEnabled: false
                    });
                    val = new DOMParser().parseFromString(x._values.priority, "text/html");
                    var selected = val.body.firstElementChild.innerHTML;
                    example.setChoiceByValue(selected);

                    if (statusVal) statusVal.destroy();
                    statusVal = new Choices(statusField, {
                        searchEnabled: false
                    });
                    val = new DOMParser().parseFromString(x._values.status, "text/html");
                    var statusSelec = val.body.firstElementChild.innerHTML;
                    statusVal.setChoiceByValue(statusSelec);

                    flatpickr("#date-field", {
                        dateFormat: "d M, Y",
                        defaultDate: x._values.create_date,
                    });

                    flatpickr("#duedate-field", {
                        dateFormat: "d M, Y",
                        defaultDate: x._values.due_date,
                    });
                }
            });
        });
    });
}

function clearFields() {
    tasksTitleField.value = "";
    clientNameField.value = "";
    assignedtoNameField.value = "";
    dateField.value = "";
    dateDueField.value = "";

    if (example)
        example.destroy();
    example = new Choices(priorityField);

    if (statusVal)
        statusVal.destroy();
    statusVal = new Choices(statusField);
}

document.querySelector(".pagination-next").addEventListener("click", function () {
    (document.querySelector(".pagination.listjs-pagination")) ? (document.querySelector(".pagination.listjs-pagination").querySelector(".active")) ?
    document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling.children[0].click(): '': '';
});
document.querySelector(".pagination-prev").addEventListener("click", function () {
    (document.querySelector(".pagination.listjs-pagination")) ? (document.querySelector(".pagination.listjs-pagination").querySelector(".active")) ?
    document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling.children[0].click(): '': '';
});