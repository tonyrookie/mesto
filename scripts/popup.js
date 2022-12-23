import { popups } from './const.js';

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscPress);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscPress);
}

export function hideClosestPopup(evt) {
    const popup = evt.target.closest(".popup");
    if (popup) {closePopup(popup)};
}

function closePopupEscPress(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

export function disablePopupSubmitButton(popup) {
    const button = popup.querySelector('.popup__button');
    button.classList.add('popup__button_disabled');
    button.setAttribute("disabled", "");
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        }
        
    })
})