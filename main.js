// Действие с nav при скроллинге
document.addEventListener('scroll', (event) => {
    let nav = document.querySelector('.nav');
    nav.style.background = window.pageYOffset > nav.offsetHeight ? 'rgb(17, 17, 17)' : 'none';
});


// Добавление функциональности для модального окна
let modal = document.querySelector(".modal"); // инициализируем модальное окно
let modalTitle = document.querySelector(".modal .modal-content .modal-title h1"); // инициализируем заголовок окна
let modalImageSrc = document.querySelector(".modal .modal-content .modal-image img"); // и то же самое делаем для img модального окна
// вешаем обработчик событий на click для все элентов petProjectShow для развертывания модального окна
document.querySelectorAll(".certificate span").forEach(button => {
    button.addEventListener('click', (e) => {
        modalTitle.innerHTML = button.previousElementSibling.alt;
        modalImageSrc.src = button.previousElementSibling.src;
        modal.style.display = 'flex';
        modal.style.animationName = 'openModal';
    });
});
// Закрыте модального окна при нажатии на X
document.querySelector('.close').addEventListener('click', (e) => {
    modal.style.animationName = 'closeModal'; // выполняем анимацию закрытия окна
    setTimeout(()=>modal.style.display = 'none', 200); // после анимации скрываем модальное окно
});

// Инициализируем переменные блока Eduction
let showAllCertificates = document.querySelector('.show-all button'); // кнопка Show all
let certificates = document.getElementsByClassName('certificate'); // получаем список все сертивикатов
let hiding = document.querySelector('.certificate-group .after'); // инициализируем span-тег сокрытия
if (certificates.length > 6) { // если более 6 сертрификатов
    hiding.style.display = 'block'; // делаем видимым блок after для скрытия
    showAllCertificates.parentElement.style.display = 'flex'; // отображаем кнопку Show/Hide all
    for (let index = 4; index < certificates.length; index++) { // начинаем с 4 элемента
        certificates[index].style.display = 'none'; // переводим в none  свойство display для бдлоков certificate
    }
}
// Добавляем функциональность для кнопки Show/Hide all при событии click
showAllCertificates.addEventListener('click', () => {
    hiding.style.display = hiding.style.display === 'block'? 'none':'block'; // скрываем/отображаем скрывающий слой
    for (let index = 4; index < certificates.length; index++) {
        setTimeout(()=> certificates[index].style.display = certificates[index].style.display === 'flex'? 'none': 'flex', 
        100 * (index-3)); // поочередно выводим каждый скрытый сертификат
    }
    // меняем состояние Show/Hide all кнопки
    showAllCertificates.innerHTML = showAllCertificates.innerHTML === 'Show all'? 'Hide all': 'Show all';
});