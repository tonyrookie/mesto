import Popup from '../../src/components/Popup.js';
class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._submitButtonDefaulttext = this._submitButton.textContent;
    };

    open(id) {
        super.open();
        this._id = id;
    };

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._id);
        });
        super.setEventListeners();
    };

    close() {
        super.close();
    };

    setSubmitButtonText(onDeleting) {
        if (onDeleting) {
            this._submitButton.textContent = 'Удаление...';
        } else {
            this._submitButton.textContent = this._submitButtonDefaulttext;
        }
    };
};

export default PopupWithConfirm;