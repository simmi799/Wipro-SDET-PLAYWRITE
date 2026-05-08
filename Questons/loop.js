// Loop Examples
// 1. For Loop
for(let i = 0 ; i<=10;i++){
    console.log(i);
}
// 2. While Loop
let count = 0;
while(count <=10){
    console.log(count);
    count++;
}
// 3. Do-While Loop
// do{
//     code
// }
// while(consition)
let num  = 0;
do{
    console.log(num);
    num++;
}while(num<=15);

// 3.FOR...OF LOOP : ->Used for arrays and strings.(for values of an iterable object)
let fruits = ["Apple", "Banana", "Cherry","Date"];
for(let fruit of fruits){
    console.log(fruit);
}
// 4.FOR...IN LOOP : ->Used for objects.(for keys of an object) for indexes of an array
let person = {
    name :"Simmi",
    age : 25,
    city : "Sitamarhi"


}
for(let key in person){
    console.log(key );
}

// 5. if statement
let age = 18;   
if(age >= 18){
    console.log("You are an adult.");
}
 // 6. if-else statement
let number = 10;
if(number % 2 === 0){
    console.log("Even number");
}else{
    console.log("Odd number");
}
// 7. if-else if-else statement
let score = 85;
if(score >= 90){
    console.log("Grade A");
}else if(score >= 80){
    console.log("Grade B");
}else if(score >= 70){
    console.log("Grade C");
}   else{
    console.log("Grade F");
}       
// 8. Switch Statement
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;  
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;          
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;      
    case 6:
        console.log("Saturday");
        break;  
    case 7:
        console.log("Sunday");
        break;      
    default:
        console.log("Invalid day");
}
// 9. Ternary Operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);   

// 10. Break and Continue
// Break Example
for(let i = 0; i < 10; i++){
    if(i === 5){
        break; // Exit the loop when i is 5
    }   
    console.log(i);
}
// Continue Example
for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        continue; // Skip even numbers
    }
    console.log(i); // This will only log odd numbers
}
// 11. Nested Loops
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 2; j++){    
        console.log(`i: ${i}, j: ${j}`);
    }
}
// 12. Labeled Statements
outerLoop:
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        if(i === 2 && j === 2){
            break outerLoop; // Exit the outer loop when i is 2 and j is 2
        }   
        console.log(`i: ${i}, j: ${j}`);
    }
}