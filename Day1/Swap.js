let a = 5;
let b = 15;
 console.log("before swap a = ",a);
 console.log("before swap b = ",b);

 let temp = a;
 a=b;
 b=temp;
 console.log("after swap a = ",a);
 console.log("after swap b = ",b);


function checkType(value) {
    if (typeof value === "number") {
        console.log("This is a number");
    } else if (typeof value === "string") {
        console.log("This is a string");
    } else {
        console.log("Other data type");
    }
}

checkType(25);       
checkType("Simmi");   