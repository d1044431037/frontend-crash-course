// practice2-1
let age = 5;
if (age >= 18) {
    console.log('已達可投票年齡');
} else {
    console.log('未達年齡，不可投票');
}

// practice2-2
let num = 65;
a = num % 2;
if (a == 0) {
    console.log(num + '是偶數');
} else {
    console.log(num + '是奇數');
}

// practice2-3
let x = 22;
y = 22;
if (y > x) {
    console.log('y比x還大');
} else if (x > y) {
    console.log('x比y還要大');
} else {
    console.log(' x 跟 y 一樣大');
}

// practice2-4
let x1 = 5;
y1 = 550;
z1 = 60;
if (x1 > y1 && x1 > z1) {
    console.log('x是三個數中的最大值');
} else if (z1 > x1 && z1 > y1) {
    console.log('z是三個數中的最大值');
} else if (y1 > x1 && y1 > z1) {
    console.log(' y是三個數中的最大值');
} else if (x1 == y1 && x1 > z1) {
    console.log('x跟y一樣大且為最大值');
} else if (x1 == z1 && x1 > y1) {
    console.log('x跟z一樣大且為最大值');
} else if (y1 == z1 && y1 > x1) {
    console.log('y跟z一樣大且為最大值');
} else {
    console.log('三個數是相等的');
}
// practice2-5
const start = 1;
const end = 250;
const num1 = 50;

if (num1 >= start && num1 <= end) {
    console.log(num + '在範圍' + start + '跟' + end + '之間');
} else {
    console.log(num + '不在' + start + '跟' + end + '範圍內');
}

// practice2-6
let year = 1997;
let RunYear;
// 閏年4年一次，每個第一百年非閏年，但第四次百年就是閏年
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    RunYear = true;
    console.log('$(year)是閏年');
} else {
    RunYear = false;
    console.log(year + '不是閏年');
}
