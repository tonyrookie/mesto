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
function elementDel(e) {
    const delElement = e.target.closest('.elements__element');
    delElement.remove();
}
function elementLike(evt) {
    evt.target.classList.toggle('elements__like-button_active');
}

function addElement(element) {
    const newElement = templateElement.content.cloneNode(true);
    newElement.querySelector('.elements__image').src = element.link;
    newElement.querySelector('.elements__title').textContent = element.name;
    newElement.querySelector('.elements__del-button').addEventListener('click', elementDel);
    elementsList.prepend(newElement);
    const likeButton = document.querySelector('.elements__like-button');
    likeButton.addEventListener('click', elementLike);
}

elements.forEach(addElement);

function addFormSubmitHandler(e) {
    e.preventDefault();
    const element = {name: elementName.value, link: elementLink.value};
    addElement(element);
    //e.target.reset();
    closeAddPopup();
}

addFormContainer.addEventListener('submit', addFormSubmitHandler);



