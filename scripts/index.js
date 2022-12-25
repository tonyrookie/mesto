import { cardTitle, cardImageLink , formCreateCard, profileAddCardButton, popupAddCard, 
    formEditProfileInfo, profileName, profileJob,  
    popupEditProfileFormName, popupEditProfileFormJob, profileInfoEditButton, popupEditProfile, cardList, popupImageTitle, popupImage, popupTypeShowImage } from './elements.js';
import { cards, validationSettings, forms } from './const.js'
import { openPopup, closePopup } from './popup.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

cards.forEach((item) => {
    const card = new Card(item, '.template', handleCardClick);
    const createdCard = card._createCard();
    addCardToHtml(createdCard);
});

function handleCardClick(title, link) {
    popupImage.src = link;
    popupImage.alt = title;
    popupImageTitle.textContent = title;
    openPopup(popupTypeShowImage);
} 

function addCardToHtml(card) {
    cardList.prepend(card);
}

forms.forEach((form) => {
    const formValidator = new FormValidator(validationSettings, form);
    formValidator.enableValidation();
});

formCreateCard.addEventListener('submit', (formCreateCard) => {
    formCreateCard.preventDefault();
        const cardData = {title: cardTitle.value, link: cardImageLink.value};
        const card = new Card(cardData, '.template', handleCardClick);
        const createdCard = card._createCard();
        addCardToHtml(createdCard);
        formCreateCard.target.reset();
        closePopup(popupAddCard);
});

profileAddCardButton.addEventListener('click', () => {
    openPopup(popupAddCard);
    const formValidator = new FormValidator(validationSettings, formCreateCard);
    formValidator.disableSubmitButton();
});

formEditProfileInfo.addEventListener('submit', (formEditProfileInfo) => {
    formEditProfileInfo.preventDefault();
        popupEditProfileFormName.textContent = profileName.value;
        popupEditProfileFormJob.textContent = profileJob.value;
        closePopup(popupEditProfile);
});

profileInfoEditButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    profileName.value = popupEditProfileFormName.textContent;
    profileJob.value = popupEditProfileFormJob.textContent;
    const formValidator = new FormValidator(validationSettings, formEditProfileInfo);
    formValidator.disableSubmitButton();
});

