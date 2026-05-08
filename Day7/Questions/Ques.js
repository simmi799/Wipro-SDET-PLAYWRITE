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


//2.STRING
// Reverse a string without using built-in reverse methods.
let str = "Hello , world!";
let revesedstr = "";
for(let i =str.length-1; i>=0;i--){
    revesedstr += str[i];
}
console.log(revesedstr);

// Count the number of vowels in a string.
let str2 = "Hello, world!";
let count = 0;
for(let ch of str2){
    if(ch.toLocaleLowerCase() ==='a' || ch.toLocaleLowerCase() ==='e' || ch.toLocaleLowerCase() ==='i' || ch.toLocaleLowerCase() ==='o' || ch.toLocaleLowerCase() ==='u'){
        count++;
    }
}
console.log("Number of vowels:", count);

// Check whether a string is a palindrome.
let str3 = "madam";
let reversedStr3 = "";
for(let  i =str3.length-1;i>=0;i--){
    reversedStr3 += str3[i];
}
if(str3 === reversedStr3){
    console.log(str3,"is a palindrome");
}else{
    console.log(str3,"is not a palindrome");
}

// Capitalize the first letter of every word in a sentence.
let sentence = "hello world from javascript";
let words = sentence.split(" ");
let result = "";
for(let word of words){
   result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log(result);