let intervalId

const changeBgColor = ()=>{ 
    document.querySelector(".container").style.backgroundColor = colorChanger()
}
document.querySelector('#startBtn').addEventListener('click', ()=>{
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }
})
document.querySelector('#stopBtn').addEventListener('click', ()=>{
    clearInterval(intervalId)
    intervalId = null
})

//To generate random color
const colorChanger = ()=>{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let randomColor = `rgb(${red},${green},${blue})`
    return randomColor
}