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

console.log(color.push("orange"));
console.log(color.pop());
console.log(color.shift());
console.log(color.unshift("purple"));
// console.log(color.splice(1, 0, "pink"));
// console.log(color.splice(1, 3));
console.log(color.indexOf("blue"));
