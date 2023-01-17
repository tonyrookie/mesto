import Popup from '../../src/components/Popup.js';
class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    open() {
        super.open();
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => { 
            this._inputValues[input.name] = input.value
        });
        return this._inputValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {  
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm;