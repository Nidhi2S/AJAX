// DATATYPES => 1) Primitive 2) Non primitive

// # Primitive => 7types
// String,Number,Boolean,Null,undefined,Symbol,BigInt

const score = 100;//Number
const decValue = 10.2;//Number
const boolValue = true;//boolean
const emptyVal = null;//Null
const blankVal = undefined//undefined

console.log(typeof (score));
console.log(typeof (decValue));
console.log(typeof (boolValue));
console.log(typeof (emptyVal));
console.log(typeof (blankVal));
//symbol
const var1 = Symbol('465')
const var2 = Symbol('567')
console.log(var1);//Symbol(465)
//comparison
console.log(var1 == var2)
//Bigint
const bigNumber = 252521687253657n//bigint

// ****************************************
// # Reference Type(Non-Primitive) 
// Array, Object,Functions
// ****************************************

// array
const fruits = ["apple", "mango", "kiwi"];//array
// object
let myobj = {
    name: "nidhi",
    age: 20,

}
// functions
let myfxn = function () {
    console.log("hello worlld");
}

console.log(typeof (myfxn))//function object

// Note : non primitive data always returns object