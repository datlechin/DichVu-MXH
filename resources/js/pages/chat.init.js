/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Chat init js
*/


var dummyUserImage = "assets/images/users/user-dummy-img.jpg";
var dummyMultiUserImage = "assets/images/users/multi-user.jpg";
var isreplyMessage = false;

// favourite btn
document.querySelectorAll(".favourite-btn").forEach(function (item) {
    item.addEventListener("click", function (event) {
        this.classList.toggle("active");
    });
});

var userChatElement = document.getElementsByClassName("user-chat");

document.querySelectorAll(".chat-user-list li a").forEach(function (item) {
    item.addEventListener("click", function (event) {
        userChatElement.forEach(function (elm) {
            elm.classList.add("user-chat-show");
        });

        // chat user list link active
        var chatUserList = document.querySelector(".chat-user-list li.active");
        if (chatUserList) chatUserList.classList.remove("active");
        this.parentNode.classList.add("active");
    });
});

// user-chat-remove
document.querySelectorAll(".user-chat-remove").forEach(function (item) {
    item.addEventListener("click", function (event) {
        userChatElement.forEach(function (elm) {
            elm.classList.remove("user-chat-show");
        });
    });
});

// popup image
var lightbox = GLightbox({
    selector: ".popup-img",
    title: false,
});

//User current Id

var currentChatId = "users-chat";
scrollToBottom(currentChatId);

// // Scroll to Bottom
function scrollToBottom(id) {
    setTimeout(function () {
        var simpleBar = (document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper")) ?
            document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") : ''

        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
            document.getElementById(id).getElementsByClassName("chat-conversation-list")[0].scrollHeight - window.innerHeight + 335 : 0;
        if (offsetHeight)
            simpleBar.scrollTo({
                top: offsetHeight,
                behavior: "smooth"
            });
    }, 100);
}

//chat form
var chatForm = document.querySelector("#chatinput-form");
var chatInput = document.querySelector("#chat-input");
var chatInputfeedback = document.querySelector(".chat-input-feedback");

function currentTime() {
    var ampm = new Date().getHours() >= 12 ? "pm" : "am";
    var hour =
        new Date().getHours() > 12 ?
        new Date().getHours() % 12 :
        new Date().getHours();
    var minute =
        new Date().getMinutes() < 10 ?
        "0" + new Date().getMinutes() :
        new Date().getMinutes();
    if (hour < 10) {
        return "0" + hour + ":" + minute + " " + ampm;
    } else {
        return hour + ":" + minute + " " + ampm;
    }
}
setInterval(currentTime, 1000);

var messageIds = 0;

if (chatForm) {
    //add an item to the List, including to local storage
    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var chatId = currentChatId;
        var chatReplyId = currentChatId;

        var chatInputValue = chatInput.value

        if (chatInputValue.length === 0) {
            chatInputfeedback.classList.add("show");
            setTimeout(function () {
                chatInputfeedback.classList.remove("show");
            }, 2000);
        } else {
            if (isreplyMessage == true) {
                getReplyChatList(chatReplyId, chatInputValue);
                isreplyMessage = false;
            } else {
                getChatList(chatId, chatInputValue);
            }
            scrollToBottom(chatId || chatReplyId);
        }

        chatInput.value = "";

        //reply msg remove textarea
        document.getElementById("close_toggle").click();

    })
}

//user Name and user Profile change on click
document.querySelectorAll("#userList li").forEach(function (item) {
    item.addEventListener("click", function () {
        var username = item.querySelector(".text-truncate").innerHTML;
        var userProfile = item.querySelector(".avatar-xxs .userprofile").getAttribute("src");

        document.querySelector(".user-chat-topbar .text-truncate .username").innerHTML = username;
        document.querySelector(".profile-offcanvas .username").innerHTML = username;


        if (userProfile) {
            document.querySelector(".user-chat-topbar .avatar-xs").setAttribute("src", userProfile);
            document.querySelector(".profile-offcanvas .avatar-lg").setAttribute("src", userProfile);
        } else {
            document.querySelector(".user-chat-topbar .avatar-xs").setAttribute("src", dummyUserImage);
            document.querySelector(".profile-offcanvas .avatar-lg").setAttribute("src", dummyUserImage);
        }
        var conversationImg = document.getElementById("users-conversation");
        conversationImg.querySelectorAll(".left .chat-avatar").forEach(function (item) {
            if (userProfile) {
                item.querySelector("img").setAttribute("src", userProfile);
            } else {
                item.querySelector("img").setAttribute("src", dummyUserImage);
            }
        });
    });
});

//channel Name and channel Profile change on click
document.querySelectorAll("#channelList li").forEach(function (item) {
    item.addEventListener("click", function () {
        var channelname = item.querySelector(".text-truncate").innerHTML;

        document.querySelector(".user-chat-topbar .text-truncate .username").innerHTML = channelname;
        document.querySelector(".profile-offcanvas .username").innerHTML = channelname;

        document.querySelector(".user-chat-topbar .avatar-xs").setAttribute("src", dummyMultiUserImage);
        document.querySelector(".profile-offcanvas .avatar-lg").setAttribute("src", dummyMultiUserImage);

        var conversationImg = document.getElementById("users-conversation");
        conversationImg.querySelectorAll(".left .chat-avatar").forEach(function (item) {
            item.querySelector("img").setAttribute("src", dummyUserImage);
        });
    })
})

//Copy Message to clipboard
var itemList = document.querySelector(".chat-conversation-list");
var copyMessage = itemList.querySelectorAll(".copy-message");
copyMessage.forEach(function (item) {
    item.addEventListener("click", function () {
        var isText = item.closest(".ctext-wrap").children[0] ?
            item.closest(".ctext-wrap").children[0].children[0].innerText :
            "";
        navigator.clipboard.writeText(isText);
    });
});


//Copy Message Alert
document.getElementById("copyClipBoard").style.display = "none";
var copyClipboardAlert = document.querySelectorAll(".copy-message");
copyClipboardAlert.forEach(function (item) {
    item.addEventListener("click", function () {
        document.getElementById("copyClipBoard").style.display = "block";
        setTimeout(hideclipboard, 1000);

        function hideclipboard() {
            document.getElementById("copyClipBoard").style.display = "none";
        }
    });
});

//Delete Message
var deleteItems = itemList.querySelectorAll(".delete-item");
deleteItems.forEach(function (item) {
    item.addEventListener("click", function () {
        item.closest(".user-chat-content").childElementCount == 2 ?
            item.closest(".chat-list").remove() :
            item.closest(".ctext-wrap").remove();
    });
});

//Delete Image
var deleteImage = itemList.querySelectorAll(".chat-list");
deleteImage.forEach(function (item) {
    item.querySelectorAll(".delete-image").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            subitem.closest(".message-img").childElementCount == 1 ?
                subitem.closest(".chat-list").remove() :
                subitem.closest(".message-img-list").remove();
        });
    });
});

//Reply Message
var replyMessage = itemList.querySelectorAll(".reply-message");
var replyToggleOpen = document.querySelector(".replyCard");
var replyToggleClose = document.querySelector("#close_toggle");

replyMessage.forEach(function (item) {
    item.addEventListener("click", function () {
        isreplyMessage = true;
        replyToggleOpen.classList.add("show");
        replyToggleClose.addEventListener("click", function () {
            replyToggleOpen.classList.remove("show");
        });

        var replyMsg = item.closest(".ctext-wrap").children[0].children[0].innerText;
        document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText = replyMsg;
        var replyuser = document.querySelector(".user-chat-topbar .text-truncate .username").innerHTML;
        var msgOwnerName = (item.closest(".chat-list")) ? item.closest(".chat-list").classList.contains("left") ? replyuser : 'You' : replyuser;
        document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerText = msgOwnerName;
    });
});


//Append New Message
var getChatList = function (chatid, chatItems) {
    messageIds++;
    var chatConList = document.getElementById(chatid);
    var itemList = chatConList.querySelector(".chat-conversation-list");

    if (chatItems != null) {
        itemList.insertAdjacentHTML(
            "beforeend",
            '<li class="chat-list right" id="chat-list-' +
            messageIds +
            '" >\
                <div class="conversation-list">\
                    <div class="user-chat-content">\
                        <div class="ctext-wrap">\
                            <div class="ctext-wrap-content">\
                                <p class="mb-0 ctext-content">\
                                    ' +
            chatItems +
            '\
                                </p>\
                            </div>\
                            <div class="dropdown align-self-start message-box-drop">\
                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                                    <i class="ri-more-2-fill"></i>\
                                </a>\
                                <div class="dropdown-menu">\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between reply-message" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
            messageIds +
            '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' +
            messageIds +
            '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="conversation-name">\
                        <small class="text-muted time">' +
            currentTime() +
            '</small>\
                        <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>\
                    </div>\
                </div>\
            </div>\
        </li>'
        );
    }

    // remove chat list
    var newChatList = document.getElementById("chat-list-" + messageIds);
    newChatList.querySelectorAll(".delete-item").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            itemList.removeChild(newChatList);
        });
    });

    //Copy Message
    newChatList.querySelectorAll(".copy-message").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            var currentValue =
                newChatList.childNodes[1].firstElementChild.firstElementChild
                .firstElementChild.firstElementChild.innerText;
            navigator.clipboard.writeText(currentValue);
        });
    });

    //Copy Clipboard alert
    newChatList.querySelectorAll(".copy-message").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            document.getElementById("copyClipBoard").style.display = "block";
            setTimeout(hideclipboardNew, 1000);

            function hideclipboardNew() {
                document.getElementById("copyClipBoard").style.display = "none";
            }
        });
    });

    //reply Message model
    newChatList.querySelectorAll(".reply-message").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            var replyToggleOpenNew = document.querySelector(".replyCard");
            var replyToggleCloseNew = document.querySelector("#close_toggle");
            var replyMessageNew = subitem.closest(".ctext-wrap").children[0].children[0].innerText;
            var replyUserNew = document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerHTML;
            isreplyMessage = true;
            replyToggleOpenNew.classList.add("show");
            replyToggleCloseNew.addEventListener("click", function () {
                replyToggleOpenNew.classList.remove("show");
            });
            var msgOwnerName = (subitem.closest(".chat-list")) ? subitem.closest(".chat-list").classList.contains("left") ? replyUserNew : 'You' : replyUserNew;
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerText = msgOwnerName;
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText = replyMessageNew;
        });
    });
};

var messageboxcollapse = 0;
//message with reply
var getReplyChatList = function (chatReplyId, chatReplyItems) {
    var chatReplyUser = document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerHTML;
    var chatReplyMessage = document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText;

    messageIds++;
    var chatreplyConList = document.getElementById(chatReplyId);
    var itemReplyList = chatreplyConList.querySelector(".chat-conversation-list");
    if (chatReplyItems != null) {
        itemReplyList.insertAdjacentHTML(
            "beforeend",
            '<li class="chat-list right" id="chat-list-' + messageIds + '" >\
                <div class="conversation-list">\
                    <div class="user-chat-content">\
                        <div class="ctext-wrap">\
                            <div class="ctext-wrap-content">\
                            <div class="replymessage-block mb-0 d-flex align-items-start">\
                        <div class="flex-grow-1">\
                            <h5 class="conversation-name">' + chatReplyUser + '</h5>\
                            <p class="mb-0">' + chatReplyMessage + '</p>\
                        </div>\
                        <div class="flex-shrink-0">\
                            <button type="button" class="btn btn-sm btn-link mt-n2 me-n3 font-size-18">\
                            </button>\
                        </div>\
                    </div>\
                                <p class="mb-0 ctext-content mt-1">\
                                    ' + chatReplyItems + '\
                                </p>\
                            </div>\
                            <div class="dropdown align-self-start message-box-drop">\
                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                                    <i class="ri-more-2-fill"></i>\
                                </a>\
                                <div class="dropdown-menu">\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between reply-message" href="#" data-bs-toggle="collapse"  data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' + messageIds + '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>\
                                    <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' + messageIds + '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="conversation-name">\
                        <small class="text-muted time">' + currentTime() + '</small>\
                        <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>\
                    </div>\
                </div>\
            </div>\
        </li>'
        );
        messageboxcollapse++;
    }

    // remove chat list
    var newChatList = document.getElementById("chat-list-" + messageIds);
    newChatList.querySelectorAll(".delete-item").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            itemList.removeChild(newChatList);
        });
    });

    //Copy Clipboard alert
    newChatList.querySelectorAll(".copy-message").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            document.getElementById("copyClipBoard").style.display = "block";
            document.getElementById("copyClipBoardChannel").style.display = "block";
            setTimeout(hideclipboardNew, 1000);

            function hideclipboardNew() {
                document.getElementById("copyClipBoard").style.display = "none";
                document.getElementById("copyClipBoardChannel").style.display = "none";
            }
        });
    });

    newChatList.querySelectorAll(".reply-message").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            var replyMessage = subitem.closest(".ctext-wrap").children[0].children[0].innerText;
            var replyuser = document.querySelector(".user-chat-topbar .text-truncate .username").innerHTML;
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText = replyMessage;
            var msgOwnerName = (subitem.closest(".chat-list")) ? subitem.closest(".chat-list").classList.contains("left") ? replyuser : 'You' : replyuser;
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerText = msgOwnerName;
        });
    });

    //Copy Message
    newChatList.querySelectorAll(".copy-message").forEach(function (subitem) {
        subitem.addEventListener("click", function () {
            newChatList.childNodes[1].children[1].firstElementChild.firstElementChild.getAttribute("id");
            isText = newChatList.childNodes[1].children[1].firstElementChild.firstElementChild.innerText;
            navigator.clipboard.writeText(isText);
        });
    });
};


var emojiPicker = new FgEmojiPicker({
    trigger: [".emoji-btn"],
    removeOnSelection: false,
    closeButton: true,
    position: ["top", "right"],
    preFetch: true,
    dir: "assets/js/pages/plugins/json",
    insertInto: document.querySelector(".chat-input"),
});

// emojiPicker position
var emojiBtn = document.getElementById("emoji-btn");
emojiBtn.addEventListener("click", function () {
    setTimeout(function () {
        var fgEmojiPicker = document.getElementsByClassName("fg-emoji-picker")[0];
        if (fgEmojiPicker) {
            var leftEmoji = window.getComputedStyle(fgEmojiPicker) ? window.getComputedStyle(fgEmojiPicker).getPropertyValue("left") : "";
            if (leftEmoji) {
                leftEmoji = leftEmoji.replace("px", "");
                leftEmoji = leftEmoji - 40 + "px";
                fgEmojiPicker.style.left = leftEmoji;
            }
        }
    }, 0);
});

//Search Message
function searchMessages() {
    var searchInput, searchFilter, searchUL, searchLI, a, i, txtValue;
    searchInput = document.getElementById("searchMessage");
    searchFilter = searchInput.value.toUpperCase();
    searchUL = document.getElementById("users-conversation");
    searchLI = searchUL.getElementsByTagName("li");
    for (i = 0; i < searchLI.length; i++) {
        a = searchLI[i].getElementsByTagName("p")[0] ? searchLI[i].getElementsByTagName("p")[0] : '';
        txtValue = a.textContent || a.innerText ? a.textContent || a.innerText : '';
        if (txtValue.toUpperCase().indexOf(searchFilter) > -1) {
            searchLI[i].style.display = "";
        } else {
            searchLI[i].style.display = "none";
        }
    }
};
