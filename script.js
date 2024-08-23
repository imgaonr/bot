// script.js

// Инициализация переменных для монет и энергии
let coins = 0;
let energy = 1000;

// Получаем элементы DOM для обновления данных
const coinCountElement = document.getElementById('coinCount');
const energyTextElement = document.getElementById('energyText');
const boostButton = document.getElementById('boostButton');

// Функция для обновления интерфейса
function updateUI() {
    coinCountElement.textContent = `Монеты: ${coins}`;
    energyTextElement.textContent = `Энергия: ${energy} / 1000`;
}

// Обработчик клика по кнопке "Ускорить"
boostButton.addEventListener('click', () => {
    if (energy > 0) {
        coins += 1; // Добавляем монету
        energy -= 1; // Уменьшаем энергию
        updateUI(); // Обновляем интерфейс
    } else {
        alert('Недостаточно энергии!');
    }
});

// Инициализация начального интерфейса
updateUI();
