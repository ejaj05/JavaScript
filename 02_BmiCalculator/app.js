const form = document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let res = document.querySelector(".result")
    
    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML = `Please enter valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        res.innerHTML = `Please enter valid weight ${weight}`
    }
    else{
        const bmi = ((weight*10000)/(height*height)).toFixed(2);
        res.innerHTML = bmi;
    }
})