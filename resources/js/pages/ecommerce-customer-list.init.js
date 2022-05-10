/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: ecommerce customer Js File
*/


// list js

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
    "email",
    "date",
    "phone",
    "status",
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
var customerList = new List("customerList", options).on("updated", function (list) {
  list.matchingItems.length == 0
    ? (document.getElementsByClassName("noresult")[0].style.display = "block")
    : (document.getElementsByClassName("noresult")[0].style.display = "none");
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
  customerList.items.slice(-1)[0]._values.id,
  "text/html"
);

var isValue = isCount.body.firstElementChild.innerHTML;

var idField = document.getElementById("id-field"),
  customerNameField = document.getElementById("customername-field"),
  emailField = document.getElementById("email-field"),
  dateField = document.getElementById("date-field"),
  phoneField = document.getElementById("phone-field"),
  statusField = document.getElementById("status-field"),
  addBtn = document.getElementById("add-btn"),
  editBtn = document.getElementById("edit-btn"),
  removeBtns = document.getElementsByClassName("remove-item-btn"),
  editBtns = document.getElementsByClassName("edit-item-btn");
refreshCallbacks();
filterContact("All");

function filterContact(isValue) {
  var values_status = isValue;
  customerList.filter(function (data) {
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

  customerList.update();
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
      document.getElementById("exampleModalLabel").innerHTML = "Edit Customer";
      document
        .getElementById("showModal")
        .querySelector(".modal-footer").style.display = "block";
      document.getElementById("add-btn").style.display = "none";
      document.getElementById("edit-btn").style.display = "block";
    } else if (e.relatedTarget.classList.contains("add-btn")) {
      document.getElementById("exampleModalLabel").innerHTML = "Add Customer";
      document
        .getElementById("showModal")
        .querySelector(".modal-footer").style.display = "block";
      document.getElementById("edit-btn").style.display = "none";
      document.getElementById("add-btn").style.display = "block";
    } else {
      document.getElementById("exampleModalLabel").innerHTML = "List Customer";
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

document.querySelector("#customerList").addEventListener("click", function () {
  refreshCallbacks();
  ischeckboxcheck();
});

var table = document.getElementById("customerTable");
// save all tr
var tr = table.getElementsByTagName("tr");
var trlist = table.querySelectorAll(".list tr");

function SearchData() {

  var isstatus = document.getElementById("idStatus").value;
  var pickerVal = document.getElementById("datepicker-range").value;

  var date1 = pickerVal.split(" to ")[0];
  var date2 = pickerVal.split(" to ")[1];

  customerList.filter(function (data) {
      matchData = new DOMParser().parseFromString(data.values().status, 'text/html');
      var status = matchData.body.firstElementChild.innerHTML;
      var statusFilter = false;
      var dateFilter = false;

      if (status == 'all' || isstatus == 'all') {
          statusFilter = true;
      } else {
          statusFilter = status == isstatus;
      }
  

      if (new Date(data.values().date.slice(0, 12)) >= new Date(date1) && new Date(data.values().date.slice(0, 12)) <= new Date(date2)) {
          dateFilter = true;
      } else {
          dateFilter = false;
      }

      if(statusFilter && dateFilter) {
          return statusFilter && dateFilter
      } else if(statusFilter && pickerVal == "") {
          return statusFilter
      } else if(dateFilter && pickerVal == "") {
          return dateFilter
      }
  });
  customerList.update();
}


var count = Number(isValue.replace(/[^0-9]/g, "")) + 1;
addBtn.addEventListener("click", function (e) {
  if (
    customerNameField.value !== "" &&
    emailField.value !== "" &&
    dateField.value !== "" &&
    phoneField.value !== ""
  ) {
    customerList.add({
      id:
        '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' +
        count +
        "</a>",
      customer_name: customerNameField.value,
      email: emailField.value,
      date: dateField.value,
      phone: phoneField.value,
      status: isStatus(statusField.value),
    });

    document.getElementById("close-modal").click();
    clearFields();
    refreshCallbacks();
    filterContact("All");
    count++;
  }
});

editBtn.addEventListener("click", function (e) {
  document.getElementById("exampleModalLabel").innerHTML = "Edit Customer";
  var editValues = customerList.get({
    id: idField.value,
  });
  editValues.forEach(function (x) {
    isid = new DOMParser().parseFromString(x._values.id, "text/html");
    var selectedid = isid.body.firstElementChild.innerHTML;
    if (selectedid == itemId) {
      x.values({
        id:
          '<a href="javascript:void(0);" class="fw-medium link-primary">' +
          idField.value +
          "</a>",
        customer_name: customerNameField.value,
        email: emailField.value,
        date: dateField.value,
        phone: phoneField.value,
        status: isStatus(statusField.value),
      });
    }
  });
  document.getElementById("close-modal").click();
  clearFields();
});

var statusVal = new Choices(statusField);

function isStatus(val) {
  switch (val) {
    case "Active":
      return (
        '<span class="badge badge-soft-success text-uppercase">' +
        val +
        "</span>"
      );
    case "Block":
      return (
        '<span class="badge badge-soft-danger text-uppercase">' +
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
      var itemValues = customerList.get({
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
              customerList.remove("id", isElem.outerHTML);
              document.getElementById("deleteRecordModal").click();
            });
        }
      });
    });
  });

  editBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.target.closest("tr").children[1].innerText;
      itemId = e.target.closest("tr").children[1].innerText;
      var itemValues = customerList.get({
        id: itemId,
      });

      itemValues.forEach(function (x) {
        isid = new DOMParser().parseFromString(x._values.id, "text/html");
        var selectedid = isid.body.firstElementChild.innerHTML;
        if (selectedid == itemId) {
          idField.value = selectedid;
          customerNameField.value = x._values.customer_name;
          emailField.value = x._values.email;
          dateField.value = x._values.date;
          phoneField.value = x._values.phone;

          if (statusVal) statusVal.destroy();
          statusVal = new Choices(statusField, {
            searchEnabled: false
          });
          val = new DOMParser().parseFromString(x._values.status, "text/html");
          var statusSelec = val.body.firstElementChild.innerHTML;
          statusVal.setChoiceByValue(statusSelec);

          flatpickr("#date-field", {
            enableTime: true,
            dateFormat: "d M, Y",
            defaultDate: x._values.date,
          });
        }
      });
    });
  });
}

function clearFields() {
  customerNameField.value = "";
  emailField.value = "";
  dateField.value = "";
  phoneField.value = "";
}

document.querySelector(".pagination-next").addEventListener("click", function () {
  (document.querySelector(".pagination.listjs-pagination")) ? (document.querySelector(".pagination.listjs-pagination").querySelector(".active")) ?
  document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling.children[0].click(): '': '';
});
document.querySelector(".pagination-prev").addEventListener("click", function () {
  (document.querySelector(".pagination.listjs-pagination")) ? (document.querySelector(".pagination.listjs-pagination").querySelector(".active")) ?
  document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling.children[0].click(): '': '';
});