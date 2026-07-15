/*
Events -->
you get notified when it  occurs
*/

function alertMe(e){
    console.log(e);//
    alert("Hi button was clicked")
}
function mouseOverAlert(mick){
    console.log(mick)
    console.log("mouse over",new Date());


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
})