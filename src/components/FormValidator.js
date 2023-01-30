export default class FormValidator {
    constructor(settings, form) {
        this._input = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._input));
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this._submitButtonDefaultTextContent = this._submitButton.textContent;
    };

    _showInputError(inputElement) {
        const inputErrorId = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        inputErrorId.classList.add(this._errorClass);
        inputErrorId.textContent = inputElement.validationMessage;
    };

    _hideInputError(inputElement) {
        const inputErrorId = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        inputErrorId.classList.remove(this._errorClass);
        inputErrorId.textContent = inputElement.validationMessage;
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners() {
        this._toggleSubmitButtonSelector();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleSubmitButtonSelector();
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
        });
    };

    _toggleSubmitButtonSelector() {
        if (this._hasInvalidInput()) {
            this.disableSubmitButton()
        } else {
            this._enableSubmitButton()
        };
    };

    _enableSubmitButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    };

    disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    };
}