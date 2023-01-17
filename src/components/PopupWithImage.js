import Popup from '../../src/components/Popup.js';
class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupImageTitle = this._popup.querySelector('.popup__image-title');
    }

    open(title, link) {
        this._popupImage.src = link;
        this._popupImageTitle.textContent = title;
        this._popupImageTitle.alt = title;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners()
    }
};

export default PopupWithImage;