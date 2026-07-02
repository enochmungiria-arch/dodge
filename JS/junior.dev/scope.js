//Global scope variablescan be accessed from anywhere.

//block scope is anything inside the callibrases.
/*
In situations with both the global scope and block
scope the block scope preceeds the global scope.
*/

//Example;
const pi = 3.142//global scope
function areaCircle(r){
    const pi = 3.142;// this is the block scope value.
    return pi*r*r;
//=> in such a scenario the block scope wil preceed the global scope.

}
 /*
the blockscope also comes from the innermost callibrases to the outermost
 one.also

*/
//Example2;
function prop(){
    let greeting ="hello everyone";//outer block scope
    if (true){
        let greeting = 30//inner block scope
       
       console.log(`greeting is ${greeting}`)
       
        /*
        hence the inner block scope will appear as the
        value for the variable greeting.
       
        */
    }
}
prop();


let name = "Enoch"//global scope

function sayMyName(){
    
let name = "Maggy";//outer block scope
console.log(`name ${name} line ${45} `)
if (true){
    let name = "Delilah"// inner block scope
    console.log(`name ${name} line ${48}`)
if (true){
    let name = "jared"//innermost block scope
    console.log(`name is  ${name} line ${51}`)
}
}
console.log (`name ${name} line ${54}`)
//in the same scope the value of the name  is going to be maggie

}

sayMyName();