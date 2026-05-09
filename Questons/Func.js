// Functions
function add(a,b){
    return a+b;
}
let result =add(5,10);
console.log(result);

function add1(a,b){
    console.log(a+b);
}
add1(5,10);

function person(name , age){
    console.log("Name", name);
    console.log("Age", age);
}
person("Simmi", 25);
person("Aaryan", 22);

// Arrow function
const add2 = (a,b) => {
    return a+b;
}   
console.log(add2(5,10));

// Single line arrow function
const add3 = (a,b) => a+b;
console.log(add3(5,10));
