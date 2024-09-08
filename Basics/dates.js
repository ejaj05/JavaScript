// Date

const myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

//const myCreatedDate = new Date(2000,6,5)
//const myCreatedDate = new Date(2000,6,5,10,46)
const myCreatedDate = new Date("2023-01-15")
console.log(myCreatedDate.toLocaleString())

const myTimelaps = Date.now()
console.log(myTimelaps) // msec
console.log(Math.floor(myTimelaps/1000)) //sec

const newDate = new Date()
console.log(myDate.getTime())
