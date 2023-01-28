export default class UserInfo {
    constructor({userNameSelector, userAboutSelector, userAvatarSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userAbout = document.querySelector(userAboutSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        const data = {
            name: this._userName.textContent,
            about: this._userAbout.textContent,
        };
        return data;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userAbout.textContent = data.about;
        this._userId = data._id;
    }

    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }

    getUserId() {
        return  this._userId;
    }
}