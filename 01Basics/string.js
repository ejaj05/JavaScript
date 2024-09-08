const str1 = new String("EjajAlam")
const str2 = "string"

console.log(str1.length)
console.log(str1.substring(0,4))
console.log(str1.slice(0,-4))
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

const url = "https:/ejaj.com/%20ejajalam"
console.log(url.replace('%20','-'))
console.log(str1.italics())