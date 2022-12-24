onClick.forEach(el => {
    el.addEventListener("click", () => {
        el.querySelector(".main-js__content").classList.toggle("inactive")
        el.querySelector(".unseen").classList.toggle("seen")
        el.querySelector(".main-js__message--text").classList.toggle("active-text")
    })
})