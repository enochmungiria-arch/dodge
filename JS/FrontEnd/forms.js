

document.getElementById("form1").addEventListener("submit",submitform);

document.getElementById("form1input1").addEventListener("input",(e)=>{
    console.log(e.target.value);
})
function submitform(e){

    e.preventDefault()

    const inputList =document.querySelector("#form1").querySelectorAll("input");



const input1=inputList[0]
const input2=inputList[1]

console.log(`input 1`,input1.value)
console.log(`input 2`,input2.value)
console.log("f1 input1",document.getElementById("form1input1").value);
console.log("f1 input2",document.getElementById("form1input2").value)
input1,value="cats and dogs";
}
