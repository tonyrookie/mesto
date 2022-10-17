const editForm = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
function closePopup() {
    editForm.classList.remove('popup_opened')
};

closeButton.addEventListener('click', closePopup);

const editButton = document.querySelector('.profile-info__edit-button');
const formName = document.querySelector('.profile-info__name'); 
const formJob = document.querySelector('.profile-info__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const formProfileInfo = document.querySelector ('.popup__form')
function popupOpen() {
    editForm.classList.add('popup_opened');
    nameInput.value = formName.textContent;
    jobInput.value = formJob.textContent;
};
editButton.addEventListener('click', popupOpen)

function formSubmitHandler(evt) {
    evt.preventDefault();
    formName.textContent = nameInput.value;
    formJob.textContent = jobInput.value;
    closePopup();
    //editForm.classList.remove('popup_opened');
};

formProfileInfo.addEventListener('submit', formSubmitHandler);



// const likeButton = document.querySelector('.elements__like-button');
// likeButton.addEventListener('click', function() {
//     likeButton.classList.toggle('elements__like-button_active')
// })