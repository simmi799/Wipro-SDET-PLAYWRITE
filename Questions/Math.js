// 3. Numbers & Math
// Generate a random number between 1 and 100.
let randomNum = Math.floor(Math.random()*100)+1;
console.log("Random Number beyween 1 to 100 is :", randomNum);



// Check whether a number is prime.
function isPrime(num){
    if(num <= 1)
        return false;
    for(let i = 2; i<=Math.sqrt(num);i++){
        if(num % i===0)
            return false;
   }
   return true;
}
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(10));



// Find factorial of a number using loops.
function factorial(num){
    let fact =1;
    for(let i = 1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(10));



//  Find Fibonacci series up to n numbers.
function fibonacci(n){
    let a = 0, b = 1;
    for(let i = 1 ;i<=n;i++){
        console.log(a);
        let next = a+b;
        a = b;
        b= next;
    }
}
fibonacci(10);



// Check whether a number is Armstrong number.
function isArmstrong(num){
    let strNum = num.toString();
    let power = strNum.length;
    let sum = 0;
    for(let digit of strNum){
        sum +=digit ** power; 
    }
    return sum===num;
}
console.log(isArmstrong(153));
console.log(isArmstrong(123));

