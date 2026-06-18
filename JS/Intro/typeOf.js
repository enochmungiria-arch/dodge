/*
-->type of function is used to  show which type a function is
*/
let numb1=900
console.log("numb1",numb1,"its type is",typeof numb1)
let strNumb="854"
console.log("strNumb",strNumb,"its type is",typeof strNumb)
let myName="enoch"
console.log("My name is",myName,"itstype is",typeof myName)
let isMarried=false
console.log("isMarried",isMarried,"its type is",typeof isMarried)
let unValue;
console.log("unValue",unValue,"its type is",typeof unValue)



const bonus="200"
const salary=150000 //instruction
//then console log for the gross salary
const salaryGross=bonus+salary;
console.log("The Gross salary is",salaryGross,"its type",typeof salaryGross)

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