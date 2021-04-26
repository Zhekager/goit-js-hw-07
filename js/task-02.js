// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.
//   Для создания DOM-узлов 
// используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const productListEl =  document.querySelector('#ingredients');

const groceryList = ingredients.forEach(ingredient => {
   const itemProduct = document.createElement('li');

    itemProduct.innerHTML = ingredient;
     productListEl.append(itemProduct);
      console.log(productListEl);
  } 
);

 


