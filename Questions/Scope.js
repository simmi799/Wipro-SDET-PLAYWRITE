// 8. Scope & Hoisting
// 1. Predict output of variable hoisting examples.
console.log(x);
var x = 10;

var x;
console.log(x);
x = 10;

// console.log(a);
// let a = 5;

// Create examples showing block scope using let.
{
    let x = 10;
    console.log(x);
}
console.log(x);



// // Write a program demonstrating closure behavior.
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        console.log("Count is:", count);
    }
    return innerFunction; // Important
}
const counter = outerFunction();
counter();
counter();
counter();



// Create nested functions and access outer variables.
function outerFunction() {
    let outerVariable = "I am from outer function";
    function innerFunction() {
        let innerVariable = "I am from inner function";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
}
outerFunction();



// Debug a program with incorrect variable scoping.
function test(){
    if(true){
        var message = "Hello";
    }
    console.log(message);
}
test();

