


let grossMonthlySalary = null;
while(true){
    let gross=prompt("Enter your gross salary");
    if (!isNaN(gross)){
        gross=Number(gross);
        if (gross>0){grossMonthlySalary=gross;
            break;
        }
    }
    alert(`Invalid amount 
    Ensure to write a number greater than 0`)

}
console.log(`The gross salary is${grossMonthlySalary}and its type is ${typeof grossMonthlySalary}`)

nssf=null
employerContribution=nssf
let tier1=9000
let tier2=108000

if (grossMonthlySalary<=tier1){
    nssf=(tier1*0.06)
}
else if(grossMonthlySalary<=tier2){
let secondNSSF=tier2-tier1
nssf=secondNSSF*0.06
}

else if(grossMonthlysalary>tier2){

    nssf=6840
}



//paye calculator
let paye=null;
let taxableIncome=null;

const bracket1=24000
const bracket2=32333
const bracket3=500000
const bracket4=800000

const band1=bracket1*0.1
const band2=(bracket2-bracket1)*0.25
const band3=(bracket3-bracket2)*0.3
const band4=(bracket4-bracket3)*0.325

const personalRelief=2400

 if(taxableIncome<=bracket1){
    paye=taxableIncome*0.1
}

else if (taxableIncome<=bracket2){
    let diff=taxableIncome-bracket1
    let tax=diff*0.25
    let paye=tax+band1
}

else if (taxableIncome<=bracket3){
    let diff=taxableIncome-bracket2
    let tax=diff*0.3
    let paye=tax+band1+band2
}

else if (taxableIncome<=bracket4){
    let diff=taxableIncome-bracket3
    let tax=diff*0.325
    let paye=tax+band1+band2+band3
}
else{
    let diff=taxableIncome-bracket4
    let tax=diff*0.35
    let paye=tax+band1+band2+band3+band4


    let totalPaye=paye-personalRelief


const shif=grossMonthlySalary*0.0275
const housingLevy=grossMonthlySalary*0.015

totalDeductions=nssf+totalPaye+shif+housingLevy
netPay=(grossMonthlySalary-totalDeductions)


}
alert (`taxable income is ${taxableIncome}
    paye is ${paye}
    total paye is ${totalPaye}
    net pay is ${netPay} 
    `)



