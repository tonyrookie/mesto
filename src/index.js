import { 
    formCreateCard, 
    profileAddCardButton, 
    popupAddCard, 
    profileName, 
    profileJob,  
    profileEditButton, 
    popupEditProfile, 
    cardList,
    cardsTemplateSelector, 
    popupWithImage, 
    forms, 
    inputProfileName,
    inputProfileJob,
} from './utils/elements.js'
import { defaultCards, validationSettings } from './utils/const.js'
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

function renderCard(cardsData) {
    const section = new Section({
        items: cardsData,
        renderer: (card) => {
            section.addItem((new Card(card, cardsTemplateSelector, handleCardClick)).getView());
        }
    }, 
    cardList);
    section.renderItems();
}

renderCard(defaultCards);

function handleCardClick(title, link) {
    const popupImage = new PopupWithImage(title, link, popupWithImage);
    popupImage.open();
    popupImage.setEventListeners();
};

const validators = {};

forms.forEach((form) => {
    const formValidator = new FormValidator(validationSettings, form);
    formValidator.enableValidation();
    validators[form.name] = new FormValidator(validationSettings, form)
});

const addCardSubmitForm = new PopupWithForm({
    popupType: popupAddCard, 
    handleFormSubmit: (data) => {
        renderCard([{title: data.title, link: data.link}]);
    }
    
});

addCardSubmitForm.setEventListeners();

profileAddCardButton.addEventListener('click', () => {
    addCardSubmitForm.open();
    validators[formCreateCard.name].disableSubmitButton();
});

const userInfo = new UserInfo(profileName, profileJob);

const editProfileSubmitForm = new PopupWithForm({
    popupType: popupEditProfile,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }    
});

editProfileSubmitForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
    editProfileSubmitForm.open();
    userInfo.getUserInfo(inputProfileName, inputProfileJob);
    validators[formCreateCard.name].disableSubmitButton();
});