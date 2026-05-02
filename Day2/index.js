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


let arr = [1,2,3,4,5,6, "Simmi"];
arr.filter(x=> typeof x==="number").map(y =>y*2).forEach(z=> console.log("Elements *2:" , z*2));
