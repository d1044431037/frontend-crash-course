// 4-2 paragraph +to container
const containerElement = document.querySelector('.container');
console.log(containerElement); //確認東西在不在

const paragraph = document.createElement('p'); //建立一個標籤p
const text = document.createTextNode('My first DOM created'); //建立一個text內容
paragraph.appendChild(text); //把內容放到p裡面
containerElement.appendChild(paragraph); //把p丟到container裡面

// 4-3 ul tag
const ulElement = document.createElement('ul');
containerElement.appendChild(ulElement);

// 4-4 li*3 tag
const colors = ['red', 'yellow', 'blue'];
for (let i = 0; i < colors.length; i++) {
    const liElements = document.createElement('li');
    liElements.style.color = colors[i];
    ulElement.appendChild(liElements);
}
