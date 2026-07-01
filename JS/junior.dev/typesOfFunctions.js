

/*
we have various types of functions;
1.Named functions
2.Anonymous functions=>without a name
3.Arrow functions
4.high order functions
5.Recursive functions 
6.call backfunctions
*/

//a function can be assigned to a variable.

function areaCircle(r){
    return 3.142*r*r;
}//name function
let age=25;
let SamsAge=age;


let ac=areaCircle;//what is the value of ac and its type?
let k = areaCircle();//it is an expression evaluated to give a value.
console.log(`ac is ${ac}and its type is${typeof ac}`)
console.log (`samsAge is ${SamsAge} and its type is ${typeof SamsAge}`)



/*
creating an anonymous function and 
assigning it a variable name.*/


    

let rA=  function areaRectangle(l,w){
    return l*w;
}

console.log(`rA is ${rA}`)

/*arrow functions
*/
/*
let rA2= (l,w) =>{
    return l*w;
    };
    
*/

