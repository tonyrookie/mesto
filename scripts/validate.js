// включение валидации вызовом enableValidation
// все настройки передаются при вызове

//enableValidation({
//    formSelector: '.popup__form',
//    inputSelector: '.popup__input',
//    submitButtonSelector: '.popup__button',
//    inactiveButtonClass: 'popup__button_disabled',
//    inputErrorClass: 'popup__input_type_error',
//    errorClass: 'popup__error_visible'
//    });
function setSubmitButtonState(isActive) {
    if (isActive) {
        submitButtonSelector.classList.add('popup__button_disabled');
        submitButtonSelector.classList.remove('popup__button');
    } else {
        submitButtonSelector.classList.remove('popup__button_disabled');
        submitButtonSelector.classList.add('popup__button');
    } 
};

function showInputError(formSelector, inputSelector) {
    const inputErrorClasses = formSelector.querySelectorAll('.popup__eror');
    inputSelector.classList.add('popup__input_type_error');
    inputErrorClasses.forEach((inputErrorClass) => {
        inputErrorClass.classList.add('popup__error_visible')
        inputErrorClass.textContent = inputSelector.validationMessage;
    });
};

function hideInputError(formSelector, inputSelector) {
    const inputErrorClasses = formSelector.querySelectorAll('.popup__eror');
    inputSelector.classList.remove('popup__input_type_error');
    inputErrorClasses.forEach((inputErrorClass) => {
        inputErrorClass.classList.remove('popup__error_visible')
        inputErrorClass.textContent = '';
    });
};

function checkInputValidity (formSelector, inputSelector) {
    const submitButtonSelector = formSelector.querySelector('.popup__button');
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector);
    } else {
        hideInputError(formSelector, inputSelector);
    }
    if (!inputSelector.validity.valid) {
        submitButtonSelector.classList.add('popup__button_disabled');
        submitButtonSelector.setAttribute("disabled", "");
    } else { 
        submitButtonSelector.classList.remove('popup__button_disabled');
        submitButtonSelector.removeAttribute("disabled", "");
    }
};

function setEventListeners(formSelector) {
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
        checkInputValidity(formSelector, inputSelector);
        });
    });
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    setEventListeners(formSelector);
    });
};

enableValidation();

