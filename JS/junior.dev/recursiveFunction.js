/* 
a functiom that calls itself

=>since it creates an endless loop
we need to terminate the loop

*/


function salaryGrossPromptProcess(attempt=1);
    { console.log("Enter your gross salary")

    let gross = prompt(`Enter your gross salary`);
    if (isNaN(gross)===false){
        console.log(`You entered ${gross} exiting`)
        return;
    }
    
    salaryGrossPromptProcess();
}

salaryGrossPromptProcess();


function simPin(){
    let pin = prompt(`Enter your sim pin`);
    if (isNaN(pin)!==false){
        console.log(`You entered ${pin} exiting`)
        return;
 }
    
    simPin();
}
simPin();

function factorial(n){
    if (n<1){
        return 1;
    }
    console.log(n)
    return n * factorial(n-1);
}

