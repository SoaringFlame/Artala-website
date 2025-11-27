<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы и обработываем их для безопасности
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $text = htmlspecialchars(trim($_POST['text']));

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);

    try {
        // Настройки SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru'; // SMTP сервер вашего почтового провайдера
        $mail->SMTPAuth = true;
        $mail->Username = 'ВашЕмейл@mail.ru'; // Замена вашей действительной почты
        $mail->Password = 'ВашПароль'; // Используйте пароль приложения для безопасности
        $mail->SMTPSecure = 'ssl'; // Использование SSL для безопасности
        $mail->Port = 465; // Порт для SSL

        // Настройка отправителя и получателя
        $mail->setFrom('ВашЕмейл@mail.ru', 'Ваше Имя');
        $mail->addAddress('Получатель@mail.ru', 'Имя Получателя');

        // Установка темы и тела письма
        $mail->Subject = 'Уведомление о новом заказе';
        $mail->Body = "Имя: $name<br>Email: $email<br>Телефон: $phone<br>Сообщение: $text";

        // Отправка письма
        $mail->send();
        echo 'Письмо успешно отправлено';
    } catch (Exception $e) {
        echo "Не удалось отправить письмо. Ошибка: {$mail->ErrorInfo}";
    }
} else {
    echo "Данные формы не были отправлены!";
}
?>
