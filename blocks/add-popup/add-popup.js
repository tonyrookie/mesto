const addForm = document.querySelector('.add-popup');
const addButton = document.querySelector('.profile__add-button');
function addPopupOpen() {
    addForm.classList.add('add-popup_opened');
};
addButton.addEventListener('click', addPopupOpen)

const addFormCloseButton = document.querySelector('.add-popup__close-button');
function closeAddPopup() {
    addForm.classList.remove('add-popup_opened')
};
addFormCloseButton.addEventListener('click', closeAddPopup);

const elements = [
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

const elementsList = document.querySelector('.elements');
const addFormContainer = document.querySelector('.add-popup__form');
const elementName = document.querySelector('.add-popup__input_type_name');
const elementLink = document.querySelector('.add-popup__input_type_link');
const templateElement = document.querySelector('.template');
const imagePopup = document.querySelector('.image-popup');


function showImage(evt) {
    evt.preventDefault();
    imagePopup.querySelector('.image-popup__close-button').addEventListener('click', closeImage);
    document.querySelector('.image-popup__image').src = evt.target.src;
    document.querySelector('.image-popup__name').textContent = evt.target.closest('.elements__element').querySelector('.elements__title').textContent;
    imagePopup.classList.add('image-popup_opened');
}

function closeImage() {imagePopup.classList.remove('image-popup_opened')}

function delElements(evt) {
    const delElement = evt.target.closest('.elements__element');
    delElement.remove();
}

function likeElement(evt) {
    evt.target.classList.toggle('elements__like-button_active');
}

function addElement(element) {
    const newElement = templateElement.content.cloneNode(true);
    newElement.querySelector('.elements__image').src = element.link;
    newElement.querySelector('.elements__title').textContent = element.name;
    newElement.querySelector('.elements__del-button').addEventListener('click', delElements);
    newElement.querySelector('.elements__like-button').addEventListener('click', likeElement);
    newElement.querySelector('.elements__image').addEventListener('click', showImage);
    elementsList.prepend(newElement);
    
}

elements.forEach(addElement);

function addFormSubmitHandler(e) {
    e.preventDefault();
    const element = {name: elementName.value, link: elementLink.value};
    addElement(element);
    e.target.reset();
    closeAddPopup();
}

addFormContainer.addEventListener('submit', addFormSubmitHandler);

function closeEsc(evt) {
    if (evt.keyCode == 27) {
        closeAddPopup();
        closeImage();
        closePopup()
    }
}

function closeAnyClick(evt) {
        const anyClick = evt.target
        if (!anyClick.closest('.image-popup__image') 
        && !anyClick.closest('.elements__element') 
        && !anyClick.closest('.popup__container') 
        && !anyClick.closest('.profile-info__edit-button')
        && !anyClick.closest('.profile__add-button')
        && !anyClick.closest('.add-popup__container')) { 
            closeAddPopup();
            closeImage();
            closePopup()
        }
}

document.addEventListener('keydown', closeEsc);

document.addEventListener('click', closeAnyClick);
