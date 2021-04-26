// Счетчик состоит из спана и кнопок, которые должны увеличивать
//  и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
//  текущее значение счетчика.
// Создай функции increment и decrement для увеличения
//  и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций
//  и обновление интерфейса

const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter Button');

const buttonDecrement = buttons[0];
const buttonIncrement = buttons[1];
 
buttonDecrement.addEventListener('click', decrement);

buttonIncrement.addEventListener('click', increment);

function decrement(event) {  
    counterValue.textContent --;      
};

function increment(event) { 
    counterValue.textContent ++;  
    
};
