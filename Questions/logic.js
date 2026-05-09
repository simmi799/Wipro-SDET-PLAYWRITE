// Logic Building Challenges 
// 1. Find missing number in array. 
let arr3 = [1, 2, 3, 5];
let n = 5;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr3.reduce((sum, num) => sum + num, 0);
let missingNumber = expectedSum - actualSum;
console.log("Missing Number:", missingNumber);

// 2. Check whether two strings are anagrams.
 let str1 = "listen";
let str2 = "silent";
let sorted1 = str1.split("").sort().join("");
let sorted2 = str2.split("").sort().join("");
if (sorted1 === sorted2) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}


// 3. Rotate array by k positions. 
let arr = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
console.log(rotatedArray);


// 4. Find duplicate elements in array. 
let arr1 = [1, 2, 3, 2, 4, 5, 1];
let duplicates = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] === arr[j] && !duplicates.includes(arr1[i])) {
            duplicates.push(arr1[i]);
        }
    }
}
console.log("Duplicates:", duplicates);


// 5. Flatten nested arrays manually. 
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = [];
for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        flatArray.push(nestedArray[i][j]);
    }
}
console.log(flatArray);