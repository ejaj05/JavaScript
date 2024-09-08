/* 
#Primitive
7 Type: String, Number, Boolean, Undefined, Null, Symbol, BigInt

#Non-Primitive
Array, Object, Function
*/

const arr = ["Ejaj", "Adnan", "Sohil"]

const obj = {
    name:"Ejaj",
    age:22,
    city:kolkata
}

let myFunc = function(){
    console.log("Hello world!");
}

// stack (Primitive) Heap (Non-Primitive)

let myName = "Ejaj Alam"
let anotherName = myName // copy of myName
anotherName = "Adnan Alam" // only changes in copy 

const userOne = {
    email:"alamejaj288@gmail.com"
}
const userTwo = userOne
userTwo.email = "adnan@gmail.com"

//both variable are pointing at the same object in Heap