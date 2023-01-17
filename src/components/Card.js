export default class Card {
    constructor(data, templateSelector, handleCardClick) {
    this._title = data.title;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__container')
            .cloneNode(true);
        return cardElement;
    }

    getView() {
        this._element = this._getTemplate();
        this._cardsImage = this._element.querySelector('.cards__image');
        this._cardsTitle = this._element.querySelector('.cards__title');
        this._cardsLikeButton = this._element.querySelector('.cards__like-button');
        this._cardsDelButton = this._element.querySelector('.cards__del-button');
        this._cardsImage.src = this._link;
        this._cardsImage.alt = this._title;
        this._cardsTitle.textContent = this._title;
        this._setEventListeners();
        return this._element;
    }

    _likeCard() {
        this._cardsLikeButton.classList.toggle('cards__like-button_active');
    }

    _delCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._cardsImage.addEventListener('click', () => {
            this._handleCardClick(this._title, this._link)
        });
        this._cardsLikeButton.addEventListener('click', () => {
            this._likeCard()
        });
        this._cardsDelButton.addEventListener('click', () => {
            this._delCard()
        });
    }
}