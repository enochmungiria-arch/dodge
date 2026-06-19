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
    console.log(`numb3 is equal to ${numb3}!==numb4 which is equal to ${numb4}
        Ans is ${strictInequal} and its type is ${typeof strictInequal} 
    `)

    let nonStrictInequal=numb3!=numb4
    console.log(`numb3 is ${numb3} != numb4 which is ${numb4} Ans is ${nonStrictInequal}
        and its type is ${typeof nonStrictInequal}`)