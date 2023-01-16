import batiskaf from '../../src/images/batiskaf-kusto.jpg';
import komandaKusto from '../../src/images/komanda-kusto.jpg';
import akvalang from '../../src/images/akvalang.jpg';
import kusto from '../../src/images/kusto.jpg';
import underwaterHouse from '../../src/images/underwater-house.jpg';
import uboat from '../../src/images/uboat.jpg';


export const defaultCards = [
    {
        title: 'Батискаф Кусто',
        link: batiskaf
    },
    {
        title: 'Кусто с командой',
        link: komandaKusto
    },
    {
        title: 'Изобретение Кусто и Ганьян',
        link: akvalang
    },
    {
        title: 'На работе',
        link: kusto
    },
    {
        title: 'Подводный дом',
        link: underwaterHouse
    },
    {
        title: 'Дениза',
        link: uboat
    }
];
export const validationSettings = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}