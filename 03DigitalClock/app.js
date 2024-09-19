let box = document.querySelector(".box")

setInterval(() => {
    let time = new Date()
    let myTime = time.toLocaleTimeString();
    box.innerHTML = myTime
}, 1000)