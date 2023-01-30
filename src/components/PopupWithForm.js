import Popup from '../../src/components/Popup.js';
class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._submitButtonDefaulttext = this._submitButton.textContent;
    };

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => { 
            this._inputValues[input.name] = input.value
        });
        return this._inputValues;
    };

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    };

    close() {  
        this._form.reset();
        super.close();
    };

    setSubmitButtonText(onSaving) {
        if (onSaving) {
            this._submitButton.textContent = 'Сохранение...';
        } 
        else {
            this._submitButton.textContent = this._submitButtonDefaulttext;
        }
    };
};

export default PopupWithForm;