/**
 *
 * @param {number} totalItems - total items
 * @param {HTMLElement} notificationCountElement - notification count element
 */
export const decreaseCounter = (totalItems, notificationCountElement) => {
    let counter = totalItems
    if (counter <= 0) {
        counter = 0
    } else {
        counter--
    }
    notificationCountElement.textContent = counter.toString()
    return counter
}