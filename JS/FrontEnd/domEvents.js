/*
Events -->
you get notified when it  occurs
*/
//you can use get element by event or query selector
function alertMe(e){
    console.log(e);//
    alert("Hi button was clicked")
}
function mouseOverAlert(mick){
    console.log(mick)
    console.log("mouse over",new Date());
    /*addEventListener(param1,param2)
   param1=>event(eg onclick ,mouse-over etc)as a string
   param2=>callback(e)=>is a dom element 

*/
}
    
const btn=document.getElementById("myButton")

btn.addEventListener(`click`,function(event){
    alert(new Date())
});
btn.addEventListener(`mouseover`,function(event){
    console.log(new Date())
})



window.addEventListener("mousemove",(e)=>{
    console.log()


 document.getElementById("x-b")   
})