// ### Question 4: The Automated Payroll Processor
// **Problem Statement:**
// You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback) that applies tax deductions and calculates final payouts.
// **Requirements:**
// 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%.
// 2. The calculatePayroll function should use this callback to process each employee.
// 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard".
// 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees."
// 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.
// **Input Data Example:**
// ```javascript
// const employees = [
//  { id: 101, name: "Alice", salary: 6000 },
//  { id: 102, name: "Bob", salary: 3500 },
//  { id: 103, name: "Charlie", salary: 5200 }
// ];

const employees = [
    { id : 101 ,name : "Alice", salary : 6000},
    { id : 102 , name : "Bob" , salary : 3500},
    { id : 103 , name : "Charlie" , salary : 5200}
];
function taxlogic(salary){
    if(salary > 5000){
        return 0.20;
    }return 0.10;
}
function calculatePayroll(employees , taxcallback){
    let totalNetPayout = 0;
    const processedEmployess  = employees.map(employee =>{
        const taxRate = taxcallback(employee.salary);
        const tax = employee.salary *taxRate;
        const netSalary = employee.salary - tax;
        totalNetPayout += netSalary;
        const status = netSalary > 4000 ? "Premium" : "Standard";
        return {
            ...employee,
            tax : tax,
            netSalary : netSalary,
            status :status
        };
    });
    console.log(`"Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees."`);
    setTimeout(()=>{
        console.log(processedEmployess);
    },2000);
}
calculatePayroll(employees,taxlogic);