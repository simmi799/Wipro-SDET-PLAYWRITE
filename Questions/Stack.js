
// // Trace execution order of nested function calls.
function first() {
  console.log("First function");
  second();
  console.log("First function ends");
}
function second() {
  console.log("Second function");
  third();
  console.log("Second function ends");
}
function third() {
  console.log("Third function");
}
first();


// // Create recursive factorial function.

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// // Build recursive Fibonacci function.

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));


// // Simulate stack overflow with recursion.

// function infiniteRecursion() {
//   console.log("Calling...");
//   infiniteRecursion();
// }
// infiniteRecursion();


// // Draw call stack flow for nested functions.

// function one() {
//   two();
// }
// function two() {
//   three();
// }
// function three() {
//   console.log("Inside three");
// }
// one();