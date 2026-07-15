/*
Arrays are just objects 
however arrays are specialised
key<number,string,null,boolean,undefined>
the value is any data type
the arrays only use bracket notation
keys are numbers ansd sequential
*/

let array1=[
   make={
   name :"Dodge Challenger srt hellcat",
   model:"srt hellcat redeye"
   },

engine ={
 type:"6.2 litre supercharged HEMI v8",
 induction:"supercharged",
 horsepower:797,
 top_speed:240

},
manufacture={
     manufacturer:"stallantis",
     country:"Otario, Canada"

},

  
  
  alert_info=function(){
    alert(`car ${car.name}
        engine ${car.model}
        
        
        
        `)


  },
  fun_fact= `They have the highest theft rates in the 
  United states of America`


];
console.log(array1.length)

console.log(array1[1])
console.log(array1[2])
console.table(array1[5])

for(let i=0;i<20; i++){
  console.log(array1[i])
}