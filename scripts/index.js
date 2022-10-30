const profileName = document.querySelector('.popup__input_type_profile-name');
const profileJob = document.querySelector('.popup__input_type_profile-job');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupEditProfileFormName = document.querySelector('.profile__name');
const popupEditProfileFormJob = document.querySelector('.profile__job');
const profileInfoEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const formCreateCard = document.forms.createCard;
const formEditProfileInfo = document.forms.profileInfo;
const cardList = document.querySelector('.cards');
const templateCard = document.querySelector('.template');
const profileAddCardButton = document.querySelector('.profile__add-card-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const cardTitle = document.querySelector('.popup__input_type_title');
const cardImageLink = document.querySelector('.popup__input_type_link');
const popupShowImage = document.querySelector('.popup_type_show-image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscPress);
    document.addEventListener('click', closePopupOverlayClick);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscPress);
    document.removeEventListener('click', closePopupOverlayClick);
}

function hideClosestPopup(evt) {
    const popup = evt.target.closest(".popup");
    if (popup) {closePopup(popup)};
}

profileInfoEditButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    profileName.value = popupEditProfileFormName.textContent;
    profileJob.value = popupEditProfileFormJob.textContent;
});

popupCloseButtons.forEach ((popupCloseButton) => popupCloseButton.addEventListener('click', hideClosestPopup));

const cards = [
    {
        name: 'Батискаф Кусто',
        link: './images/batiskaf-kusto.jpg'
    },
    {
        name: 'Кусто с командой',
        link: './images/komanda-kusto.jpg'
    },
    {
        name: 'Изобретение Кусто и Ганьян',
        link: './images/akvalang2.jpg'
    },
    {
        name: 'На работе',
        link: './images/kusto.jpg'
    },
    {
        name: 'Подводный дом',
        link: './images/underwater-house.jpg'
    },
    {
        name: 'Дениза',
        link: './images/uboat.jpg'
    }
];

function createCard(card) {
    const newCard = templateCard.content.cloneNode(true);
    const cardImage = newCard.querySelector('.cards__image');
    const likeButton = newCard.querySelector('.cards__like-button');
    const cardTitle = newCard.querySelector('.cards__title');
    const cardDelButton = newCard.querySelector('.cards__del-button');
    cardImage.src = card.link;
    cardTitle.textContent = card.name;
    cardImage.alt = card.name;
    likeButton.addEventListener('click', () => {likeButton.classList.toggle('cards__like-button_active')});
    cardDelButton.addEventListener('click', () => {cardDelButton.closest('.cards__container').remove()});
    cardImage.addEventListener('click', () => {
        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardTitle.textContent;
        popupImage.alt = cardTitle.textContent;
        openPopup(popupShowImage);
    });
    return newCard;
}

function addCardToHtml(card) {
    const addCard = createCard(card);
    cardList.prepend(addCard);
}

cards.forEach(addCardToHtml);

profileAddCardButton.addEventListener('click', () => {openPopup(popupAddCard)});

formEditProfileInfo.addEventListener('submit', (formEditProfileInfo) => {
    formEditProfileInfo.preventDefault();
        popupEditProfileFormName.textContent = profileName.value;
        popupEditProfileFormJob.textContent = profileJob.value;
        hideClosestPopup(formEditProfileInfo);
})

formCreateCard.addEventListener('submit', (formCreateCard) => {
    formCreateCard.preventDefault();
        const card = {name: cardTitle.value, link: cardImageLink.value};
        addCardToHtml(card);
        formCreateCard.target.reset();
        hideClosestPopup(formCreateCard);
})

function closePopupEscPress(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

function closePopupOverlayClick(evt) {
    const popup = document.querySelector('.popup_opened');
    if(evt.target == popup) {
        closePopup(popup)
    }
}