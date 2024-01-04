// // declare string 
// const name = "nidhi"

// const age = 20

// // concatination
// console.log(name + age + " Value")
// // another way of concat
// console.log(`Hello my name is ${name} and i am ${age} years`);

// // another way to declare string
// let myname = new String('midhi')
// console.log(myname)
// console.log(typeof name)
// console.log(myname[0])//m
// console.log(myname[1])//i
// console.log(myname[2])//d
// console.log(myname[3])//h
// console.log(myname[4])//i
// console.log(myname.__proto__)//{}

// // length**************** => length of chracters
// console.log(myname.length)//5
// // toUpperCase************** => upper case 
// console.log(myname.toUpperCase())//MIDHI

// //charAt************* => find chracter on index 
// console.log(myname.charAt(2))//d

// //indexOf => index of chracter*******
// console.log(myname.indexOf('i'))//1

// // substring*************** =>(not allowed -ve)
// const newstring = myname.substring(0,3)
// console.log(newstring)//mid

// //slice********** => (negative values allowed)**
// const mystring = myname.slice(-5,0)
// console.log(mystring)//mid

// // trim****************
// const mystring1 = "     nidhi     "
// console.log(mystring1)
// console.log(mystring1.trim())

// // replace*************
// const url = "https://devel%20oper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment"
// console.log(url.replace('%20',"")); //remove %20 into ""

// // includes************ => keyword present or not
// console.log(url.includes('midhi'))

// // split*************** => 
// const otherName = "Hello-Hii-Tata-byby"
// console.log(otherName.split('-'))

// // carCodeAt()********* =>  always indexes the string as a sequence of UTF-16 code units
// let sentence = "otherName if u have u can give";
// let index = 4
// console.log(`character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`); 

// // endsWith ********** =>
// const str1 = 'Cats are the best!';
// console.log(str1.endsWith( 'best!' ))//true
// console.log(str1.endsWith( 'best',17 ))//true
// console.log(str1.endsWith( 'best' ))//false

// lastIndexof****************** => give last index string
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(`last index of paragraph is ${paragraph.lastIndexOf('dog!')} `);































