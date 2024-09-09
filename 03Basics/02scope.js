let a = 10 // globle scope
const b = 20 

if(true){
    let a = 20 //scope only in this Block
    var c = 30
    console.log(a)
}
//console.log(a)
//console.log(c) 

one()
function one(){
    const username = "ejaj05"
    function two(){
        const website = "youtube"
        console.log(username + website) // clouser -> child element can access parent element variable
    }
    two()
}

const addOne = function(num){ // int this type of fucntion expression we can't call before initilisation 
    return num + 2
}
console.log(addOne(5)) 