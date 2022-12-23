export const profileName = document.querySelector('.popup__input_type_profile-name');
export const profileJob = document.querySelector('.popup__input_type_profile-job');
export const popupEditProfileFormName = document.querySelector('.profile__name');
export const popupEditProfileFormJob = document.querySelector('.profile__job');
export const profileInfoEditButton = document.querySelector('.profile__edit-button');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const formCreateCard = document.forms.createCard;
export const formEditProfileInfo = document.forms.profileInfo;
export const cardList = document.querySelector('.cards');
export const profileAddCardButton = document.querySelector('.profile__add-card-button');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const cardTitle = document.querySelector('.popup__input_type_title');
export const cardImageLink = document.querySelector('.popup__input_type_link');
export const popupTypeShowImage = document.querySelector('.popup_type_show-image');
export const popupImage = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__image-title');
export const popups = document.querySelectorAll('.popup');
export const cards = [
    {
        title: 'Батискаф Кусто',
        link: './images/batiskaf-kusto.jpg'
    },
    {
        title: 'Кусто с командой',
        link: './images/komanda-kusto.jpg'
    },
    {
        title: 'Изобретение Кусто и Ганьян',
        link: './images/akvalang2.jpg'
    },
    {
        title: 'На работе',
        link: './images/kusto.jpg'
    },
    {
        title: 'Подводный дом',
        link: './images/underwater-house.jpg'
    },
    {
        title: 'Дениза',
        link: './images/uboat.jpg'
    }
];
export const formSelectors = document.querySelectorAll('.popup__form')
export const validationSettings = {
    //formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}