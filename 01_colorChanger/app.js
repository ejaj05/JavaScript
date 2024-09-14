let body = document.querySelector("body");
let buttons = document.querySelectorAll("span");

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        body.style.backgroundColor = btn.id;
    })
})

