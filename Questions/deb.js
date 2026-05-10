// Fix an infinite loop issue.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++; 
}
// 2. Identify why undefined is returned from a function.
// function add(a, b) {
//     let sum = a + b;
// }

// console.log(add(2, 3));
function add(a, b) {
    let sum = a + b;
    return sum;
}

console.log(add(2, 3));

//  3. Debug incorrect array sorting behavior. 
let numbers = [1, 5, 12, 2, 25];
numbers.sort((a, b) => a - b);
console.log(numbers);

//  4. Resolve scope-related variable issues. 
 function test() {
    let message;
    if (true) {
        message = "Hello";
    }
    console.log(message);
}
test();


//  5. Fix callback execution order problem. code in js with question
function fetchData(callback) {
    setTimeout(() => {
        let data = "Data loaded";
        callback(data);
    }, 2000);

}
fetchData((result) => {
    console.log(result);
});