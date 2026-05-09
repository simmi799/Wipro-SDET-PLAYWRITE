// Create a delayed greeting message using setTimeout.

setTimeout(function () {
    console.log("Hello Simmi! Welcome to JavaScript.");
}, 3000); // 3000 milliseconds = 3 seconds


// Build a countdown timer.
let count = 10;
let timer = setInterval(function () {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);

// Create a callback-based calculator.


function calculator(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
console.log("Addition:", calculator(10, 5, add));
console.log("Subtraction:", calculator(10, 5, subtract));
console.log("Multiplication:", calculator(10, 5, multiply));
console.log("Division:", calculator(10, 5, divide));

// const cal ={
//     sum : (a,b) => a+b,
//     sub: (a,b) => a-b,

// }
// console.log(cal.sum(5,5));

const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));



// Food ordering system using callbacks

function placeOrder(order, callback) {
    console.log("Order received for:", order);

    setTimeout(function () {
        callback(order);
    }, 3000);
}
function prepareFood(order) {
    console.log(order + " is ready!");
}
placeOrder("Pizza", prepareFood);


// Execute functions sequentially using callbacks.


function first(callback) {
    console.log("First function executed");

    callback();
}
function second(callback) {
    console.log("Second function executed");

    callback();
}
function third() {
    console.log("Third function executed");
}
first(function () {
    second(function () {
        third();
    });
});
 
// Execute functions sequentially using callbacks.
function step1(callback) {
    console.log("Step 1 completed");
    callback();
}
function step2(callback) {
    console.log("Step 2 completed");
    callback();
}
function step3() {
    console.log("Step 3 completed");
}
step1(function () {
    step2(function () {
        step3();
    });
});