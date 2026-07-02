

/* a call back fuction is a function that is passed as an argument to an other function and is executed after somthing has happened when a certain 
event occurs.*/
/*
function showCurrentTime(){
 let currentTime=new Date();
 console.log(`current time is ${currentTime}`)   
*/



 let interval =setInterval(()=>{
 let currentTime=new Date();
 console.log(`current time is ${currentTime}`);},5000)//call back function.

//set interval is an inbuilt function.
//it has two parameters ;
//para1: the function to execute
//para2: the delay in milliseconds
//=>to clear an interval function we use thre 
//clae interval function and pass the command.

let clearInterval=interval

/*set timeout function  executes a function after a 
certain delay in milliseconds.
it happens on;ly once

*/
setTimeout(reminderCreateAnAccount,5000)