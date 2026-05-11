function welcome (name = "Guest"){
        console.log()
}
welcome("Simmi");
welcome("Sharma");
welcome();


const nums = [1,2,3,4,5,6];  // spread operator
const newNums = [...nums , 8 , 9 , 10];
console.log(newNums);


const obj = { name : " Shiv" , age : 52};
const updatedObj= {...obj ,name :" Shankara", age: 25};
console.log(updatedObj);

const cal = { // rest operator
    sum :(...nums) => nums.reduce((a,b)=> a+b , 0), // rest parameters

}

console.log("Rest operator");
console.log(cal.sum(1,5,36,78));



// destructuring
// const arr = ["Arun", "Bhavi", "Chandru", "Dhanush"];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth, fifth] = ["Simmi", "Summi", "Sharma", "Kumari"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log("\n4. Destructuring:");
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

const { name, age } = {name: "shiva", age: 22}; // key-based extracted
console.log(name, age);