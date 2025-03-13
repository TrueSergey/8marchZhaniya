document.addEventListener("DOMContentLoaded", function () {
    // Найти кнопку по её ID
    let button = document.getElementById("myButton");

    // Добавить обработчик события клика
    if (button) {
        button.addEventListener("click", function () {
            alert("Кнопка нажата!");
