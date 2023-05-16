// 3-2 getElementById practice
// const h1Element = document.getElementById('myElement');
// console.log(h1Element);
// const pElement = document.getElementById('list');
// console.log(pElement);
// setTimeout(() => {
//     pElement.textContent = 'check list'; //更改#list的內容
// }, 1000)

// 3-3 getElementsByClassName practice
// const pointElements = document.getElementsByClassName('point');
// console.log(pointElements);
// // !!!!!!!!!!要注意大小寫!!!!!!!!!!!!!!!!
// for (let i = 0; i < pointElements.length; i++) {
//     pointElements[i].textContent = 'Updated-title';
// }

//3-4 querySelector#id
const h1Element = document.querySelector('#my-title');
console.log(h1Element);
// h1Element.textContent = 'Hello Women';

// 3-5 querySelector .class
const liElement = document.querySelector('.point');
console.log(liElement);
// liElement.textContent = 'my favorite';

// 3-6 querySelectorAll .class
const liElements = document.querySelectorAll('.point');
console.log(liElements);
liElements.textContent = ' Not Bad';

// liElements.forEach(item => {
//     item.textContent = 'Nothing';
// });
