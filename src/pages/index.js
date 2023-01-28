// import
import { 
    formCreateCard,
    formEditProfileInfo, 
    formChangeProfileAvatar,
    formConfirmDel,
    profileAddCardButton, 
    profileEditButton,  
    forms, 
    inputProfileName,
    inputProfileAbout,
    inputProfileAvatarLink,
    userAvatar,
} from '../../src/utils/elements.js'
import { validationSettings } from '../../src/utils/const.js'
import Card from '../../src/components/Card.js';
import FormValidator from '../../src/components/FormValidator.js';
import Section from '../../src/components/Section.js';
import PopupWithImage from '../../src/components/PopupWithImage.js';
import PopupWithForm from '../../src/components/PopupWithForm.js';
import UserInfo from '../../src/components/UserInfo.js';
import '../../src/pages/index.css';
import Api from '../../src/components/Api.js';
import PopupWithConfirm from '../../src/components/PopupWithConfirm.js';


//request from the server 
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
    headers: {
        authorization: '44c72f53-2df0-43de-8667-2616f7533408',
        'Content-Type': 'application/json'
    }
});

const me = api.getUserInfo();
const cards = api.getInitialCards();

Promise.all([me, cards])
    .then(([me, cards]) => {
        userInfo.setUserInfo(me);
        userInfo.setUserAvatar(me.avatar);
        renderCards(cards);
    })
    .catch((err) => {
        console.log(err);
    }); 

//validation
const validators = {};

forms.forEach((form) => {
    const formValidator = new FormValidator(validationSettings, form);
    formValidator.enableValidation();
    validators[form.name] = new FormValidator(validationSettings, form)
});

//set user info
const userInfo = new UserInfo({
    userNameSelector: '.profile__name', 
    userAboutSelector: '.profile__job', 
    userAvatarSelector: '.profile__avatar',
});

const editProfileSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: (data) => {
        validators[formCreateCard.name].setButtonText(true, 'Сохранение...');
        userInfo.setUserInfo(data);
        api.patchUserInfo(data)
            .catch((err) => {
                console.log(err);
            })
            .finally(validators[formCreateCard.name].setButtonText(false));
    }    
});

editProfileSubmitForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
    editProfileSubmitForm.open();
    const userData = userInfo.getUserInfo();
    inputProfileName.value = userData.name;
    inputProfileAbout.value = userData.about;
    validators[formEditProfileInfo.name].setButtonText();
});

const changeAvatarSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_change-avatar',
    handleFormSubmit: ({avatar}) => {
        validators[formCreateCard.name].setButtonText(true, 'Сохранение...');
        userInfo.setUserAvatar(avatar);
        api.patchUserAvatar(avatar)
            .catch((err) => {
                console.log(err);
            })
            .finally(validators[formCreateCard.name].setButtonText(false));
    }    
});

changeAvatarSubmitForm.setEventListeners();

userAvatar.addEventListener('click', () => {
    changeAvatarSubmitForm.open();
    api.getUserInfo()
        .then((me) => {
            inputProfileAvatarLink.value = me.avatar;
        })
        .catch((err) => {
            console.log(err);
        });
    validators[formChangeProfileAvatar.name].disableSubmitButton();
});

//create and render cards

function createCard(data, templateSelector) {
    const card = new Card(data, templateSelector, handleCardClick, handleCardLike, handleCardDel, userInfo.getUserId())
    const newCard = card.getView();
    return newCard;
};

function renderCards(cardsData) {
    const section = new Section({
        items: cardsData,
        renderer: (item) => {
            section.addItem(createCard(item, '.template'));
        },
    }, '.cards');
    section.renderItems();
};

//popup with image
const popupImage = new PopupWithImage('.popup_type_show-image');

popupImage.setEventListeners();

function handleCardClick(name, link) {
    popupImage.open(name, link);
};

function handleCardLike(id, likeStatus) {
    if (likeStatus) {
        api.unlikeCard(id);
    } else {
        api.likeCard(id);
    }
};

function handleSubmitDel(id) {
    validators[formConfirmDel.name].setButtonText(true, 'Удаление...');
    api.delCard(id)
        .catch((err) => {
            console.log(err);
        })
        .finally(
            validators[formConfirmDel.name].setButtonText(false));
}

const popupWithConfirm = new PopupWithConfirm('.popup_type_confirm-del', handleSubmitDel)

function handleCardDel(id) {
    popupWithConfirm.open(id);
    popupWithConfirm.setEventListeners();
};

//add a new card

const addCardSubmitForm = new PopupWithForm({
    popupSelector: '.popup_type_add-card', 
    handleFormSubmit: (data) => {
        validators[formCreateCard.name].setButtonText(true, 'Создание...');
        api.postCard({name: data.name, link: data.link})
            .then((data) => {
                renderCards([data]);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(
                validators[formCreateCard.name].setButtonText(false));
    }
});

addCardSubmitForm.setEventListeners();

profileAddCardButton.addEventListener('click', () => {
    addCardSubmitForm.open();
    validators[formCreateCard.name].disableSubmitButton();
});