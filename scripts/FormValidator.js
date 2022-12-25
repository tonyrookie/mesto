export default class FormValidator {
    constructor(data, form) {
        this._input = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._input));
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }

    _showInputError(inputElement) {
        const inputErrorId = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        inputErrorId.classList.add(this._errorClass);
        inputErrorId.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const inputErrorId = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        inputErrorId.classList.remove(this._errorClass);
        inputErrorId.textContent = inputElement.validationMessage;
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._toggleSubmitButtonSelector();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleSubmitButtonSelector();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
        });
    };

    _toggleSubmitButtonSelector() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton()
        } else {
            this._enableSubmitButton()
        }; 
    };

    _disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute("disabled", "");
    };

    _enableSubmitButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute("disabled", "");
    };

    disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute("disabled", "");
    };
}