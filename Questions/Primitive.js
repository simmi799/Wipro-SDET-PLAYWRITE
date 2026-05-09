// Create examples showing primitive copying behavior. 
let a = 10;
let b = a; 
console.log("Before change:");
console.log(a); 
console.log(b); 
b = 20; 
console.log("After change:");
console.log(a); 
console.log(b); 



let firstName = "Simmi";
let secondName = firstName;

console.log(firstName);  
console.log(secondName); 
secondName = "Kumari";
console.log(firstName);  
console.log(secondName); 


// Create examples showing object reference behavior. 
let student1 = {
  name: "Simmi",
  marks: 85
};
let student2 = student1;
console.log("Before change:");
console.log(student1);
console.log(student2);
student2.marks = 95;
console.log("After change:");
console.log(student1);
console.log(student2);

// Clone an object without affecting original object. 
const original = {
  name: "Simmi",
  marks: 85
};
const cloned = { ...original };
cloned.marks = 95;
console.log("Original Object:");
console.log(original);
console.log("Cloned Object:");
console.log(cloned);

// Compare arrays using reference equality. 

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;
console.log(arr1 === arr2); 
console.log(arr1 === arr3); 

//  Demonstrate shallow copy using spread operator. 

const original1 = {
  name: "Simmi",
  address: {
    city: "Patna"
  }
};
const copied = { ...original1 };
copied.name = "Rahul"; 
copied.address.city = "Delhi"; 
console.log("Original Object:");
console.log(original1);
console.log("Copied Object:");
console.log(copied);