export default class UserInfo {
    constructor(userNameSelector, userJobSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
    }

    getUserInfo(name, job) {
        name.value = this._userName.textContent;
        job.value = this._userJob.textContent;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;
    }
}