/* 
a functiom that calls itself

=>since it creates an endless loop
we need to terminate the loop

*/


function salaryGrossPromptProcess(attempt=0){
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


