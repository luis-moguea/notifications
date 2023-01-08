export const messagePreviewComponent = (el) => {
    return `
        <div class="item__message">
            <p class="item__message--text">${el.messagePreview}</p>
        </div>`;
};