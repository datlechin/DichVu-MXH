/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: tasks-kanaban  init js
*/


var tasks_list = [
    document.getElementById("kanbanboard"),
    document.getElementById("unassigned-task"),
    document.getElementById("todo-task"),
    document.getElementById("inprogress-task"),
    document.getElementById("reviews-task"),
    document.getElementById("completed-task"),
    document.getElementById("new-task")
];


var myModalEl = document.getElementById('deleteRecordModal');
myModalEl.addEventListener('show.bs.modal', function (event) {
    document.getElementById('delete-record').addEventListener('click', function () {
        event.relatedTarget.closest(".tasks-box").remove();
        document.getElementById('btn-close').click();
    });
});


taskCounter();

function taskCounter() {
    task_lists = document.querySelectorAll("#kanbanboard .task-list");
    task_lists.forEach(function (element) {
        tasks = element.getElementsByClassName("task");
        tasks.forEach(function (ele) {
            task_box = ele.getElementsByClassName("task-box");
            task_counted = task_box.length;
        });
        badge = element.querySelector(".card-title .badge").innerText = "";
        badge = element.querySelector(".card-title .badge").innerText = task_counted;
    });

}

drake = dragula(tasks_list).on('drag', function (el) {
    
    el.className = el.className.replace('ex-moved', '');
}).on('drop', function (el) {
    el.className += ' ex-moved';
}).on('over', function (el, container) {
    container.className += ' ex-over';
}).on('out', function (el, container) {
    container.className = container.className.replace('ex-over', '');
    taskCounter();
});


var scroll = autoScroll([
    document.querySelector("#kanbanboard"),
], {
    margin: 20,
    maxSpeed: 100,
    scrollWhenOutside: true,
    autoScroll: function () {
        return this.down && drake.dragging;
    }
});

//Create a new kanban board
document
    .getElementById("addNewBoard")
    .addEventListener("click", newKanbanbaord);

function newKanbanbaord() {
    var boardName = document.getElementById("boardName").value;

    var uniqueid = Math.floor(Math.random() * 100);

    var randomid = "remove_item_" + uniqueid;

    var dragullaid = "review_task_" + uniqueid;

    kanbanlisthtml =
        '<div class="tasks-list" id=' +
        randomid +
        ">" +
        '<div class="d-flex mb-3">' +
        '<div class="flex-grow-1">' +
        '<h6 class="fs-14 text-uppercase fw-semibold mb-0">' +
        boardName +
        '</h6>' +
        '</div>' +
        '<div class="flex-shrink-0">' +
        '<div class="dropdown card-header-dropdown">' +
        '<a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        '<span class="fw-medium text-muted fs-12">Priority<i class="mdi mdi-chevron-down ms-1"></i></span>' +
        '</a>' +
        '<div class="dropdown-menu dropdown-menu-end">' +
        '<a class="dropdown-item" href="#">Priority</a>' +
        '<a class="dropdown-item" href="#">Date Added</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div data-simplebar class="tasks-wrapper px-3 mx-n3">' +
        '<div class="tasks" id="' + dragullaid + '" >' +
        '</div>' +
        '</div>' +
        '<div class="my-3">' +
        '<button class="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>' +
        '</div>' +
        '</div>';

    var subTask = document.getElementById("kanbanboard");
    subTask.insertAdjacentHTML("beforeend", kanbanlisthtml);

    var link = document.getElementById("btn-close");
    link.click();

    drake.destroy();
    tasks_list.push(document.getElementById(dragullaid));
    drake = dragula(tasks_list);
    document.getElementById("boardName").value = "";
}

// Add Members 
document
    .getElementById("addMember")
    .addEventListener("click", newMemberAdd);

//set membar profile 
var profileField = document.getElementById("profileimgInput");
var reader = new FileReader();
profileField.addEventListener("change", function (e) {
    reader.readAsDataURL(profileField.files[0]);
    reader.onload = function () {
        var imgurl = reader.result;
        var dataURL = '<img src="' + imgurl + '" alt="profile" class="rounded-circle avatar-xs">';
        localStorage.setItem('kanbanboard-member', dataURL);
    };
});

function newMemberAdd() {
    var firstName = document.getElementById("firstnameInput").value;
    var getMemberProfile = localStorage.getItem('kanbanboard-member');

    newMembar =
        '<a href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="' + firstName + '">' +
        getMemberProfile +
        '</a>';

    var subMemberAdd = document.getElementById("newMembar");
    subMemberAdd.insertAdjacentHTML("afterbegin", newMembar);

    var link = document.getElementById("btn-close-member");
    link.click();
}