
// Convert JSON string into object.
const jsonString = '{"name":"Simmi","age":21}';
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name);


// Convert object into JSON string.
const student = {
  name: "Simmi",
  age: 21
};
const jsonData = JSON.stringify(student);
console.log(jsonData);

// Question 3:
// Parse API-like JSON data and display values.

const apiData = `{
  "id": 101,
  "name": "Rahul",
  "course": "JavaScript"
}`;
const data = JSON.parse(apiData);
console.log("ID:", data.id);
console.log("Name:", data.name);
console.log("Course:", data.course);

// Question 4:
// Create a JSON array of employee records.

const employees = [
  {
    id: 1,
    name: "Simmi",
    department: "IT"
  },
  {
    id: 2,
    name: "Aman",
    department: "HR"
  },
  {
    id: 3,
    name: "Neha",
    department: "Finance"
  }
];

console.log(employees);

// Question 5:
// Filter JSON data based on conditions.

const employees1 = [
  { name: "Simmi", salary: 50000 },
  { name: "Rahul", salary: 30000 },
  { name: "Anjali", salary: 60000 }
];

const highSalaryEmployees = employees1.filter(
  employee => employee.salary > 40000
);

console.log(highSalaryEmployees);