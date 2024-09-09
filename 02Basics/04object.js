//singelton object
//const tinder = new Object()

const tinderUser = {}
tinderUser.email = 'ejaj@google.com'
tinderUser.id = '123abc'
tinderUser.pass = '@123abc'
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

//const obj3 = Object.assign(obj1,obj2) obj1 === obj3
const obj3 = Object.assign({},obj1, obj2)
// console.log(obj1)
// console.log(obj3)

const arr1 = Object.keys(tinderUser) // keys are strored in Array 
const arr2 = Object.values(tinderUser) // values are stored in Array
const arr3 = Object.entries(tinderUser)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // checks if keys are present in object or not 

//Destructuring
const course = {
    coursename: "js hindi course",
    price: '999',
    courseInstructure:"hitesh"
}
const {courseInstructure :instructure} = course
console.log(instructure)

//API JSON

// {
//     "coursename" : "js in hindi",
//     "price" : "free",
// }

[
    {},
    {},
    {}
]