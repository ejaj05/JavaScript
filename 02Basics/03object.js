const mySym = Symbol("myKey1")
//object Literals
const JsUser = {
    name:"Ejaj",
    "Full name" : "Ejaj Alam",
    age:22,
    [mySym]:"myKey1",
    email:"ejaj@google.com",
    location:"kolkata",
    isLogedIn:false,
    lastLoginDays:["Monday", "Saturday"],
    greeting : function(){
        console.log("Hello js User")
    },
    greetingTwo : function(){
        console.log(`Hello JS User ${this.name}`)
    }
}

// console.log(JsUser.name)
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym])

JsUser.email = "ejaj@microsoft.com"
// console.log(JsUser.email)
// Object.freeze(JsUser) // can't change
// JsUser.email = "ejaj@amazon.com"
// console.log(JsUser.email)

//fucntion in an object
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



