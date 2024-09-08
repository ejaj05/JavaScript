const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

//concat
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

//spread
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

//Flat : cover the subarrays into single Array
const another_array = [1,2,3,[4,5,6],[4,8,6,1,[8,5,1,6]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("Ejaj Alam"))
//String to Array
const arr1 = Array.from("Ejaj Alam")
//console.log(arr1)

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

const arr2 = Array.of(score1,score2,score3,score4) //Making Array
console.log(arr2)