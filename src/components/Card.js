export default class Card {
    constructor(data, templateSelector, handleCardClick, handleCardLike, handleCardDel, myOwnId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this.cardId = data._id;
    this._myOwnId = myOwnId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDel = handleCardDel;
    this.likeStatus = false;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__container')
            .cloneNode(true);
        return cardElement;
    };

    getView() {
        this._element = this._getTemplate();
        this._cardsImage = this._element.querySelector('.cards__image');
        this._cardsName = this._element.querySelector('.cards__title');
        this._cardsLikeButton = this._element.querySelector('.cards__like-button');
        this._cardsDelButton = this._element.querySelector('.cards__del-button');
        this._cardsLikes = this._element.querySelector('.cards__likes');
        this._cardsImage.src = this._link;
        this._cardsImage.alt = this._name;
        this._cardsName.textContent = this._name;
        this._cardsLikes.textContent = this._likes.length;
        this._addMyLike();
        this._addDelButton();
        this._setEventListeners();
        return this._element;
    };

    _checkLikeStatus() {
        if (this._likes.some((like) => like._id === this._myOwnId)) {
            return true
        }
    };

    _addMyLike() {
        if (this._checkLikeStatus()) {
            this._cardsLikeButton.classList.add('cards__like-button_active');
            this.likeStatus = true;
        };
    };

    likeCard(likes) {
        this._cardsLikeButton.classList.add('cards__like-button_active');
        this._cardsLikes.textContent = likes;
        this.likeStatus = true;
    };

    unlikeCard(likes) {
        this._cardsLikeButton.classList.remove('cards__like-button_active');
        this._cardsLikes.textContent = likes;
        this.likeStatus = false;
    };

    _addDelButton() {
        if (this._ownerId === this._myOwnId) {
            this._cardsDelButton.classList.add('cards__del-button_active');
        };
    };

    delCard() {
        this._element.remove();
        this._element = null;
    };

    _setEventListeners() {
        this._cardsImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._cardsLikeButton.addEventListener('click', () => {
            this._handleCardLike(this);
        });
        this._cardsDelButton.addEventListener('click', () => {
            this._handleCardDel(this);
        });
    };
}