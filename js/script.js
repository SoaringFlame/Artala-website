window.addEventListener('DOMContentLoaded', () => {
    // Устанавливает слушатель события 'DOMContentLoaded', чтобы код выполнялся после полной загрузки HTML-документа и построения DOM-дерева.

    const menu = document.querySelector('.navbar-container'),
        menuItem = document.querySelectorAll('.navbar__menu-items_item'),
        hamburger = document.querySelector('.hamburger');
    // Получает элементы из DOM:
    // `menu` - элемент навигационного контейнера;
    // `menuItem` - список всех элементов меню в навигации;
    // `hamburger` - элемент, представляющий иконку-гамбургер для управления мобильным меню.

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navbar-container_active');
    });
    // Добавляет обработчик событий для кликов по гамбургер-иконке.
    // При нажатии переключает класс `hamburger_active` на иконке и `navbar-container_active` на меню,
    // что обычно используется для отображения/скрытия мобильного меню.

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navbar-container_active');
        });
    });
    // Устанавливает обработчик событий для каждого элемента меню. Когда любой из них будет нажат,
    // будет переключаться состояние гамбургер-иконки и меню, что позволяет скрывать меню после выбора элемента.

});

function toggleRegistrationForm() {
    const registerForm = document.getElementById('register-form');
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}
// Определяет функцию `toggleRegistrationForm`, которая показывает или скрывает форму регистрации, 
// изменяя свойство `display` между 'none' и 'block'.

function register() {
    let username = document.getElementById('register-username').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    alert(`Регистрация пользователя: ${username}, Email: ${email}`);
    // Находит значения из полей ввода: имя пользователя, электронную почту и пароль.
    // Отображает предупреждение с именем пользователя и электронной почтой.
    // Заметка: отправка данных на сервер может быть добавлена ​​в этом месте.
}

// Простой скрипт для управления выпадающим меню на мобильном устройстве
document.querySelector('.hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.navbar__menu-items');
    menu.classList.toggle('active'); // Переключение класса active для появления меню
});
// Добавляет слушатель событий для кликов по элементу гамбургер-меню.
// Находит элемент с классом 'navbar__menu-items' и переключает класс 'active',
// что управляет отображением меню на мобильных устройствах.

 // document.getElementById('enter-button').addEventListener('click', function () {
    // Перенаправление на главную страницу магазина
  //    window.location.href = 'index.html';
 // });
// Добавляет обработчик события для `enter-button`.
// При нажатии происходит перенаправление пользователя на страницу 'index.html', 
// которая, предположительно, является главной страницей магазина.

document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.navbar__menu-items').classList.toggle('active');
});
