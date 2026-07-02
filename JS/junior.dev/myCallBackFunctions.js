/* 
our own callback functions
doing shape stuff
1. circle 
2. rectangle
3. triangle


=> creation of area functions using 
arrow functions and call back functions
*/
/*
function areaCircle(r){
    return 3.142*r*r;//name function

}
*/



//alternatively;
//use of the arrow function to create an anonymous 
//function to calculate area.


const circleArea =(r) =>{
    return 3.142*r*r;
}

    

   const rectangleArea = (l,w) => 
    {return l*w;
        console.log(`area of rectangle is ${rectangleArea(l, w)}`)
    }
    

    const triangleArea = (b,h) =>
    {return 0.5*b*h;
        console.log(`area of triangle ${triangleArea}(b,h)`)
}


//superfunction shape;
function shape(shapeFunction,shapeName,side1,side2,side3){


console.log(`shapefunction ${shapeFunction} and its a ${typeof shapeFunction}`)
console.log(`shapename ${shapeName} and its a ${typeof shapeName}`)
console.log(`side1 ${side1} and its a ${typeof side1}`)
console.log(`side2 ${side2} and its a ${typeof side2}`)
console.log(`side3 ${side3} and its a ${typeof side3}`)
const result = shapeFunction(side1,side2,side3)
console.log(`for shape${shapeName} area is ${result}`)
}

shape(circleArea,"circle",10)

