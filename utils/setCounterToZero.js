/**
 *
 * @param {number} totalItems - total items
 * @param {HTMLElement} notificationCountElement - notification count element
 */
export const setCounterToZero = (totalItems, notificationCountElement) => {
    const counter = 0;
    notificationCountElement.textContent = counter.toString();
    return counter;
};