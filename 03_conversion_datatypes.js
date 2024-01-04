let score = "hitesh"
console.log(typeof score) //string

// convert into Number 
let selectNumber = Number(score)
console.log(typeof selectNumber)//number
console.log(selectNumber)//NaN

let usLoggedIn = 4
/* if we will change values of usLoggedIn 
usLoggedIn = "1" => true
usLoggedIn = "0" => false
usLoggedIn = "5" => true for any number inspite of 0
usLoggedIn = "nidhi" => true
usLoggedIn = null => false
usLoggedIn = undefined => false
*/
let booleanIsloggedIn = Boolean(usLoggedIn)
console.log(booleanIsloggedIn)//number

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)//string =>33
console.log(stringNumber)


