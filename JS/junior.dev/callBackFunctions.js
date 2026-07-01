

/* a call back fuction is a function that is passed as an argument to an other function and is executed after somthing has happened when a certain 
event occurs.*/
function showCurrentTime(){
 let currentTime=new Date();
 console.log(`current time is ${currentTime}`)   
}
setInterval(showCurrentTime,5000)