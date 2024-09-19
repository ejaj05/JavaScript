const randomNumber = () =>Math.floor(Math.random()*100) + 1
let arrSeq = []
let noOfattempt = 10;
let btn = document.querySelector(".btn")
btn.addEventListener("click" ,()=>{
    let input = document.querySelector("#box")
    let prevGuess = document.querySelector(".prevGuess")
    let restGuess = document.querySelector(".restGuess")
    console.log(arrSeq)
    if(input.value == '' || isNaN(input.value)){
        alert("Enter valid number")
    }
    else if(parseInt(input.value) === randomNumber()){
        alert("You guess the right number!",randomNumber())
    }
    else{
        alert("You guess the wrong number!",randomNumber())
        noOfattempt--;
        if(noOfattempt < 0){
            alert("Your limit is over now,Click OK to start again!")
            noOfattempt = 10
            arrSeq = []
        }
        arrSeq.push(randomNumber())
        restGuess.innerHTML = `Guesses Remaining: ${noOfattempt}`
        prevGuess.innerHTML = arrSeq.length!=0 ? `Previous guess : ${arrSeq}`:`Previous guess :`
    }
    input.value = "";
}) 