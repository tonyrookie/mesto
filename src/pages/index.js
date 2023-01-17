import { 
    formCreateCard,
    formEditProfileInfo, 
    profileAddCardButton, 
    profileEditButton,  
    forms, 
    inputProfileName,
    inputProfileJob,
} from '../../src/utils/elements.js'
import { defaultCards, validationSettings } from '../../src/utils/const.js'
import Card from '../../src/components/Card.js';
import FormValidator from '../../src/components/FormValidator.js';
import Section from '../../src/components/Section.js';
import PopupWithImage from '../../src/components/PopupWithImage.js';
import PopupWithForm from '../../src/components/PopupWithForm.js';
import UserInfo from '../../src/components/UserInfo.js';
import '../../src/pages/index.css'

function createCard(data, templateSelector) {
    const card = new Card(data, templateSelector, handleCardClick);
    return card;
}
function renderCards(cardsData) {
    const section = new Section({
        items: cardsData,
        renderer: (item) => {
            const card = createCard(item, '.template');
            const cardItem = card.getView();
            section.addItem(cardItem);
        },
    }, '.cards');
    section.renderItems();
}

renderCards(defaultCards);

function handleCardClick(title, link) {
    const popupImage = new PopupWithImage('.popup_type_show-image');
    popupImage.open(title, link);
    popupImage.setEventListeners();
};

const validators = {};

forms.forEach((form) => {
    const formValidator = new FormValidator(validationSettings, form);
    formValidator.enableValidation();
    validators[form.name] = new FormValidator(validationSettings, form)
});

const addCardSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_add-card', 
    handleFormSubmit: (data) => {
        renderCards([{title: data.title, link: data.link}]);
    }
    
});

addCardSubmitForm.setEventListeners();

profileAddCardButton.addEventListener('click', () => {
    addCardSubmitForm.open();
    validators[formCreateCard.name].disableSubmitButton();
});

const userInfo = new UserInfo('.profile__name', '.profile__job');

const editProfileSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }    
});

editProfileSubmitForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
    editProfileSubmitForm.open();
    userInfo.getUserInfo(inputProfileName, inputProfileJob);
    validators[formEditProfileInfo.name].disableSubmitButton();
});