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
const buttonRemove = buttons[2];
 
buttonDecrement.addEventListener('click', decrement);

buttonIncrement.addEventListener('click', increment);

buttonRemove.addEventListener('click', remove);

function remove() {
    counterValue.textContent = '0';
}
buttonRemove.style.display = 'flex';
buttonRemove.style.width = '75px';
buttonRemove.style.padding = '0px 20px';
buttonRemove.style.marginTop = '5px';

function decrement() {  
    counterValue.textContent --;      
};

function increment() { 
    counterValue.textContent ++;  
    
};
