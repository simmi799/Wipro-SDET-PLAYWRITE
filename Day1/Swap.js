// The Swapper: Create two variables, a and b, and assign them numbers. Write a few lines of code to swap their values so that a gets b's value and vice-versa.
let a = 5;
let b = 15;
 console.log("before swap a = ",a);
 console.log("before swap b = ",b);

 let temp = a;
 a=b;
 b=temp;
 console.log("after swap a = ",a);
 console.log("after swap b = ",b);


//  Type Checker: Write a function that takes one input and console.log's a message saying "This is a number" or "This is a string" based on the data type provided.
 
function checkType(value) {
    if (typeof value === "number") {
        console.log("This is a number");
    } else if (typeof value === "string") {
        console.log("This is a string");
    } else {
        console.log("Other data type");
    }
}

checkType(25);       
checkType("Simmi");   



// Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD"


let fullName = "John Doe";
let initials = fullName[0] + fullName[5];
console.log(initials); 

// The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.

let messy = " Javascript is fun ";
let clean = messy.trim().toLowerCase();
console.log(clean); 

// The Grocery List: Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added
let cart = ["Bread", "Butter", "Rice"];
cart.push("Milk");
cart.unshift("Eggs");
cart.pop();
console.log(cart);

// Value Finder: Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exists in the array (returning true or false) and another line to find the index of the number 50.

let numbers = [10, 20, 30, 40, 50];
let hasThirty = numbers.includes(30);
let indexOfFifty = numbers.indexOf(50);
console.log(hasThirty);     
console.log(indexOfFifty); 