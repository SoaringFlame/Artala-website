document.addEventListener('DOMContentLoaded', function () {
    // ƒобавл€ет событие 'DOMContentLoaded', которое вызываетс€, когда вс€ структура HTML была полностью загружена и обработана, 
    // без ожидани€ загрузки стилей, изображений и под-документов. Ёто гарантирует, что скрипт выполн€етс€ только после того, как DOM готов.

    var currentURL = window.location.href;
    // ѕолучает текущий полный URL-адрес страницы из объекта window и сохран€ет его в переменной currentURL.
    // Ётот URL будет использоватьс€ дл€ сравнени€ с href атрибутами элементов меню, чтобы определить, какой из них соответствует текущей открытой странице.

    var menuItems = document.querySelectorAll('.navbar__menu-items_item a');
    // Ќаходит все элементы ссылки (`<a>`) внутри элементов меню (`.navbar__menu-items_item`) и сохран€ет их в NodeList `menuItems`.
    // `querySelectorAll` возвращает статический список всех найденных элементов на странице, которые соответствуют CSS-селектору.

    menuItems.forEach(function (item) {
        // »терирует по каждому элементу в NodeList `menuItems` с использованием метода `forEach`.
        // ћетод `forEach` проходит по каждому элементу и выполн€ет указанную функцию обратного вызова дл€ каждого элемента, который в данном контексте имеет им€ `item`.

        if (item.getAttribute('href') === currentURL) {
            // ƒл€ каждого `item`, который представл€ет собой элемент ссылки, сравнивает значение его `href` атрибута с текущим URL-адресом `currentURL`.
            // `getAttribute('href')` извлекает значение атрибута `href` у элемента `item`.

            item.classList.add('active');
            // ≈сли `href` элемента совпадает с `currentURL`, добавл€ет класс 'active' к этому элементу ссылки.
            // Ётот класс обычно используетс€ дл€ выделени€ визуально конкретного элемента меню, чтобы пользователь мог видеть, кака€ страница активна.
        }
    });
});
window.addEventListener('DOMContentLoaded', (event) => {
    // ѕроверка наличи€ сообщени€ об успехе в sessionStorage
    const successMessage = sessionStorage.getItem('successMessage');
    if (successMessage) {
        showMessage(successMessage);
        sessionStorage.removeItem('successMessage'); // ”даление сообщени€ после показа
    }
});

function showMessage(message) {
    // —оздание и отображение элемента с сообщением
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerText = message;
    document.body.appendChild(successMessage);

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000); // —крытие сообщени€ через 3 секунды
}
