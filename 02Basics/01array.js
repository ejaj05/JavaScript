//Arrays
const myArr = [0,1,5,4,9,6]
const myHeros =  ["Captain America","Hulk","Iron Man","Thor"]
const myArr2 = new Array(0,1,8,4,6,3)

//Arrays Method
myArr.push(10)
myArr.pop()
myArr.unshift(10)
myArr.shift()
//console.log(myArr)
const newArr = myArr2.join()
//console.log(typeof newArr)

//slice
console.log("A ",myArr)

const myN1 = myArr.slice(1,4)
console.log(myN1)
console.log("B ",myArr)

//splice
const myN2 = myArr.splice(3,5)
console.log(myN2)
console.log("C ",myArr)





