function myFunc(a,b){
    console.log(b)
}
myFunc(5)

const user = {
    username : "Ejaj",
    price : "999"
}

//fucntion with Object Argument 
function myFunctionObject (myObj){
    console.log(`Hello i am ${myObj.username} alam and price is ${myObj.price}`)
}
myFunctionObject(user)

//fucntion with Array argument

function myArrayFucntion(arr){
    console.log(arr)
}
const arr = new Array(1,5,4,6,3,7,8)
myArrayFucntion(arr)