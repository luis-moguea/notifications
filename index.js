import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#container");
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
            <div>
                <img class="item__image" src="${el.profilePicture}" alt="${el.name}">
            </div>
            <div class="item__content__img-text">
                <div class="item__text">
                    <div class="item__text__content">  
                        <p class="item__text--data"> <span class="item__text--hover">${el.name}</span> <span class="item__text--gray">${el.actionText}</span> 
                            ${el.actionResult ? `
                                <span class="item__text--hover">${el.actionResult}</span>
                                ` : ""}
                            <span class="bullet unseen">&bull;</span>
                        </p>
                    </div> 
                    <div class="item__text--time">
                        <p>${el.createdAt}</p>
                    </div>
                    ${el.messagePreview ? `
                        <div class="item__message">
                            <p class="item__message--text">${el.messagePreview}</p>
                        </div>
                    ` : ""}
                </div>
            </div>
            ${el.commentedPostImage ? `<div class="item__image">
            <img class="item__image--comment" src="${el.commentedPostImage}" alt="random">
        </div>` : ""}
        </div>
    </div>`;
})

const itemsLoadedList = document.querySelectorAll(".item")
const markElement = document.querySelector(".mark")
const notificationCountElement = document.querySelector(".notification__count")

const decreaseCounter = () => {
    totalItems--
    if (totalItems < 0) return 0;
    return notificationCountElement.textContent = totalItems
}

const setCounterToZero = () => {
    totalItems = 0
    return notificationCountElement.textContent = totalItems
}

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
            decreaseCounter()
        }
        itemObjectHTML(el)
    })
})

// Click listener
markElement.addEventListener("click", () => {
    setCounterToZero()
    itemsLoadedList.forEach(item => {
        itemObjectHTML(item)
    })
});