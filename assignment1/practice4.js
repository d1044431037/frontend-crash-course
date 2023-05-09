// practice4-1(for)------------------------------
// for (let i = 1; i <= 10000; i++) {
//     console.log(i);
// }
// practice4-1(while)------------------------
// let i = 1;
// while (i <= 10000) {
//     console.log(i);
//     i++;
// }

// practice4-2(for)----------------------
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// practice4-2(while)-----------------------
// let k = 1;
// while (k <= 100) {
//     k++;
//     if (k % 2 == 0) {
//         console.log(k);
//     }
// }

// practice4-3(for)----------------------------
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }
// practice4-3(while)-------------------------
// let k = 1;
// while (k <= 100) {
//     k++;
//     if (k % 2 == 1) {
//         console.log(k - 2);
//     }
// }

// practice4-4(for)-----------------------------
// for (let i = 1; i <= 100; i++) {
//     let num = true; //預設是質數
//     for (let j = 2; j < i; j++) {
//         //if成立的話就不是質數
//         if (i % j == 0) {
//             num = false;
//         }
//     }
//     if (num) {
//         console.log(i);
//     }
// }

// practice4-4(while)---------------------------
// let num = 2;

// while (num <= 100) {
//     let prime = true;
//     let num2 = 2;

//     while (num2 < num) {
//         if (num % num2 === 0) {
//             prime = false;
//             break;
//         }
//         num2++;
//     }
//     if (prime) {
//         console.log(num);
//     }
//     num++;
// }

// practice4-5(for)------------------------------
// let n = 6;
// for (let i = 1; i <= n; i++) {
//     let star = '';
//     for (let j = 1; j <= i; j++) {
//         star += '*';
//     }
//     //     star+="\n";
//     console.log(star);
// }
// practice4-5(while)---------------------------
// let num = 8;
// let i = 1;
// while (i <= num) {
//     let star = '';
//     let j = 1;
//     while (j <= i) {
//         star += '*';
//         j++;
//     }
//     console.log(star);
//     i++;
// }

// practice4-6(for)------------------------------
for (let i = 1; i <= 9; i++) {
    let row = '';
    for (let j = 1; j <= 9; j++) {
        row += i + 'x' + j + '=' + i * j + ' ';
    }
    console.log(row);
}
// practice4-6(while)-----------------------------
let i = 1;
while (i <= 9) {
    let row = '';
    let j = 1;
    while (j <= 9) {
        row += i + 'x' + j + '=' + i * j + ' ';
        j++;
    }
    console.log(row);
    i++;
}
