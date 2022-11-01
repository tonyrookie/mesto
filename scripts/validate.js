function showInputError(formSelector, inputSelector) {
    const inputErrorClass = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add('popup__input_type_error');
    inputErrorClass.classList.add('popup__error_visible')
    inputErrorClass.textContent = inputSelector.validationMessage;
};

function hideInputError(formSelector, inputSelector) {
    const inputErrorClass = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__input_type_error');
    inputErrorClass.classList.remove('popup__error_visible')
    inputErrorClass.textContent = '';
};

function checkInputValidity (formSelector, inputSelector) {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector);
    } else {
        hideInputError(formSelector, inputSelector);
    }
};

function setEventListeners(formSelector) {
    const inputSelectorList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const submitButtonSelector = formSelector.querySelector('.popup__button');
    toggleSubmitButtonSelector(inputSelectorList, submitButtonSelector);
    inputSelectorList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
        checkInputValidity(formSelector, inputSelector);
        toggleSubmitButtonSelector(inputSelectorList, submitButtonSelector);
        });
    });
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
        const fieldsetList = Array.from(formSelector.querySelectorAll('.popup__form-set'));
        fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
        }); 
    });
};

enableValidation();

function hasInvalidInput(inputSelectorList) {
    return inputSelectorList.some((inputSelector) => {
    return !inputSelector.validity.valid;
    }); 
}

function toggleSubmitButtonSelector(inputSelectorList, submitButtonSelector) {
    if (hasInvalidInput(inputSelectorList)) {
    submitButtonSelector.classList.add('popup__button_disabled');
    submitButtonSelector.setAttribute("disabled", "");
    } else {
    submitButtonSelector.classList.remove('popup__button_disabled');
    submitButtonSelector.removeAttribute("disabled", "");
    }
}