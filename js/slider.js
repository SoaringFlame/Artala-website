let currentSlide = 0;

// Функция для изменения слайда
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlides();
}

// Функция для установки определённого слайда
function setSlide(index) {
    currentSlide = index;
    updateSlides();
}

// Обновление состояния слайдов и точек навигации
function updateSlides() {
    const slides = document.querySelectorAll('.slides');
    const navDots = document.querySelectorAll('.nav-dot');

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });

    navDots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentSlide ? '#666' : '#ccc';
    });
}

// Авто-переключение слайдов каждые 5 секунд
setInterval(() => {
    changeSlide(1);
}, 5000); // 5000 мс = 5 секунд

// Событие для закрытия кнопки
document.getElementById("close-button").addEventListener("click", function () {
    window.location.href = "index.html#bochonok";
});

// Инициализация слайдера
updateSlides();
