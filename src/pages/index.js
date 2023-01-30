// import
import { 
    formCreateCard,
    formEditProfileInfo, 
    formChangeProfileAvatar,
    profileAddCardButton, 
    profileEditButton,   
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
        section.renderItemsAppend(cards);
    })
    .catch((err) => {
        console.log(err);
    }); 

//validation

const formCreateCardValidation = new FormValidator(validationSettings, formCreateCard);
formCreateCardValidation.enableValidation();

const formEditProfileInfoValidation = new FormValidator(validationSettings, formEditProfileInfo);
formEditProfileInfoValidation.enableValidation();

const formChangeProfileAvatarValidation = new FormValidator(validationSettings, formChangeProfileAvatar);
formChangeProfileAvatarValidation.enableValidation();

//set user info
//name and about

const userInfo = new UserInfo({
    userNameSelector: '.profile__name', 
    userAboutSelector: '.profile__job', 
    userAvatarSelector: '.profile__avatar',
});

const popupWithFormEditProfile = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile', 
    handleFormSubmit: handleFormEditProfileSubmit,
});

popupWithFormEditProfile.setEventListeners();

function handleFormEditProfileSubmit(data) {
    popupWithFormEditProfile.setSubmitButtonText(true);
    api.patchUserInfo(data)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupWithFormEditProfile.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(popupWithFormEditProfile.setSubmitButtonText(false));
};

profileEditButton.addEventListener('click', () => {
    popupWithFormEditProfile.open();
    const userData = userInfo.getUserInfo();
    inputProfileName.value = userData.name;
    inputProfileAbout.value = userData.about;
});

//set user info
//avatar

const popupWithFormChangeAvatar = new PopupWithForm({
    popupSelector: '.popup_type_change-avatar',
    handleFormSubmit: handleFormChangeAvatarSubmit,
});

popupWithFormChangeAvatar.setEventListeners();

function handleFormChangeAvatarSubmit(avatar) {
    popupWithFormChangeAvatar.setSubmitButtonText(true);
    api.patchUserAvatar(avatar)
        .then(({avatar}) => {
            userInfo.setUserAvatar(avatar);
            popupWithFormChangeAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(popupWithFormChangeAvatar.setSubmitButtonText(false));
};

userAvatar.addEventListener('click', () => {
    popupWithFormChangeAvatar.open();
});

//add and render a new card

const popupWithFormAddCard = new PopupWithForm({
    popupSelector: '.popup_type_add-card',
    handleFormSubmit: handleFormAddCardSubmit,
});

popupWithFormAddCard.setEventListeners();

function handleFormAddCardSubmit(data) {
    popupWithFormAddCard.setSubmitButtonText(true);
    api.postCard({name: data.name, link: data.link})
        .then((data) => {
            section.renderItemsPrepend([data]);
            popupWithFormAddCard.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(popupWithFormAddCard.setSubmitButtonText(false));
};

profileAddCardButton.addEventListener('click', () => {
    popupWithFormAddCard.open();
});

//popup with image
const popupImage = new PopupWithImage('.popup_type_show-image');

popupImage.setEventListeners();

function handleCardClick(name, link) {
    popupImage.open(name, link);
};

//create cards

const section = new Section(createCard, '.cards');

function createCard(data) {
    const card = new Card(data, '.template', handleCardClick, handleCardLike, handleCardDel, userInfo.getUserId())
    const newCard = card.getView();
    return newCard;
};

//like and delete cards
// like card

function handleCardLike(card) {
    if (card.likeStatus) {
        api.unlikeCard(card.cardId)
            .then((res) => {
                card.unlikeCard(res.likes.length);
                //card.likeStatus = true;
            })
            .catch((err) => {
                console.log(err);
            })
    } else {
        api.likeCard(card.cardId)
            .then((res) => {
                card.likeCard(res.likes.length);
                //card.likeStatus = false;
            })
            .catch((err) => {
                console.log(err);
            })
    }
};

//like and delete cards
//Delcard

const popupWithConfirm = new PopupWithConfirm('.popup_type_confirm-del', handleFormDelCardSubmit);

popupWithConfirm.setEventListeners();

function handleFormDelCardSubmit(card) {
    popupWithConfirm.setSubmitButtonText(true);
    api.delCard(card.cardId)
        .then(
            card.delCard(),
            popupWithConfirm.close()
        )
        .catch((err) => {
            console.log(err);
        })
        .finally(popupWithConfirm.setSubmitButtonText(false));
};

function handleCardDel(card) {
    popupWithConfirm.open(card);
};