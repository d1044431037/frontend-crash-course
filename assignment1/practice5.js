// practice5-1
const isEven = number => {
    return number % 2 === 0;
};
console.log(isEven(3));

// practice5-2
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeapYear(1600));

// practice5-3
const isPrime = number => {
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(67));

// practice5-4
const findMax = (num1, num2, num3) => {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
};
console.log(findMax(155, 156, 98));
