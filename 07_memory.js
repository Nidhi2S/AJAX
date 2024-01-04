// Stack (Primitive),Heap (Non-Primitive)
// *************************************

//PRIMITIVE ( it will take duplicate values as a reference and when we changes values than its  original value will not be change only reference valuew will be change)
let myname = "nidhi"; //original value
let anotherName = myname// refrence
anotherName = "midhi"//change
console.log(myname)//nidhi
console.log(anotherName)//midhi

// Non Primitive (it will take original value as as reference , chnges will be in orginal value)
//original  Value
let fruits = {
    apples: 5,
    mangoes: 7,
    kiwi: 9,
}
// reference value
let apples = fruits
// change
fruits.apples = 9

console.log(fruits)//apples :5 , mangoes: 7, kiwi: 9,
console.log(apples)//apples :5 , mangoes: 7, kiwi: 9,