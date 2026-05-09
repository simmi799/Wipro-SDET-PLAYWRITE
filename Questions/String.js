//  2.STRING
// Reverse a string without using built-in reverse methods.
let str = "Hello , world!";
let revesedstr = "";
for(let i =str.length-1; i>=0;i--){
    revesedstr += str[i];
}
console.log(revesedstr);




// Count the number of vowels in a string.
let str2 = "Hello, world!";
let count = 0;
for(let ch of str2){
    if(ch.toLocaleLowerCase() ==='a' || ch.toLocaleLowerCase() ==='e' || ch.toLocaleLowerCase() ==='i' || ch.toLocaleLowerCase() ==='o' || ch.toLocaleLowerCase() ==='u'){
        count++;
    }
}
console.log("Number of vowels:", count);



// Check whether a string is a palindrome.
let str3 = "madam";
let reversedStr3 = "";
for(let  i =str3.length-1;i>=0;i--){
    reversedStr3 += str3[i];
}
if(str3 === reversedStr3){
    console.log(str3,"is a palindrome");
}else{
    console.log(str3,"is not a palindrome");
}



// Capitalize the first letter of every word in a sentence.
let sentence = "hello world from javascript";
let words = sentence.split(" ");
let result = "";
for(let word of words){
   result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log(result);



// Find the longest word in a sentence.
let sentence2 = "The quick brown fox jumps over the lazy dog";
let word2 = sentence.split(" ");
let longestword = "";
for(let word of word2){
    if(word.length >longestword.length){
        longestword = word;
    }
}console.log("Longest word:", longestword);

