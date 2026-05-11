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