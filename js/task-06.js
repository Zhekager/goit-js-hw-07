// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.
//  Сколько символов должно быть в инпуте, указывается 
//  в его атрибуте data-length.
// Если введено подходящее количество, то border инпута
//  становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.



const input = document.querySelector('#validation-input');


const validationResetCls = event => 
event.currentTarget.classList.remove('invalid', 'valid');

const validationSetCls = event => {
  const ref = event.currentTarget;
   const inputValidLength = Number(ref.dataset.length);

  if (ref.value.length !== inputValidLength) {
     ref.classList.add('invalid');
     
    return;
  }
  ref.classList.add('valid');
};

input.addEventListener('focus', validationResetCls);
input.addEventListener('blur', validationSetCls);
