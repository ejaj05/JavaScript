//Immediately Invoked Function Expression

(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();

( (name)=>{
    //un-named iife
    console.log(`DB CONNECTED TWO ${name}`)
})("Ejaj")

// we use iife to remove pollution occured by global scope variable 