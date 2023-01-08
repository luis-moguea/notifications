export const profilePictureComponent = (el) => {
    return `<div>
                <img class="item__image" src="${el.profilePicture}" alt="${el.name}">
            </div>`;
}