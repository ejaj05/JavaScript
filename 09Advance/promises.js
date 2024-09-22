const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async promise completed")
        resolve()
    },2000)
})
promiseOne.then(()=>{
    console.log("Promise one consumed")
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async promise two completed")
        resolve();
    },2000)
}).then(()=>{
    console.log("Promise two consumed")
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async promise three completed")
        resolve({username:"_ejaj_.5",Email:'alamejaj288@gmail.com'});
    },2000)
})
promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    
})