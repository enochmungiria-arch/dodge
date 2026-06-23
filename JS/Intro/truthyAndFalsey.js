/*if you know something is notn falsey then it is truthy
Falsey words are:
1.false
2.0
3.-0
4.null
5.undefined
6."" empty string
7.nan not a number
*/

let userName1="John Mwangi"
let userName2=""

let activeUserName=userName2||userName1

console.log(activeUserName)

bothUserNames=userName1&&userName2
console.log(bothUserNames)

