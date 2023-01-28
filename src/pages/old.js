
import { 
    formCreateCard,
    formEditProfileInfo,
    formChangeProfileAvatar, 
    profileAddCardButton, 
    profileEditButton,  
    forms, 
    inputProfileName,
    inputProfileJob,
    inputProfileAvatarLink,
    userNameSelector,
    userJobSelector,
    userAvatarSelector,
} from '../../src/utils/elements.js'
import { defaultCards, validationSettings } from '../../src/utils/const.js'
import Card from '../../src/components/Card.js';
import FormValidator from '../../src/components/FormValidator.js';
import Section from '../../src/components/Section.js';
import PopupWithImage from '../../src/components/PopupWithImage.js';
import PopupWithForm from '../../src/components/PopupWithForm.js';
import UserInfo from '../../src/components/UserInfo.js';
import '../../src/pages/index.css';
import Api from '../../src/components/Api.js';

//validation
const validators = {};
forms.forEach((form) => {
    const formValidator = new FormValidator(validationSettings, form);
    formValidator.enableValidation();
    validators[form.name] = new FormValidator(validationSettings, form)
});

//request from the server
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
    headers: {
        authorization: '44c72f53-2df0-43de-8667-2616f7533408',
        'Content-Type': 'application/json'
    }
});
api.getInitialCards()
    .then((cards) => {
        renderCards(cards);
    });
api.getUserInfo()
    .then((me) => {
        document.querySelector('.profile__name').textContent = me.name;
        document.querySelector('.profile__job').textContent = me.about;
        document.querySelector('.profile__avatar').src = me.avatar;
    });

//edit profile info
const editProfileSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: (data) => {
        api.setUserInfo(data);
        api.getUserInfo()
            .then((me) => {
                document.querySelector('.profile__name').textContent = me.name;
                document.querySelector('.profile__job').textContent = me.about;
                document.querySelector('.profile__avatar').src = me.avatar;
            });
    }    
});
editProfileSubmitForm.setEventListeners();
profileEditButton.addEventListener('click', () => {
    editProfileSubmitForm.open();
    api.getUserInfo()
        .then((me) => {
            inputProfileName.value = me.name;
            inputProfileJob.value = me.about;
        })
    validators[formEditProfileInfo.name].disableSubmitButton();
});

//edit profile avatar
document.querySelector('.profile__avatar').addEventListener('click', () => {
    changeAvatarSubmitForm.open();
    const userData = userInfo.getUserInfo();
    inputProfileAvatarLink.value = userData.avatar;
    validators[formChangeProfileAvatar.name].disableSubmitButton();
});
changeAvatarSubmitForm.setEventListeners();


//add a new card
const popupImage = new PopupWithImage('.popup_type_show-image');
function createCard(data, templateSelector) {
    const card = (new Card(data, templateSelector, handleCardClick)).getView();
    return card;
;}
function renderCards(cardsData) {
    const section = new Section({
        items: cardsData,
        renderer: (item) => {
            section.addItem(createCard(item, '.template'));
        },
    }, '.cards');
    section.renderItems();
};
const addCardSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_add-card', 
    handleFormSubmit: (data) => {
        api.postCard({name: data.name, link: data.link});
        api.getInitialCards()
            .then((cards) => {
                renderCards(cards);
            });
    }
});
addCardSubmitForm.setEventListeners();
document.querySelector('.profile__add-card-button').addEventListener('click', () => {
    addCardSubmitForm.open();
    validators[formCreateCard.name].disableSubmitButton();
});















popupImage.setEventListeners();

function handleCardClick(title, link) {
    popupImage.open(title, link);
};









//const userInfo = new UserInfo({userNameSelector, userJobSelector, userAvatarSelector});

// const editProfileSubmitForm = new PopupWithForm({
//     popupSelector: '.popup_type_edit-profile',
//     handleFormSubmit: (data) => {
//         userInfo.setUserInfo(data);
//     }    
// });

// editProfileSubmitForm.setEventListeners();

// profileEditButton.addEventListener('click', () => {
//     editProfileSubmitForm.open();
//     const userData = userInfo.getUserInfo();
//     inputProfileName.value = userData.name;
//     inputProfileJob.value = userData.job;
//     validators[formEditProfileInfo.name].disableSubmitButton();
// });

// const changeAvatarSubmitForm = new PopupWithForm({
//     popupSelector: '.popup_type_change-avatar',
//     handleFormSubmit: (data) => {
//         userInfo.setUserInfo(data);
//     }    
// });

// changeAvatarSubmitForm.setEventListeners();

