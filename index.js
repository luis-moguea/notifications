import {data} from './data.js';

// Components
import { bulletComponent } from "./components/bullet.js";
import { actionResultComponent } from "./components/actionResult.js";
import { actionTextComponent } from "./components/actionText.js";
import { messagePreviewComponent } from "./components/messagePreview.js";
import { commentedPostImageComponent } from "./components/commentedPostImage.js";
import { createdAtComponent } from "./components/createdAt.js";
import { profilePictureComponent } from "./components/profilePicture.js";

// Utils for the notification item
import { decreaseCounter } from "./utils/decreaseCounter.js";
import { setCounterToZero } from "./utils/setCounterToZero.js";

// Container to inject items
const container = document.querySelector("#container");
// Counter handler
let totalItems = data.items.length;

// Header
document.querySelector("#title").innerHTML = data.header.notification;
document.querySelector(".notification__count").innerHTML = totalItems;
document.querySelector(".mark").innerHTML = data.header.markRead;

// Items
data.items.map(el => {
    container.innerHTML += /*html*/`
    <div class="item">
        <div class="item__content active">
           ${profilePictureComponent(el)}
            <div class="item__content__img-text">
                <div class="item__text">
                    <div class="item__text__content">  
                        <p class="item__text--data"> <span class="item__text--hover">${el.name}</span> ${actionTextComponent(el)}  
                            ${el.actionResult ? `${actionResultComponent(el)}` : ""}
                           ${bulletComponent(el)}
                        </p>
                    </div>
                    ${createdAtComponent(el)}
                    ${el.messagePreview ? `
                       ${messagePreviewComponent(el)}
                    ` : ""}
                </div>
            </div>
            ${el.commentedPostImage ? `${commentedPostImageComponent(el)}` : ""}
        </div>
    </div>`;
})

const itemsLoadedList = document.querySelectorAll(".item")
const markElement = document.querySelector(".mark")
const notificationCountElement = document.querySelector(".notification__count")




/**
 * Renders the notification item as read
 * @param {HTMLElement} el - item
 */
const itemObjectHTML = (el) => {
    el.querySelector(".item__content").classList.remove("active")
    el.querySelector(".item__content").classList.add("inactive")
    el.querySelector(".bullet").classList.add("seen")
    el.querySelector(".bullet").classList.remove("unseen")
    el.querySelector(".item__message--text")?.classList.add("active-text")
}

// Click listener
itemsLoadedList.forEach(el => {
    el.addEventListener("click", () => {
        if (el.querySelector(".item__content").classList.contains("active")) {
            // Setting totalItems with new value
            totalItems = decreaseCounter(totalItems, notificationCountElement)
        }
        // Change the item to inactive
        itemObjectHTML(el)
    })
})

// Click listener
markElement.addEventListener("click", () => {
    totalItems = setCounterToZero(totalItems, notificationCountElement)
    // Changing all items to inactive after user clicks on "Mark all as read"
    itemsLoadedList.forEach(item => {
        itemObjectHTML(item)
    })
});