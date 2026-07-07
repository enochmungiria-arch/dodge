/*
Loops: they run a code over and over again
you should not loop <infinity>:
but an exit condition
while(<condition>){
/block of code}


let n = 0
let condition = true;
while (condition)
{console.log (`n is ${n}`)
n = n+1;
if(n>100){
    condition = false;
}

}


let k=15
let answer=true;
while(answer){
    console.log(`the value of k is ${k}`)
    k=k-1;
    if (k<0){
        answer=false
    }

} 


function timeBomb(k){
    let countdown=0
    let time=true
    
    while(time){

        k=k-1
        console.log(`timebomb value is ${k}`)
        if (k<countdown){time=false}

    
    
    }
        
            

    }
    
    timeBomb(20)
    
    

    
    function table1(){
let x = prompt("Enter a valid number x")
if (isNaN(x)!== false){continue;

}


 else if(x=Number){
    prompt("Enter a valid number y")

return;
  }

}
    
 table1()
 
 
 function table2(number1, number2){
 if(typeof number1!=="number"||
    number1<=1 ){
        console.log(`incorrect value for number2`)
        return;
    }
    if(typeof number2!=="number"||
        number2<=1
    )
    {
        console.log (`Incorrect value for number2`)
        return;
    }
    console.log(`${number1}*${number2}=${number1*number2}`)


  
}
    
table2()

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



let outerLoop = num1;


while(outerLoop>0){
    let innerLoop=num2;
    while(innerLoop>0){
        console.log(`outerloop is ${outerLoop} and innerLoop is ${innerLoop}`)
console.log(`${outerLoop}*${innerLoop}=${outerLoop*innerLoop}`)
 innerLoop=innerLoop-1;  
}

    outerLoop= outerLoop -1;
}
}

promptStudents()
