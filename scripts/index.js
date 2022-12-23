import { cards, cardTitle, cardImageLink , formCreateCard, profileAddCardButton, popupAddCard, 
    formEditProfileInfo, profileName, profileJob,  
    popupEditProfileFormName, popupEditProfileFormJob, profileInfoEditButton, popupEditProfile, validationSettings, formSelectors } from './const.js';
import { openPopup, hideClosestPopup, disablePopupSubmitButton } from './popup.js';
import Card from './Card.js';
import ValidateForm from './ValidateForm.js';

cards.forEach((item) => {
    const card = new Card(item, '.template');
    card.addCardToHtml();
});

formCreateCard.addEventListener('submit', (formCreateCard) => {
    formCreateCard.preventDefault();
        const card = {title: cardTitle.value, link: cardImageLink.value};
        const cardForAdd = new Card(card, '.template');
        cardForAdd.addCardToHtml();
        formCreateCard.target.reset();
        hideClosestPopup(formCreateCard);
});

profileAddCardButton.addEventListener('click', () => {
    openPopup(popupAddCard);
    disablePopupSubmitButton(popupAddCard);
});

formEditProfileInfo.addEventListener('submit', (formEditProfileInfo) => {
    formEditProfileInfo.preventDefault();
        popupEditProfileFormName.textContent = profileName.value;
        popupEditProfileFormJob.textContent = profileJob.value;
        hideClosestPopup(formEditProfileInfo);
});

profileInfoEditButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    profileName.value = popupEditProfileFormName.textContent;
    profileJob.value = popupEditProfileFormJob.textContent;
    disablePopupSubmitButton(popupEditProfile);
});

formSelectors.forEach((formSelector) => {
    const validateForm = new ValidateForm(validationSettings, formSelector);
    validateForm.enableValidation();
});