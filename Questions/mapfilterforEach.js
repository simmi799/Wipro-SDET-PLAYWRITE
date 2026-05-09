// Double all numbers in an array using map().

let number = [1 ,2,3,4,5,6];
let double = number.map(num=>num*2);
console.log(double);

// Filter all students scoring above 80 marks
let students = [
    {name : "Simmi" , marks: 95 },
    {name : "Summi" , marks : 85},
    {name : "Anjali" , marks : 65}
]
const result = students.filter(student => student.marks > 80);
console.log(result);


// Print all array values using forEach(). 
const numbers = [10,20,30,40,50,86];
numbers.forEach(function(value){
    console.log(value);
});


// Convert array of names into uppercase. 
const names = ["simmi", "sharma", "kumari"];
const upperCase = names.map(name => name.toUpperCase());
console.log(upperCase);

// Extract only even numbers using filter().
const num = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = num.filter(number=> number%2===0);
console.log(evenNumber);