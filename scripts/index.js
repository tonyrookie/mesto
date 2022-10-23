const profileName = document.querySelector('.popup__input_type_profile-name');
const profileJob = document.querySelector('.popup__input_type_profile-job');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupEditProfileFormName = document.querySelector('.profile__name');
const popupEditProfileFormJob = document.querySelector('.profile__job');
const popupEditProfileFormSubmit = document.forms.profileInfo;
const profileInfoEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

function submitEditProfileForm(evt) {
    evt.preventDefault();
    popupEditProfileFormName.textContent = profileName.value;
    popupEditProfileFormJob.textContent = profileJob.value;
    closePopup(evt)
};

function closePopup(evt) {
    const popup = evt.target.closest('.popup');
    popup.classList.remove('popup_opened');
};

function openPopup(evt) {
    evt.classList.add('popup_opened');
}
profileInfoEditButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    profileName.value = popupEditProfileFormName.textContent;
    profileJob.value = popupEditProfileFormJob.textContent;
    popupEditProfileFormSubmit.addEventListener('submit', submitEditProfileForm)
});

popupCloseButtons.forEach ((popupCloseButton) => popupCloseButton.addEventListener('click', closePopup));

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

function likeCard(evt) {
    const like = evt.target.classList.toggle('cards__like-button_active');
}

function delCard(evt) {
    const del = evt.target.closest('.cards__container');
    del.remove();
    evt.target.removeEventListener('click', delCard)
}

function createCard(card) {
    const addCard = templateCard.content.cloneNode(true);
    addCard.querySelector('.cards__image').src = card.link;
    addCard.querySelector('.cards__title').textContent = card.name;
    addCard.querySelector('.cards__image').alt = card.name;
    addCard.querySelector('.cards__like-button').addEventListener('click', likeCard);
    addCard.querySelector('.cards__del-button').addEventListener('click', delCard);
    return addCard
}

function addCard(card) {
    const addCard = createCard(card)
    cardList.prepend(addCard);
}

cards.forEach(addCard);

const profileAddCardButton = document.querySelector('.profile__add-card-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popopAddCardForm = document.forms.addCard;
const cardTitle = document.querySelector('.popup__input_type_title');
const cardImageLink = document.querySelector('.popup__input_type_link');


profileAddCardButton.addEventListener('click', () => {
    openPopup(popupAddCard);
    popopAddCardForm.addEventListener('submit', addCardFormSubmitHandl)
});

function addCardFormSubmitHandl(evt) {
    evt.preventDefault();
    const card = {name: cardTitle.value, link: cardImageLink.value};
    addCard(card);
    evt.target.reset();
    closePopup(evt)
}

const cardImages = document.querySelectorAll('.cards__image');
const popupShowImage = document.querySelector('.popup_type_show-image');

function showImage(evt) {
    evt.preventDefault();
    document.querySelector('.popup__image').src = evt.target.src;
    document.querySelector('.popup__image-title').textContent = evt.target.closest('.cards__container').querySelector('.cards__title').textContent;
    document.querySelector('.popup__image').alt = evt.target.closest('.cards__container').querySelector('.cards__title').textContent;
    openPopup(popupShowImage);
}

cardImages.forEach((cardImage) => cardImage.addEventListener('click', showImage));