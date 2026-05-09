//  1Student Grade Calculator
let marks = [85, 90, 78, 88, 95];
let total = marks.reduce((sum, mark) => sum + mark, 0);
let percentage = total / marks.length;
let grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 75) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}
console.log("Total:", total);
console.log("Percentage:", percentage);
console.log("Grade:", grade);

// 2. ATM Withdrawal Simulator
let balance = 5000;
let withdraw = 2000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

// 3. To-Do List using Arrays
let todoList = [];
todoList.push("Study JavaScript");
todoList.push("Practice Coding");
console.log("Tasks:", todoList);
todoList.splice(0, 1);
console.log("Updated Tasks:", todoList);

// 4. Password Generator
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
let password = "";
for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
}
console.log("Generated Password:", password);

// 5. Quiz Application
let questions = [
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "Capital of India?",
        answer: "Delhi"
    }
];
let score = 0;
let userAnswers = ["4", "Delhi"];
for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
        score++;
    }
}
console.log("Final Score:", score);