const profileName = document.querySelector('.popup__input_type_profile-name');
const profileJob = document.querySelector('.popup__input_type_profile-job');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupEditProfileFormName = document.querySelector('.profile__name');
const popupEditProfileFormJob = document.querySelector('.profile__job');
const popupForms = document.querySelectorAll('.popup__form');
const profileInfoEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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

const cardList = document.querySelector('.cards');
const templateCard = document.querySelector('.template');
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
    const popupShowImage = document.querySelector('.popup_type_show-image');
    const popupImage = document.querySelector('.popup__image');
    const popupImageTitle = document.querySelector('.popup__image-title');
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
    const addCard = createCard(card)
    cardList.prepend(addCard);
}

cards.forEach(addCardToHtml);

const profileAddCardButton = document.querySelector('.profile__add-card-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const cardTitle = document.querySelector('.popup__input_type_title');
const cardImageLink = document.querySelector('.popup__input_type_link');

profileAddCardButton.addEventListener('click', () => {openPopup(popupAddCard)});

function submitForm(popupForm) {
    popupForm.preventDefault();
    const popupTypeEditProfile = popupForm.target.closest('.popup__form_type_edit-profile');
    const popupTypeCreateCard = popupForm.target.closest('.popup__form_type_add-card');
    if (popupTypeEditProfile) {
        popupEditProfileFormName.textContent = profileName.value;
        popupEditProfileFormJob.textContent = profileJob.value;
    }
    if (popupTypeCreateCard) {
        const card = {name: cardTitle.value, link: cardImageLink.value};
        addCardToHtml(card);
        popupForm.target.reset();
    }
    hideClosestPopup(popupForm);
};

popupForms.forEach ((popupForm) => popupForm.addEventListener('submit', submitForm));