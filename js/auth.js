// auth.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");
    const emailError = document.getElementById("emailError");
    const registerEmailError = document.getElementById("registerEmailError");

    // Показать форму регистрации
    showRegister.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("auth-heading").style.display = "none";
        loginForm.style.display = "none";
        document.getElementById("register-heading").style.display = "block";
        registerForm.style.display = "block";
    });

    // Показать форму авторизации
    showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("register-heading").style.display = "none";
        registerForm.style.display = "none";
        document.getElementById("auth-heading").style.display = "block";
        loginForm.style.display = "block";
    });

    // Валидация email на авторизации
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Остановить отправку формы по умолчанию
        const email = document.getElementById("loginEmail").value;

        if (!validateEmail(email)) {
            emailError.style.display = "block"; // Показать ошибку валидации
            return; // Прекратить выполнение
        } else {
            emailError.style.display = "none"; // Скрыть ошибку
        }

        // Выполните логику авторизации здесь (например, запрос к серверу)

        // После успешной авторизации
        // Симуляция успешной авторизации
        setTimeout(() => {
            alert("Вы успешно авторизовались!"); // Сообщение о успешной авторизации
            window.location.href = "index.html?authSuccess=1"; // Перенаправление на index.html
        }, 1000); // Задержка для имитации обработки
    });

    // Валидация email на регистрации
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Остановить отправку формы
        const email = document.getElementById("registerEmail").value;

        // Проверка валидности email
        if (!validateEmail(email)) {
            registerEmailError.style.display = "block"; // Показать ошибку
            return; // Прекратить выполнение, если email некорректный
        } else {
            registerEmailError.style.display = "none"; // Скрыть ошибку
        }

        // Здесь добавьте вашу логику для регистрации
        // После успешной регистрации:
        setTimeout(() => { // Имитация задержки
            alert("Вы успешно зарегистрированы!"); // Сообщение об успешной регистрации
            window.location.href = "index.html?success=1"; // Перенаправление на index.html после регистрации
        }, 1000); // Задержка
    });

    // Функция для проверки формата email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
