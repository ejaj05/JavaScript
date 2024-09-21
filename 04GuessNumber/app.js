let randomNumber = parseInt(Math.random()*100 + 1)
let input = document.querySelector("#guess-input")
let submit = document.querySelector("#guess-btn")
let form = document.querySelector("form")
let guessSlot = document.querySelector("#result")
let guessRemain = document.querySelector("#attemptsLeft")
let showResult = document.querySelector(".showResult")
let messageElement = document.querySelector(".message")

let playGame = true;
let prevGuess = []
let noOfguesses = 0;
if (playGame) {
    submit.addEventListener("click", (event)=>{
        event.preventDefault()
        console.log("Button was clicked");
        let guess = parseInt(input.value)
        ValidateGuess(guess)
    })
}
const ValidateGuess = (guess) => {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.")
    }
    else{
        prevGuess.push(guess)
        if(noOfguesses === 10){
            displayGuess(guess)
            displayMessage("You've made 10 guesses. Game Over. Correct number was : "+randomNumber)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if(guess === randomNumber){
        displayMessage("Congratulations! You guessed the correct number in "+ noOfguesses+ " guesses.")
        endGame()
    }
    else{
        if(guess < randomNumber){
            displayMessage("Too low. Try again.")
        }
        else{
            displayMessage("Too high. Try again.")
        }
    }
}

const displayGuess = (guess) => {
    input.value = "";
    guessSlot.innerHTML += `${guess}, `
    noOfguesses++;
    guessRemain.innerHTML = `Attempts left: ${10 - noOfguesses}`
}
let displayMessage = (message) => {
    messageElement.innerHTML = message
} 

const endGame = () => {
    playGame = false;
    input.setAttribute("disabled", "")
    let btn = document.createElement("button")
    btn.classList.add("playAgain")
    btn.innerHTML = "Play Again"
    showResult.appendChild(btn)
    newGame();
}

const newGame = () => {
    document.querySelector(".playAgain").addEventListener("click",()=>{
        randomNumber = parseInt(Math.random()*100 + 1)
        input.removeAttribute("disabled")
        playGame = true;
        prevGuess = []
        noOfguesses = 0;
        guessRemain.innerHTML = `Attempts Left: 10`
        guessSlot.innerHTML = "Previous guesses: "
        messageElement.innerHTML =""
        let btn = document.querySelector(".playAgain")
        showResult.removeChild(btn)
    })
}