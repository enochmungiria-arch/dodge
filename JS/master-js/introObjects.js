/*
objects are complex datatypes
it is a datatype that houses other datatypes


-in real life you cannot really express other datatypes in a single  dantatype
they consost of a 
1.key/property
2.Value
key-->number or string; it is unique
value-->any other data types<boolean, string , null, object>can be a function


eg:

Name="enoch"
key =name
value = "enoch"(string)

*/




//why objects are useful.
//1. if you want to represent a complex datatype

//Best developersa re lazy developers
//onjects easen work of a developer

const car={
  make:{  
   name :"Dodge Challenger srt hellcat",
   model:"srt hellcat redeye"
},

engine :{
 type:"6.2 litre supercharged HEMI v8",
 induction:"supercharged",
 horsepower:797,
 top_speed:240

},
manufacture:{
     manufacturer:"stallantis",
     country:"Otario, Canada"

},

  
  
  alert_info:function(){
    alert(`car ${car.name}
        engine ${car.model}
        
        
        
        `)


  },
  fun_fact: `They have the highest theft rates in the 
  United states of America`

}
console.log(`car data type ${typeof car} `);
console.log (car)
console.log(`Using console.log (table)--`)
console.table(car)

console.log(`Name is ${car.make.name} and its type is ${typeof car.make.name}`)
console.log(`model is ${car.make.model} and its type is ${typeof car.make.model}`)
console.log(`type  is ${car.engine.type} and its type is ${typeof car.engine.type}`)
console.log(`induction is ${car.engine.induction} and its type is ${typeof car.engine.induction}`)
console.log(`manufacturer is ${car.manufacture.manufacturer} and its type is ${typeof car.manufacture.manufacturer}`)
console.log(`country of production is ${car.manufacture.country} and its type is ${typeof car.manufacture.country}`)

console.log(`Name is ${car["make"]["name"]} and its type is ${typeof car["make"]["name"]}`)
console.log(`model  is ${car["make"]["model"]} and its type is ${typeof car["make"]["model"]}`)
console.log(`engine type  is ${car["engine"]["type"]} and its type is ${typeof car["engine"]["type"]}`)
console.log(`car induction is ${car["engine"]["induction"]} and its type is ${typeof car["engine"]["induction"]}`)
console.log(`car manufacturers are ${car["manufacture"]["manufacturer"]} and its type is ${typeof car["manufacture"]["manufacturer"]}`)
console.log(`car country of production  is ${car["manufacture"]["country"]} and its type is ${typeof car["manufacture"]["country"]}`)

const x=car.engine



console.log(`engine is ${x} and its type is ${typeof x}`)

//the bracket notation is an universal accessor


