// 1.Variables & Data Types

// Create a program that swaps two numbers without using a third variable. 
let a = 5;
let b = 10;
a=a+b;
b= a-b;
a=a-b;
console.log("a:", a);   
console.log("b:", b);



// Write a program to check whether a given value is a number, string, boolean, null, or undefined. 
let value = "Simmi";
if(typeof value ==="number"){
    console.log("Value i a number");
}else if(typeof value ==="string"){
    console.log("Value is a string");
}else if(typeof value==="boolean"){
    console.log("value is a boolean");
}else if(typeof value ==="undefined"){
    console.log("Value is undefined");
}else if(value===null){
    console.log("Value is null")
}



// Convert temperature from Celsius to Fahrenheit using variables.
let celsius = 25;
let fahrenheit  = (celsius *9/5)+32;
console.log(fahrenheit);




// Create a simple calculator using variables and arithmetic operators.
let num1  = 10;
let num2 = 5;
console.log("Addition:", num1+num2);
console.log("Subtraction:", num1-num2);
console.log("Multiplication:", num1*num2);
console.log("Division:", num1/num2);
console.log("Remainder:", num1%num2);




// Write a program that takes a user’s birth year and calculates age.
let birthYear = 1990;
let currentYear = new Date().getFullYear();
let age = currentYear-birthYear;
console.log("Your age is:", age);








