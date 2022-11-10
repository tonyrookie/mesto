const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function showInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
    const inputErrorId = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    inputErrorId.classList.add(errorClass);
    inputErrorId.textContent = inputElement.validationMessage;
};

function hideInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
    const inputErrorId = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    inputErrorId.classList.remove(errorClass);
    inputErrorId.textContent = '';
};

function checkInputValidity(formElement, inputElement, set) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, set);
    } else {
        hideInputError(formElement, inputElement, set);
    }
};

function setEventListeners(formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...set}) {
    const inputSelectorList = Array.from(formElement.querySelectorAll(inputSelector));
    toggleSubmitButtonSelector(formElement, inputSelectorList, submitButtonSelector, inactiveButtonClass);
    inputSelectorList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, set);
        toggleSubmitButtonSelector(formElement, inputSelectorList, submitButtonSelector, inactiveButtonClass);
        });
    });
};

function enableValidation({formSelector, ...set}) {
    const formSelectorList = Array.from(document.querySelectorAll(formSelector));
    formSelectorList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
        setEventListeners(formElement, set);
        //const fieldsetList = Array.from(formSelector.querySelectorAll('.popup__form-set'));
        //fieldsetList.forEach((fieldSet) => {
        //setEventListeners(fieldSet);
        //}); 
    });
};

function hasInvalidInput(inputSelectorList) {
    return inputSelectorList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
};

function toggleSubmitButtonSelector(formElement, inputSelectorList, submitButtonSelector, inactiveButtonClass) {
    const submitButton = formElement.querySelector(submitButtonSelector);
    if (hasInvalidInput(inputSelectorList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute("disabled", "");
    } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute("disabled", "");
    }; 
};

enableValidation(validationSettings);