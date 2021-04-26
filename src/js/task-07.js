// Напиши скрипт, который реагирует на изменение значения
//  input#font-size-control (событие input) и изменяет инлайн-стиль
//   span#text обновляя свойство font-size.
//    В результате при перетаскивании ползунка будет меняться
//     размер текста.

const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onMoveInput = event => {
 const eventValue = event.currentTarget.value;
   textRef.style.fontSize = `${eventValue / 3}px`;

};

controlRef.addEventListener('input', onMoveInput);
