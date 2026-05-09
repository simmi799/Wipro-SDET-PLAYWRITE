// Convert normal functions into arrow functions.
function add(a, b) {
    return a + b;
}
// const add = (a, b) => {
//     return a + b;
// };
console.log(add(5, 3));

// Create one-line arrow functions with implicit return.
// const add = (a, b) => a + b;
// console.log(add(5, 3));

// Use arrow functions with map().
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared);


// Build an even/odd checker using arrow functions.
// Even/Odd checker using arrow function

const isEvenOrOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(7));

// Create a student grade calculator using arrow functions.
const getGrade = marks => {
    return marks >= 90 ? "A" :
           marks >= 80 ? "B" :
           marks >= 70 ? "C" :
           marks >= 60 ? "D" :
           "Fail";
};
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(74));
console.log(getGrade(61));
console.log(getGrade(45));