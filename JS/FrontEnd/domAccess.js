/*
DOM Access using
1.QuerySelector
2.documentGet
*/

const div1=document.getElementById("div1")
const div2=document.querySelector("#div1")
console.log(div1)
console.log(div2)


const select=document.querySelector(".fruits")
const another=document.querySelectorAll(".fruits")
const Idk=document.getElementsByClassName("fruits")


console.log(select)
console.log(another)
console.log(Idk)





const otherFruits=["Dragonfruit","pomegranate","orange"]
const originalDiv=document.querySelector("#div1").innerHTML

function original(){
    console.log(`original clicked`)
document.querySelector("#div1").innerHTML=originalDiv;
}
function replace(){
    const newHTML=`
    <h3>New list</h3>
    <ul>
    <li class="otherFruits">Dragonfruit</l1>
    <li class="otherFruits">pomegranate </l1>
    <li class="otherFruits">orange</l1>

    </ul>
`
document.querySelector("#div1").innerHTML=newHTML;

}
function moreFruits(){
    console.log(`moreFruits clicked`)
}