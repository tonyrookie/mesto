const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

function showInputError(formSelector, inputSelector) {
    const inputErrorId = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add(`${settings.inputErrorClass}`);
    inputErrorId.classList.add(`${settings.errorClass}`);
    inputErrorId.textContent = inputSelector.validationMessage;
};

function hideInputError(formSelector, inputSelector) {
    const inputErrorId = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove(`${settings.inputErrorClass}`);
    inputErrorId.classList.remove(`${settings.errorClass}`);
    inputErrorId.textContent = '';
};

function checkInputValidity (formSelector, inputSelector) {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector);
    } else {
        hideInputError(formSelector, inputSelector);
    }
};

function setEventListeners(formSelector) {
    const inputSelectorList = Array.from(formSelector.querySelectorAll(`${settings.inputSelector}`));
    const submitButtonSelector = formSelector.querySelector(`${settings.submitButtonSelector}`);
    toggleSubmitButtonSelector(inputSelectorList, submitButtonSelector);
    inputSelectorList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
        checkInputValidity(formSelector, inputSelector);
        toggleSubmitButtonSelector(inputSelectorList, submitButtonSelector);
        });
    });
};

function enableValidation() {
    const formSelectorList = Array.from(document.querySelectorAll(`${settings.formSelector}`));
    formSelectorList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
        setEventListeners(formSelector);
        //const fieldsetList = Array.from(formSelector.querySelectorAll('.popup__form-set'));
        //fieldsetList.forEach((fieldSet) => {
        //setEventListeners(fieldSet);
        //}); 
    });
};

function hasInvalidInput(inputSelectorList) {
    return inputSelectorList.some((inputSelector) => {
    return !inputSelector.validity.valid;
    });
};

function toggleSubmitButtonSelector(inputSelectorList, submitButtonSelector) {
    if (hasInvalidInput(inputSelectorList)) {
    submitButtonSelector.classList.add(`${settings.inactiveButtonClass}`);
    submitButtonSelector.setAttribute("disabled", "");
    } else {
    submitButtonSelector.classList.remove(`${settings.inactiveButtonClass}`);
    submitButtonSelector.removeAttribute("disabled", "");
    }; 
};

enableValidation(settings);