const phoneInput = document.getElementById('phone');
// Находит HTML-элемент с идентификатором 'phone' (например, элемент <input>) и сохраняет его в константу `phoneInput`. 
// Этот элемент ожидается как поле ввода, куда пользователь будет вводить номер телефона, и мы планируем использовать его для добавления функциональности.

function formatPhoneNumber(phoneNumber) {
    // Определяет функцию `formatPhoneNumber`, которая принимает строку `phoneNumber` как аргумент.
    // Функция возвращает отформатированный номер телефона в заданном виде.

    let formattedPhoneNumber = "+7 ";
    // Инициализирует строку `formattedPhoneNumber` с российским кодом страны "+7 ", который будет добавлен к началу любого введенного номера.

    if (phoneNumber.length > 1) {
        // Проверяет, имеет ли строка `phoneNumber` длину более 1 символа. 
        // Это условие следует применять, чтобы не пытаться взять подстроку из короткой строки (меньше 4 символов) и избежать ошибок.

        formattedPhoneNumber += phoneNumber.substring(1, 4) + " ";
        // Если условие соблюдено, извлекается подстрока с 1 по 3 символы из `phoneNumber` и добавляется к `formattedPhoneNumber`, 
        // затем добавляется пробел для разделения.

    }
    if (phoneNumber.length > 4) {
        // Проверяет, имеет ли строка `phoneNumber` длину более 4 символов. 
        // Это проверка, чтобы убедиться, что номер содержит код города или оператора.

        formattedPhoneNumber += phoneNumber.substring(4, 7) + "-";
        // Извлекается подстрока с 4 по 6 символы из `phoneNumber` и добавляется к `formattedPhoneNumber`, 
        // а затем добавляется дефис для разделения группы цифр.

    }
    if (phoneNumber.length > 7) {
        // Проверяет, если `phoneNumber` длиннее 7 символов, то есть позволяет извлечь следующую секцию из двух цифр.

        formattedPhoneNumber += phoneNumber.substring(7, 9) + "-";
        // Извлекает подстроку с 7 по 8 символы из `phoneNumber` и добавляет к `formattedPhoneNumber`,
        // добавляя дефис после для отделения оставшихся цифр.

    }
    if (phoneNumber.length > 9) {
        // Проверяет, имеет ли строка `phoneNumber` длину более 9 символов для добавления оставшихся цифр номера.

        formattedPhoneNumber += phoneNumber.substring(9, 11);
        // Если больше, добавляются последние две цифры, т.е. значения с позиции 9 по 10, к `formattedPhoneNumber`.

    }

    return formattedPhoneNumber;
    // Возвращает отформатированную строку `formattedPhoneNumber`, содержащую номер телефона в требуемом формате.

}
