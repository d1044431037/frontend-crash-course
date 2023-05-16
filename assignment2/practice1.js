// Array
// 1-1 水果陣列
const fruits = ['watermelon', 'strawberry', 'orange', 'grape'];
// 1-2 顯示每個水果
console.log(fruits);
// 1-3 修改第三個水果，改成Durian，列印
fruits.splice(2, 2);
fruits.push('Durian', 'grape');
console.log(fruits);
// 1-4 增加兩個水果
fruits.push('pineapple', 'peach');
console.log(fruits);
// 1-5移除第一個水果
fruits.splice(0, 1);
console.log(fruits);
//1-6 for..while 印出來
// for
for (let i = 0; i < fruits.length; i++) {
    console.log('for :' + fruits[i]);
}
//while
let i = 0;
while (i < fruits.length) {
    console.log('while：' + fruits[i]);
    i++;
}

// 1-7 array 變成次方
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mappedArray = numbers.map((num, index) => {
//     return num * num;
// });
// console.log(mappedArray);

// 1-8把質數印出來
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterArray = numbers.filter((num, index) => {
//     for (let j = 2; j < num; j++) {
//         if (num % j == 0) {
//             index = false;
//         }
//     }
//     return index;
// });
// console.log(filterArray);

// 1-9 把陣列數值相加
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log(sum);
