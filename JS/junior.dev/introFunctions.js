
/*
function timeAlert (){
const date = new Date();
alert(`time stamp: ${date.toISOString()}`);


}
*/
//timeAlert();


function areaOfTriangle(base, height){
    console.log(`base is ${base} and its type ${typeof base}`)
    console.log(`height is ${height} and its type is ${typeof height}`)
    const area= 0.5 * base * height ;
    console.log(
        `for triangle with base ${base} and height ${height} area is ${area}`)
    
}

//scenario 1:
//areaOfTriangle()

//scenario 2
//areaOfTriangle(20)

//scenario 3
//areaOfTriangle(20, 30) 
/*
let base1=50 
let height1=80
let area1=(base1*height1)
console.log(`${area1}`)
*/

let base2="hello"
let height2=true
let area2= (base2*height2)
console.log(`${area2}`)