// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.
// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число. Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const refs = {
    boxes: document.querySelector('#boxes'),
    input: document.querySelector('input'),
    container: document.querySelector('#controls'),
    renderButton: document.querySelector('button[data-action="render"]'),
    destroyButton: document.querySelector('button[data-action="destroy"]'),
  };
  
  
  const createBoxes = amount => {
      onDestroyButtonClick();
      refs.input.value = amount;
  
  
      const boxes = [];
    
      for (let i = 0; i < amount; i ++) {   
        const boxEl = document.createElement('div');
  
        boxEl.style.width = 30 + i * 10 + 'px';
        boxEl.style.height = 30 + i * 10 + 'px';
  
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        const bgColor = `rgb(${r}, ${g}, ${b})`;
  
        boxEl.style.backgroundColor = bgColor;
        boxEl.classList.add('box');
        boxes.push(boxEl);
      //   console.log(boxEl);
      }
      return refs.boxes.append(...boxes);
      
    };
    
    const onRenderButtonClick = () => {
      createBoxes(refs.input.value);
    };
    
    const onDestroyButtonClick = () => {
      refs.boxes.innerHTML = '';
      refs.input.value = 0;
      return;
    };
  
    refs.renderButton.addEventListener('click', onRenderButtonClick);
    refs.destroyButton.addEventListener('click', onDestroyButtonClick);