
// Loops
// Print star pyramid patterns.
let rows = 5;
for(let i=1;i<=rows;i++){
    let pattern = "";
    for(let j=1;j<=rows-i;j++){
        pattern += " ";
    }
    for(let k=1;k<=2*i-1;k++){
        pattern += "* ";
    }
    console.log(pattern);
}

// Print multiplication tables from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log("Table of", i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("----------------");
}

// Find sum of all even numbers between 1 and 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum of even numbers from 1 to 100 is:", sum);
// Sum of all even numbers between 1 and 100 using formula

let n = 50; 
let a = 2; 
let l = 100;
let sum = (n / 2) * (a + l);
console.log("Sum of even numbers:", sum);


// Print all prime numbers between 1 and 100.
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


// Create a number guessing game using loops.
// let secretNumber = 7;
// let guess;
// while (guess !== secretNumber) {
//     guess = Number(prompt("Enter your guess number:"));
//     if (guess === secretNumber) {
//         console.log("Congratulations! You guessed the correct number.");
//     } else if (guess > secretNumber) {
//         console.log("Too high! Try again.");
//     } else {
//         console.log("Too low! Try again.");
//     }
// }