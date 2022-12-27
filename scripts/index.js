import {
    cardTitle, cardImageLink , formCreateCard, profileAddCardButton, popupAddCard, 
    formEditProfileInfo, profileName, profileJob,  
    popupEditProfileFormName, popupEditProfileFormJob, profileInfoEditButton, popupEditProfile, cardList, popupImageTitle, popupImage, popupTypeShowImage, forms 
} from './elements.js';
import { cards, validationSettings } from './const.js'
import { openPopup, closePopup } from './popup.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

function createCard(data) {
    const card = new Card(data, '.template', handleCardClick);
    return card.getView();
};

function renderCard(data, wrap) {
    wrap.prepend(createCard(data));
};

cards.forEach((data) => {
    renderCard(data, cardList)
});

function handleCardClick(title, link) {
    popupImage.src = link;
    popupImage.alt = title;
    popupImageTitle.textContent = title;
    openPopup(popupTypeShowImage);
};

const validators = {}

forms.forEach((form) => {
    const formValidator = new FormValidator(validationSettings, form);
    formValidator.enableValidation();
    validators[form.name] = new FormValidator(validationSettings, form)
});

formCreateCard.addEventListener('submit', (formCreateCard) => {
    formCreateCard.preventDefault();
    const cardData = {title: cardTitle.value, link: cardImageLink.value};
    renderCard(cardData, cardList)
    formCreateCard.target.reset();
    closePopup(popupAddCard);
});

formEditProfileInfo.addEventListener('submit', (formEditProfileInfo) => {
    formEditProfileInfo.preventDefault();
        popupEditProfileFormName.textContent = profileName.value;
        popupEditProfileFormJob.textContent = profileJob.value;
        closePopup(popupEditProfile);
});

profileAddCardButton.addEventListener('click', () => {
    openPopup(popupAddCard);
    validators[formCreateCard.name].disableSubmitButton();
});

profileInfoEditButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    profileName.value = popupEditProfileFormName.textContent;
    profileJob.value = popupEditProfileFormJob.textContent;
    validators[formCreateCard.name].disableSubmitButton();
});