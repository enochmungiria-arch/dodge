/*console log-->Used in debugging by printing output on the screen

Ensure to use your console in such a way that it helps you figure out the issue

-->calculate net salary
*/

const salaryGross=150000 //instruction
//then console log for the gross salary
console.log("The Gross salary is",salaryGross)

//Tax values
const paye=salaryGross*0.16
console.log("the paye is",paye)
//NHIF tax deduction
const NHIF=8000
console.log("the NHIF deduction is",NHIF)
const SHA=4500
console.log("SHA deductions are",SHA)
const totalDeductions=paye+NHIF+SHA
console.log("the total deductions are",totalDeductions)
const netSalary=salaryGross-totalDeductions
console.log("the net income is",netSalary)