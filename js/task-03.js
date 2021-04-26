// Используй массив объектов images для создания тегов img вложенных в 
//li.
//  Для создания разметки используй шаблонные строки и
 //insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию
 //вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами
 //через css-классы.

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


const galleryPic = document.querySelector('#gallery');

const element = images.map(pictures => {
  
  galleryPic.insertAdjacentHTML
  ('beforeend', `<li><img src = "${pictures.url}" alt = "${pictures.alt}" width = "420" ></li>`);

const imageEl = document.createElement('img');
 imageEl.style.display = 'flex';
 imageEl.style.margin = '30px';


 

  return imageEl;
});

console.log(galleryPic);





 
