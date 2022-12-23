
export default class ValidateForm {
    constructor(data, formtype) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formtype = formtype;
    }

    _showInputError(inputElement) {
        const inputErrorId = this._formtype.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        inputErrorId.classList.add(this._errorClass);
        inputErrorId.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const inputErrorId = this._formtype.querySelector(`#${inputElement.id}-error`);
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
        const inputSelectorList = Array.from(this._formtype.querySelectorAll(this._inputSelector));
        this._toggleSubmitButtonSelector(inputSelectorList);
            inputSelectorList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleSubmitButtonSelector(inputSelectorList);
            });
        });
    }

    enableValidation() {
        this._formtype.addEventListener('submit', () => {
            preventDefault();
        });
        this._setEventListeners();
    }

    _hasInvalidInput(inputSelectorList) {
        return inputSelectorList.some((inputElement) => {
        return !inputElement.validity.valid;
        });
    };

    _toggleSubmitButtonSelector(inputSelectorList) {
        const submitButton = this._formtype.querySelector(this._submitButtonSelector);
        if (this._hasInvalidInput(inputSelectorList)) {
        submitButton.classList.add(this._inactiveButtonClass);
        submitButton.setAttribute("disabled", "");
        } else {
        submitButton.classList.remove(this._inactiveButtonClass);
        submitButton.removeAttribute("disabled", "");
        }; 
    };
}