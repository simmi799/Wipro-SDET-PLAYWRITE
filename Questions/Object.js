
//  5. Objects
// Create an object for a student and display all properties dynamically.
let student ={
    name : "Simmi",
    age : 23,
    course : "B.tech",
    city : "Sitamarhi"
};
for(let key in student){
    console.log(key+ ":" + student[key]);
}



// Count number of keys in an object.
let student ={
    name : "Simmi",
    age : 23,
    course : "B.tech",
    city : "Sitamarhi"
};
let count = Object.keys(student).length;
console.log("Number of keys:", count);



// Merge two objects into one.
let obj1 = {a:1 , b:2}
let obj2 = {c:3,d:4};
let mergedObj = {...obj1, ...obj2};
console.log("Merged Object:", mergedObj);



// Convert an object into an array of keys and values.
let student = {
    name: "Simmi",
    age: 22,
    course: "B.Tech"
};
let entries = Object.entries(student);
console.log("Entries :", entries);



// Create a shopping cart object and calculate total bill amount.
let shoppingCart = {
    item :[
     {name:"Laptop",price:5000 , quantities:1},
     {name :"Phone", price:2000, quantities:2},
     {name :"Headphones", price:500, quantities:3}
    ]
};
let totalBill = 0;
for(let item of shoppingCart.items){
    totalBill += item.price*item.quantities;
}
console.log("Total Bill Amount : ", totalBill);

