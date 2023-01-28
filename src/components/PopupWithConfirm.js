import Popup from '../../src/components/Popup.js';
class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    }

    open(id) {
        super.open();
        this._id = id;
    }

    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._id);
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        super.close();
    }
};

export default PopupWithConfirm;