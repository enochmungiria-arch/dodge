/*
DOM Access using
1.QuerySelector
2.documentGet
*/

const div1=document.getElementById("div1")
const div2=document.querySelector("#div1")//hash tah in a query selector
console.log(div1)
console.log(div2)
//query selector is a jack of all trades
//wyhen using the querselector you add thehash tag 

const select=document.querySelector(".fruits")
const another=document.querySelectorAll(".fruits")
const Idk=document.getElementsByClassName("fruits")

//query selector and query selector all is that the former gives the eresult a s one item but the query selector all ives all the values

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