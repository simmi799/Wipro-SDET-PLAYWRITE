
// Create a function that returns the greatest of three numbers.
function greatestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(greatestNumber(10, 25, 15));
console.log(greatestNumber(50, 20, 30));


// Write a function to check whether a number is palindrome.
function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    while (num > 0) {
        let digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}
console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 



// Create a reusable function for currency conversion.
function currencyConverter(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    return convertedAmount;
}
let rupees = 1000;
let usdRate = 0.012;
let dollars = currencyConverter(rupees, usdRate);
console.log("Converted Amount:", dollars);


// Write a function that accepts an array and returns only even numbers.
function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(getEvenNumbers(numbers));



// Create a calculator using functions for add, subtract, multiply, and divide.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

console.log("Addition:", add(10, 5));

console.log("Subtraction:", subtract(10, 5));

console.log("Multiplication:", multiply(10, 5));

console.log("Division:", divide(10, 5));
