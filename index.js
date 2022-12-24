import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#container")

data.map(el => {
    let element;
    if(el.type === "header"){
        element = /*html*/`
        <div class="hero">
            <div class="notification">
                <h2>${el.notification} </h2>
                <p class="notification__count">0</p>
            </div>
            <div>
                <p class="mark">${el.markRead}</p>
            </div>
        </div>`
    } else if (el.type === "reaction"){
        element = /*html*/`
        <div class="main-js">
            <div class="main-js__content active">
                <div>
                    <img class="main-js__image" src="${el.profilePicture}" alt="ramdom">
                </div>
                <div class="main-js__content__img-text">
                    <div class="main-js__text">
                        <div class="main-js__text__content">  
                            <p class="main-js__text--data"> <span class="main-js__text--hover">${el.name}</span> <span class="main-js__text--gray">${el.actionText}</span> <span class="main-js__text--hover">${el.actionResult} <span class="unseen">&bull;</span></span></p>
                        </div> 
                        <div class="main-js__text--time">
                            <p>${el.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    } else if (el.type === "follow"){
        element = /*html*/`
        <div class="main-js">
            <div class="main-js__content active">
                <div>
                    <img class="main-js__image" src="${el.profilePicture}" alt="ramdom">
                </div>
                <div class="main-js__content__img-text">
                    <div class="main-js__text">
                        <div class="main-js__text__content">  
                            <p class="main-js__text--data"> <span class="main-js__text--hover">${el.name}</span> <span class="main-js__text--gray">${el.actionText} <span class="unseen">&bull;</span></span></p>
                        </div> 
                        <div class="main-js__text--time">
                            <p>${el.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    } else if (el.type === "joined-group"){
        element = /*html*/`
        <div class="main-js">
            <div class="main-js__content active">
                <div>
                    <img class="main-js__image" src="${el.profilePicture}" alt="ramdom">
                </div>
                <div class="main-js__content__img-text">
                    <div class="main-js__text">
                        <div class="main-js__text__content">  
                            <p class="main-js__text--data"> <span class="main-js__text--hover">${el.name}</span> <span class="main-js__text--gray">${el.actionText}</span> <span class="main-js__text--hover">${el.actionResult} <span class="unseen">&bull;</span></span></p>
                        </div> 
                        <div class="main-js__text--time">
                            <p>${el.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    } else if (el.type === "dm"){
        element = /*html*/`
         <div class="main-js">
            <div class="main-js__content active">
                <div>
                    <img class="main-js__image" src="${el.profilePicture}" alt="ramdom">
                </div>
                <div class="main-js__content__img-text">
                    <div class="main-js__text">
                        <div class="main-js__text__content">  
                            <p class="main-js__text--data"> <span class="main-js__text--hover">${el.name}</span> <span class="main-js__text--gray">${el.actionText} <span class="unseen">&bull;</span></span></p>
                        </div> 
                        <div class="main-js__text--time">
                            <p>${el.createdAt}</p>
                        </div>
                        <div class="main-js__message">
                            <p class="main-js__message--text">${el.messagePreview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    } else if (el.type === "comment"){
        element = /*html*/`
         <div class="main-js">
            <div class="main-js__content active">
                <div>
                    <img class="main-js__image" src="${el.profilePicture}" alt="ramdom">
                </div>
                <div class="main-js__content__img-text">
                    <div class="main-js__text">
                        <div class="main-js__text__content">  
                            <p class="main-js__text--data"> <span class="main-js__text--hover">${el.name}</span> <span class="main-js__text--gray">${el.actionText} <span class="unseen">&bull;</span></span></p>
                        </div> 
                        <div class="main-js__text--time">
                            <p>${el.createdAt}</p>
                        </div>
                    </div>
                </div>
                <div class="main-js__image">
                    <img class="main-js__image--comment" src="${el.commentedPostImage}" alt="ramdom">
                </div>
            </div>
        </div>`
    } else if (el.type === "leaving-group"){
        element = /*html*/`
        <div class="main-js">
            <div class="main-js__content active">
                <div>
                    <img class="main-js__image" src="${el.profilePicture}" alt="ramdom">
                </div>
                <div class="main-js__content__img-text">
                    <div class="main-js__text">
                        <div class="main-js__text__content">  
                            <p class="main-js__text--data"> <span class="main-js__text--hover">${el.name}</span> <span class="main-js__text--gray">${el.actionText}</span> <span class="main-js__text--hover">${el.actionResult} <span class="unseen">&bull;</span></span></p>
                        </div> 
                        <div class="main-js__text--time">
                            <p>${el.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    
container.innerHTML += element

})

const onClick = document.querySelectorAll(".main-js")
const mark = document.querySelector(".mark")
const notiCount = document.querySelector(".notification__count")

let accountant = onClick.length;

const count = () => {
    accountant--
    if(accountant < 0){
        return 0
    } else return notiCount.textContent = accountant
}

const countAll = () => {
    accountant = 0
    return notiCount.textContent = accountant
}


onClick.forEach(el => {
    el.addEventListener("click", () => {
        el.querySelector(".main-js__content").classList.add("inactive")
        el.querySelector(".unseen").classList.add("seen")
        el.querySelector(".main-js__message--text").classList.add("active-text")
    })

    mark.addEventListener("click", () => {
        el.querySelector(".main-js__content").classList.add("inactive")
        el.querySelector(".unseen").classList.add("seen")
        el.querySelector(".main-js__message--text").classList.add("active-text")
    })
    
    el.addEventListener("click", count)
    mark.addEventListener("click", countAll)

    notiCount.textContent = accountant

})