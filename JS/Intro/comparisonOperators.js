/*
comparison operators-->they evaluate to either
true or false.
1.Equality (==)
2.Strict equality(===)
3.Inequality (!=)
4.Strict Inequality(!==)
*/

let numb1=66
let numb2="66"

let strictEqual=numb1===numb2
console.log(`numb1= ${numb1}===numb2=${numb2} 
 Ans ${strictEqual} its type is ${typeof strictEqual}`)

 let nonStrictEqual=numb1==numb2
 console.log(`numb1 is ${numb1}==numb2=${numb2}
    Ans ${nonStrictEqual} and its type is ${typeof nonStrictEqual}`)

    //strict and non strict inequalities
    let numb3=77
    let numb4="77"
    let strictInequal=numb3!==numb4
    console.log(`numb3 is ${numb3}!==numb4 which is not equal to ${numb4}
        Ans is ${strictInequal} and its type is ${typeof strictInequal} 
    `)

    let Inequal=numb3!=numb4
    console.log(`numb3 is ${numb3} != numb4 which is ${numb4} Ans is ${Inequal}
        and its type is ${typeof Inequal}`)


let numb5=51
let numb6=10
let str1="a"
let str2="b"
console.log (`numb5=${numb5} and numb6=${numb6}`)
console.log (`str1=${str1} and str2=${str2}`)

console.log (`numb5>numb6 ${numb5>numb6}`)
console.log (`str1>str2 ${str1>str2}`)

console.log (`numb<numb6 ${numb5<numb6}`)
console.log (`str1<str2 ${str1<str2}`)

console.log(`numb5>=numb6 ${numb5>=numb6}`)
console.log(`str1>=str2   ${str1>=str2}`)

console.log(`numb5<=numb6 ${numb5<=numb6}`)
console.log(`str1<=str2   ${str1<=str2}`)


