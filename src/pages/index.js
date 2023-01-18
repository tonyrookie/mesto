import { 
    formCreateCard,
    formEditProfileInfo, 
    profileAddCardButton, 
    profileEditButton,  
    forms, 
    inputProfileName,
    inputProfileJob,
    userNameSelector,
    userJobSelector,
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
    const card = (new Card(data, templateSelector, handleCardClick)).getView();
    return card;
}
function renderCards(cardsData) {
    const section = new Section({
        items: cardsData,
        renderer: (item) => {
            section.addItem(createCard(item, '.template'));
        },
    }, '.cards');
    section.renderItems();
}

renderCards(defaultCards);

const popupImage = new PopupWithImage('.popup_type_show-image');

popupImage.setEventListeners();

function handleCardClick(title, link) {
    popupImage.open(title, link);
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

const userInfo = new UserInfo({userNameSelector, userJobSelector});

const editProfileSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }    
});

editProfileSubmitForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
    editProfileSubmitForm.open();
    const userData = userInfo.getUserInfo();
    inputProfileName.value = userData.name;
    inputProfileJob.value = userData.job;
    validators[formEditProfileInfo.name].disableSubmitButton();
});