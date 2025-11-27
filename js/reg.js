document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const openLoginForm = document.getElementById('openLoginForm');
    const openRegisterForm = document.getElementById('openRegisterForm');

    // Показать форму регистрации из ссылки
    showRegisterLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Показать форму входа из ссылки
    showLoginLink.addEventListener('click', function (event) {
        event.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Показать форму входа при нажатии кнопки
    openLoginForm.addEventListener('click', function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Показать форму регистрации при нажатии кнопки
    openRegisterForm.addEventListener('click', function () {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
});
