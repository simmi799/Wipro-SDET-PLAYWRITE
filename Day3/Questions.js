// 1. Logging Names** Given an array const names = ['Alice', 'Bob', 'Charlie'];, use .forEach() to log each name to the console with the prefix "Hello, ".
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log("Hello, " + name));


// Temperature Conversion**
// You have an array of temperatures in Celsius: [0, 10, 20, 30]. Use .map() to create a new array where each temperature is converted to Fahrenheit.
// *(Formula: F = C \times 1.8 + 32)*

const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => temp * 1.8 + 32);
console.log(fahrenheit);




// Level 2: Data Filtering**
// **3. Finding Adults**
// Given an array of objects:
// const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
// Use .filter() to create a new array containing only the users who are 18 or older.
const users = [{ name:'Li' , age : 16},
    {name: 'Dan' , age : 22},
    {name : 'Saran' , age : 17}];
    const above18 = users.filter(user => user.age >=18);

    console.log(above18);


//     **4. String Lengths**
// Write a function that takes an array of strings and uses .filter() to return only the strings that have more than 5 characters.
function filterLS(arr) {
    return arr.filter(str => str.length>5);
}
const words = ["simmii" , "hyen" , "Sharma" ,"Sushama" , "Roy"];
console.log(filterLS(words));

// Level 3: The Power of Reduce**
// **5. Total Cost**
// Given an array of prices [19.99, 5.50, 3.99, 25.00], use .reduce() to calculate the total sum of the items.
const prices = [19.99, 5.50, 3.99, 25.00];
const tc = prices.reduce((sum, price) => sum + price, 0);
console.log(tc);

// **6. Counting Occurrences**
// Use .reduce() to count how many times the word "apple" appears in this array:
// ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'].
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const countApple = fruits.reduce((count, fruit) => {    
    if (fruit === 'apple') {
        return count + 1;
    }
    return count;
}, 0);
console.log(countApple);


const fruit = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const count = fruit.reduce((total, fruit) => 
    fruit === 'apple' ? total + 1 : total
, 0);
console.log(count); // 3

// ### **Level 4: Advanced Scenarios** **7. Array Transformation** Given an array of numbers [1, 2, 3, 4, 5, 6], use a combination of .filter() and .map() to: 1. Keep only the even numbers. 2. Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
    .filter(num => num % 2 === 0)    
    .map(num => num * num);         
console.log(result); 

// **8. Object Extraction**
// You have an array of "Product" objects:
// [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }]
// Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];
const titles = products.map(product => product.title);
console.log(titles);

// ### **Level 5: Logic Challenges**
// **9. The Average**
// Write a short script using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].
const score = [80, 90, 70, 100];
const average = score.reduce((sum, s) => sum + s, 0) / score.length;
console.log(average);




// **10. Flattening (The Bonus)**
// Without using the built-in .flat() method, use .reduce() to turn this nested array into a single flat array:
// [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]
const nested = [[1, 2], [3, 4], [5, 6]];
const flatArray = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray);