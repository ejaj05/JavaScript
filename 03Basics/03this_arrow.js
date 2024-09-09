const user = {
    username : "ejaj",
    price : 999,
    isLoggedIn : false,
    website : "youtube",
    welcomeFunction : function(){
        console.log(`hello ${this.username} welcome to ${this.website}`)
        console.log(this) // here this refer to object
    }
}
//user.welcomeFunction()

const func = (a,b)=>{
    return a+b
}
//console.log(func(3,4))
const addTwo = (a,b)=>(a+b) //implicite return -> one liner code 
console.log(addTwo(4,8))