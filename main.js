(()=>{"use strict";var t="",e=document.querySelector(".popup__input_type_profile-name"),n=document.querySelector(".popup__input_type_profile-job"),r=document.querySelector(".profile__edit-button"),o=document.forms.createCard,i=document.forms.profileInfo,u=document.querySelector(".profile__add-card-button"),l=document.querySelectorAll(".popup__form"),c=[{title:"Батискаф Кусто",link:t+"ffefce872f821cf33fcb.jpg"},{title:"Кусто с командой",link:t+"4938b9e92c3dca5a0898.jpg"},{title:"Изобретение Кусто и Ганьян",link:t+"e1e387fc1e595dbd65cb.jpg"},{title:"На работе",link:t+"70411e045a38916c2716.jpg"},{title:"Подводный дом",link:t+"03efee96df50fe703224.jpg"},{title:"Дениза",link:t+"461a8550ee162a6ad186.jpg"}],a={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.title,this._link=e.link,this._templateSelector=n,this._handleCardClick=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__container").cloneNode(!0)}},{key:"getView",value:function(){return this._element=this._getTemplate(),this._cardsImage=this._element.querySelector(".cards__image"),this._cardsTitle=this._element.querySelector(".cards__title"),this._cardsLikeButton=this._element.querySelector(".cards__like-button"),this._cardsDelButton=this._element.querySelector(".cards__del-button"),this._cardsImage.src=this._link,this._cardsImage.alt=this._title,this._cardsTitle.textContent=this._title,this._setEventListeners(),this._element}},{key:"_likeCard",value:function(){this._cardsLikeButton.classList.toggle("cards__like-button_active")}},{key:"_delCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._cardsImage.addEventListener("click",(function(){t._handleCardClick(t._title,t._link)})),this._cardsLikeButton.addEventListener("click",(function(){t._likeCard()})),this._cardsDelButton.addEventListener("click",(function(){t._delCard()}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._input=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._input)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=t.validationMessage}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleSubmitButtonSelector(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleSubmitButtonSelector()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleSubmitButtonSelector",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=E(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageTitle=e._popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImageTitle.textContent=t,this._popupImageTitle.alt=t,j(C(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){j(C(u.prototype),"setEventListeners",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function x(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}const D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return x(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._form=e._popup.querySelector(".popup__form"),e._inputList=Array.from(e._form.querySelectorAll(".popup__input")),e}return e=u,(n=[{key:"open",value:function(){T(V(u.prototype),"open",this).call(this)}},{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()})),T(V(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),T(V(u.prototype),"close",this).call(this)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var F=function(){function t(e){var n=e.userNameSelector,r=e.userJobSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userJob=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.job}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){var e=new d({items:t,renderer:function(t){e.addItem(new p(t,".template",M).getView())}},".cards");e.renderItems()}J(c);var U=new L(".popup_type_show-image");function M(t,e){U.open(t,e)}U.setEventListeners();var z={};l.forEach((function(t){new m(a,t).enableValidation(),z[t.name]=new m(a,t)}));var G=new D({popupSelector:".popup_type_add-card",handleFormSubmit:function(t){J([{title:t.title,link:t.link}])}});G.setEventListeners(),u.addEventListener("click",(function(){G.open(),z[o.name].disableSubmitButton()}));var H=new F({userNameSelector:".profile__name",userJobSelector:".profile__job"}),K=new D({popupSelector:".popup_type_edit-profile",handleFormSubmit:function(t){H.setUserInfo(t)}});K.setEventListeners(),r.addEventListener("click",(function(){K.open();var t=H.getUserInfo();e.value=t.name,n.value=t.job,z[i.name].disableSubmitButton()}))})();