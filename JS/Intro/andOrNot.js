/*comparison operators evaluate either true or false

*/

let val1=true
let val2=true
let result1=val1&&val2

console.log(`val1=${val1}  val2=${val2} and val1&&val2-${val1&&val2}`)

let mercyAge=17
let mercyBalance=5000
let is_greater_than_18=mercyAge>18
console.log(`is mercy age greater than 18 ${is_greater_than_18}`)
let has_more_than_20k=mercyBalance>20000
console.log(`Mercy has more than 20k balance ${has_more_than_20k}`)
console.log(`Mercy is older than 18 and has more than 20k balance ${ is_greater_than_18&&has_more_than_20k} `)
let simplified=mercyAge>18&&mercyBalance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplified is${mercyAge>18&&mercyBalance>20000}`)