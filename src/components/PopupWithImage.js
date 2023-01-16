import Popup from '../../src/components/Popup.js';
class PopupWithImage extends Popup {
    constructor(title, link, popupType) {
        super(popupType);
        this._link = link;
        this._title = title;
        this._popupImage = document.querySelector('.popup__image');
        this._popupImageTitle = document.querySelector('.popup__image-title');
    }

    open() {
        this._popupImage.src = this._link;
        this._popupImageTitle.textContent = this._title;
        this._popupImageTitle.alt = this._title;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners()
    }
};

export default PopupWithImage;