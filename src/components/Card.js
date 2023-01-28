export default class Card {
    constructor(data, templateSelector, handleCardClick, handleCardLike, handleCardDel, myOwnId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._myOwnId = myOwnId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDel = handleCardDel;
    this._likeStatus = false;
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
    }

    _addMyLike() {
        if (this._likes.some((like) => like._id ===  this._myOwnId)) {
            this._likeStatus = true;
            this._cardsLikeButton.classList.add('cards__like-button_active');
        }
    }

    _likeCard() {
        this._cardsLikeButton.classList.add('cards__like-button_active');
        this._cardsLikes.textContent = this._likes.length + 1;
        this._likeStatus = true;
    }

    _unlikeCard() {
        this._cardsLikeButton.classList.remove('cards__like-button_active');
        this._cardsLikes.textContent = this._likes.length;
        this._likeStatus = false;
    }

    _addDelButton() {
        if (this._ownerId ===  this._myOwnId) {
            this._cardsDelButton.classList.add('cards__del-button_active');
        }
    }

    _delCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._cardsImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
        this._cardsLikeButton.addEventListener('click', () => {
            this._handleCardLike(this._cardId, this._likeStatus);
            if (this._likeStatus) {
                this._unlikeCard();
            } else {
                this._likeCard()
            }
        });
        this._cardsDelButton.addEventListener('click', () => {
            this._handleCardDel(this._cardId);
            this._delCard()
        });
    }
}