let a = "Simmi";
let b = "summi";
let c =  "sharma";
let p = a+","+b+","+"and "+c;
console.log(p);
let k = `good  morning ${a} , ${b} and ${c}`;
console.log(k);


function table(num){
    let result = "";
    for(let i=1; i<=10; i++){
        result += `${num} x ${i} = ${num*i}\n`;
    }
    return result;
}
console.log(table(20));


// function sum(a , b){
//     return a + b;
// }
// console.log(sum(5,10));

// let sum= (x,y) => x+y;
// console.log(sum(5,10));


// let arr = [1,2,3,4,5,6, "Simmi"];
// arr.filter(x=> typeof x==="number").map(y =>y*2).forEach(z=> console.log("Elements *2:" , z*2));


let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val));

console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.ceil(4.2)); 
console.log(Math.ceil(7.8)); 
console.log(Math.ceil(5)); 
console.log(Math.floor(Math.random() * 100));  

console.log(parseInt("45.67"));  
console.log(parseInt("100px"));  
console.log(parseInt("abc"));    

let color= ["green", "red", "blue", "yellow"];

color.push("orange");
console.log(color);
console.log(color.includes("red"));
console.log(color.pop());
console.log(color.shift());
console.log(color.unshift("purple"));
// console.log(color.splice(1, 0, "pink"));
// console.log(color.splice(1, 3));
console.log(color.indexOf("blue"));

const prices = [10, 20, 30, 40]; // tasks: find the total of all elements
// let s = 0;
// for (let i = 0; i < prices.length; i++) {
//     s += prices[i]; // s = s + prices[i]
// }

const total = prices.reduce((acc, curr) => { return acc + curr }, 0);
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100
console.log(total);
// console.log("Sum:", s);

const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'banana', 'pineapple']; // apple: 3, banana: 3, cherry: 1, pineapple: 1
const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // intial value of acc is an empty object
console.log(tally);
// {}
// {apple: 3, banana: 2, cherry: 1, pineapple: 1}

// function b(a, c) {
//     return a * c * 2;
// }
// function a(b, c) {
//     return b(a(1, 2), c);
// }

