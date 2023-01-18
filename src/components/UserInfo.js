export default class UserInfo {
    constructor({userNameSelector, userJobSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
    }

    getUserInfo() {
        const data = {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        };
        return data;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;
    }
}