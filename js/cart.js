document.addEventListener("DOMContentLoaded", function () {
    // Устанавливает слушателя события 'DOMContentLoaded', который запускает код, когда HTML-документ полностью загружен и DOM-дерево создано.

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    // Получает все элементы на странице с классом 'add-to-cart', сохраняя их в NodeList `addToCartButtons`. Это, как правило, кнопки "Добавить в корзину".

    const cartIcon = document.querySelector(".cart-icon");
    // Находит первый элемент с классом 'cart-icon', который представляет иконку корзины и сохраняет его в `cartIcon`.

    const cartItems = document.querySelector(".cart-items");
    // Находит первый элемент с классом 'cart-items', который содержит список товаров в корзине, и сохраняет его в `cartItems`.

    const cartContent = document.querySelector(".cart-content");
    // Получает элемент с классом 'cart-content', который используется для отображения детаилизированного списка товаров в корзине.

    const cartTotal = document.querySelector(".cart-total");
    // Находит элемент с классом 'cart-total', где будет отображаться общая сумма всех товаров в корзине.

    const closeBtn = document.querySelector(".close-btn");
    // Находит кнопку закрытия корзины по классу 'close-btn'.

    const checkoutBtn = document.querySelector(".checkout-btn");
    // Получает кнопку оформления заказа с классом 'checkout-btn'.

    const clearCartBtn = document.querySelector(".clear-cart-btn");
    // Находит кнопку очистки корзины с классом 'clear-cart-btn'.

    const textInput = document.getElementById("text");
    // Извлекает элемент с идентификатором 'text', который будет использоваться для отображения текстовой версии корзины.

    checkoutBtn.addEventListener("click", openCartWindow);
    // Устанавливает слушатель на кнопку оформления заказа, чтобы при клике вызывалась функция `openCartWindow`.

    let cart = [];
    // Объявляет массив `cart`, который будет содержать объекты товаров, хранящихся в корзине.

    // Добавление товара в корзину
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
        button.addEventListener("click", openCartWindow);
    });
    // Для каждой кнопки 'add-to-cart', добавляет два слушателя событий. 
    // Один для добавления товара в корзину (`addToCart`), а второй для открытия окна корзины (`openCartWindow`).

    // Отображение корзины
    cartIcon.addEventListener("click", showCart);
    // Добавляет слушатель, который делает корзину видимой, когда нажимается иконка корзины.

    // Закрытие корзины
    closeBtn.addEventListener("click", hideCart);
    // Добавляет слушатель для кнопки закрытия корзины, чтобы при клике корзина скрывалась.

    // Оформление заказа
    checkoutBtn.addEventListener("click", checkout);
    // Устанавливает обработчик кликов на кнопку оформления заказа, чтобы запустить соответствующую функцию `checkout`, если это необходимо.

    // Очистка корзины
    clearCartBtn.addEventListener("click", clearCart);
    // Присваивает обработчик события кнопке очистки корзины, вызывая функцию `clearCart` для удаления всех товаров из корзины.

    // Добавление товара в корзину
    function addToCart(event) {
        // Определяет функцию `addToCart`, которая запускается, когда кнопка "добавить в корзину" нажата.

        const item = event.target.parentNode;
        // Получает элемент (родителя) кнопки, на которую нажали, чтобы использовать его для извлечения деталей товара.

        const itemName = item.querySelector("h3").textContent.trim();
        // Извлекает название товара из элемента `h3`, очищая его от лишних пробелов.

        const itemPrice = parseFloat(item.querySelector("p").textContent.match(/\d+/));
        // Извлекает числовое значение из текста элемента `<p>`, преобразуя его в число `parseFloat` для использования в качестве стоимости товара.

        const existingItem = cart.find(item => item.name === itemName);
        // Ищет в массиве `cart` товар с таким же именем, чтобы определить, есть ли он уже в корзине.

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        }
        // Если товар уже в корзине, увеличивает его количество на 1.
        // Если же нет, добавляет новый объект товара в массив `cart` с начальным количеством 1.

        updateCart();
        // Обновляет визуальное содержимое корзины на странице, вызывая `updateCart`.

        updateCartIcon();
        // Обновляет иконку корзины, чтобы отразить текущее количество товаров.

    }

    function showCart() {
        cartItems.style.display = "block";
    }
    // Делает элемент `cartItems` видимым, отображая список товаров в корзине.

    function hideCart() {
        cartItems.style.display = "none";
    }
    // Скрывает элемент `cartItems`, делая его невидимым.

    function updateCart() {
        cartContent.innerHTML = "";
        // Очищает содержимое `cartContent`, чтобы обновить его с актуальной информацией.

        cart.forEach(item => {
            const itemElement = document.createElement("div");
            // Создает новый элемент `<div>` для каждого товара в корзине.

            itemElement.innerHTML = `
              <div class="cart-item">
                <div class="item-details">
                  <h3>${item.name}</h3>
                  <p>Цена: ₽${item.price.toFixed(2)}</p>
                  <p>Количество: ${item.quantity}</p>
                </div>
              </div>
            `;
            // Заполняет `<div>` информацией о товаре: название, цена и количество.

            cartContent.appendChild(itemElement);
            // Добавляет новый элемент с информацией о товаре в `cartContent`.

        });

        function clearCart() {
            // Очищаем поле с текстом

            // Очищаем массив корзины
            cart = [];
            cartContent.innerHTML = "";
            textInput.value = '';
            // Обновляем содержимое корзины и общую стоимость
            updateCart();
            // Обновляем иконку корзины
            updateCartIcon();

        }

        checkoutBtn.addEventListener("click", copyCartToTextField);
        // Устанавливает обработчик клика на кнопку оформления заказа,
        // вызывающий `copyCartToTextField` для копирования содержимого корзины в текстовое поле.

        function copyCartToTextField() {
            const cartText = cart.map(item => `Товар: ${item.name}, цена: ₽${item.price.toFixed(2)}, количество: ${item.quantity}`).join("\n");
            textInput.value = cartText;
        }
        // Копирует детали каждой позиции в корзине в текстовое поле, форматируя их для удобного отображения.

        // Добавляем обработчик события для кнопки "Очистить корзину"
        const clearCartBtn = document.querySelector(".clear-cart-btn");
        clearCartBtn.addEventListener("click", clearCart);
        // Вновь назначает обработчик кнопке очистки, который очищает корзину и обновляет интерфейс.

        // Update cart total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `Сумма: ₽${total.toFixed(2)}`;
        // Рассчитывает общую сумму всех товаров в корзине и обновляет текстовое содержимое `cartTotal`.
    }

    // Открывает новое окно и вставляет содержимое корзины
    function openCartWindow() {
        const cartItems = document.querySelector(".cart-items");
        const cartContentText = document.querySelector(".cart-content-text");
        const cartContent = cartItems.innerHTML;
        const tempElement = document.createElement("div");
        tempElement.innerHTML = cartContent;
        const itemDetails = tempElement.querySelectorAll(".item-details");

        const textarea = document.getElementById("text");
        let cartText = "";
        textarea.value = "";

        itemDetails.forEach((item) => {
            const itemName = item.querySelector("h3").innerHTML;
            const itemPrice = item.querySelector("p:nth-of-type(1)").innerHTML;
            const itemQuantity = item.querySelector("p:nth-of-type(2)").innerHTML;

            cartText += `${itemName}\n${itemPrice}\n${itemQuantity}\n\n`;
        });

        textarea.value = cartText;
    }
    // Функция `openCartWindow` копирует текущее содержимое корзины 
    // и преобразует его в текст, отображая в выделенном текстовом поле.

    // Обработчик события для кнопки "оформить"
    checkoutBtn.addEventListener("click", openCartWindow);
    // Назначает кнопке оформления заказа действие открытия окна корзины.

    function updateCartIcon() {
        const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartIconCount = cartIcon.querySelector(".cart-icon-count");

        if (cartItemCount > 0) {
            if (!cartIconCount) {
                const countElement = document.createElement("div");
                countElement.classList.add("cart-icon-count");
                countElement.textContent = cartItemCount;
                cartIcon.appendChild(countElement);
            } else {
                cartIconCount.textContent = cartItemCount;
            }
        } else if (cartIconCount) {
            cartIcon.removeChild(cartIconCount);
        }
    }
    // `updateCartIcon` обновляет количество товаров на значке корзины.
    // Если корзина содержит товары, отображает их количество на значке. Если корзина пуста, удаляет индикатор.
});
