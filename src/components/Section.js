export default class Section {
    constructor( renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    _addItemAppend(element) {
        this._container.append(element);
    }

    _addItemPrepend(element) {
        this._container.prepend(element);
    }

    renderItemsAppend(items) {
            items.forEach(item => {
            const element = this._renderer(item);
            this._addItemAppend(element);
        });
    }

    renderItemsPrepend(items) {
        items.forEach(item => {
        const element = this._renderer(item);
        this._addItemPrepend(element);
    });
}
}