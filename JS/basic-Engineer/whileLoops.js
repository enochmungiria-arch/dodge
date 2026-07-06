/*
Loops: they run a code over and over again
you should not loop <infinity>:
but an exit condition
while(<condition>){
/block of code}
*/


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
    
/*
    
    function table1(){
let x = prompt("Enter a valid number x")
if (isNaN(x)!== false){
        console.log(`Invalid value for x
    Re-enter the value for x`)}

 else if(x=Number){
    prompt("Enter a valid number y")


  }

}
    
 table2() 
 
 function table2(number1, number2){
    number1=5
    number2=3



 }
    
*/