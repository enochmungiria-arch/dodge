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

//Best developersa re lazy developers😂
//onjects easen work of a developer

const car={
  make:function Properties(){  
   name="Dodge Challenger srt hellcat"
   model="srt hellcat redeye"
},

engine :function specs(){
 type:"6.2 litre supercharged HEMI v8"
induction:"supercharged"
 horsepower:797
 top_speed=240

},
manufacture:function Details(){
     manufacturer:"stallantis"
     country:"Otario, Canada"

},

  overall : function total ()
  {
45000="number of units sold"
},
  
  alert_info:function(){
    alert(`car ${car.make}
        engine ${car.engine}
        manufacture ${car.manufacture}
        overall ${car.overall}
        
        `)


  },
  fun_fact: `They have the highest theft rates in the 
  United states of America`

}