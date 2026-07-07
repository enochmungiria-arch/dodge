/*
Mostly meant for numbers
*/
/*
let k = 0;

while (k<20){
    console.log(`k is ${k}`)
     k = k+1


}

for(let k=0; k<20;k=k+1){
    console.log(`k is ${k}`)
}

*/

function promptStudents(){
let num1=null;
let num2= null;

while(true){
    num1 = prompt("Enter a valid first number")
    if (isNaN(num1)!== false)
        {continue;
        }

num2 = prompt("Enter a valid second number")
    if (isNaN(num2)!== false){
        continue;
    }
num1= parseInt(num1)
num2= parseInt(num2)

if (num1<=0||num2<=0){
    continue;

}
break;


}
console.log(`Entered valid number ${num1}, ${num2}`)


    printTable(num1,num2)
}

function printTable (num1,num2){
if (!num1||num1<0||!num2||num2<0){
    console.error(`Ensure to use numbers greater than 0`)
    return;
}

for(let i= 1;i<=num1;i++){
for(let j = 1;j<=num2;i++){
    console.log(`${i}*${j} =${i*j}`)

}
}

l
}

promptStudents()



