let outer = document.querySelector(".outer")
let inner = document.querySelector(".inner")
let small = document.querySelector(".small")

outer.addEventListener("click", () => {
    console.log("Outer div is clicked")
},true) //Capture click : Bubbling event

inner.addEventListener("click", (event) => {
    event.stopPropagation() //Stop bubbling
    console.log("Inner div is clicked")
},true)

let images = document.querySelector(".container")
images.addEventListener("click", (event) => {
    console.dir(event.target.tagName)
    if(event.target.tagName == 'IMG'){
        let removeIt = event.target.parentNode
        removeIt.remove();
    }
})