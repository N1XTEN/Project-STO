// Инициализация MicroModal
MicroModal.init({
    onShow: modal => {
        console.info(`${modal.id} is shown`);
        // Находим форму внутри модального окна
        var modalForm = document.querySelector('.modal-form');
        // Убираем класс hidden, чтобы показать форму при открытии модального окна
        modalForm.classList.remove('hidden');
    },
    onClose: modal => {
        console.info(`${modal.id} is hidden`);
        // Находим форму внутри модального окна
        var modalForm = document.querySelector('.modal-form');
        // Добавляем класс hidden, чтобы скрыть форму при закрытии модального окна
        modalForm.classList.add('hidden');
    },
    openTrigger: 'data-micromodal-trigger',
    closeTrigger: 'data-micromodal-close',
    openClass: 'is-open',
    disableScroll: true,
    disableFocus: false,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    debugMode: false
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей формы
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var phoneNumber = document.getElementById('phone-number').value;

    // Формируем массив с данными
    var formData = [firstName, lastName, phoneNumber];

    // Выводим массив в консоль (или можно использовать его дальше по вашему усмотрению)
    console.log(formData);

    // Закрываем модальное окно после отправки
    MicroModal.close('modal-1');
});