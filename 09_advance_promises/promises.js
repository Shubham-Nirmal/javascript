const promiseOne = new Promise(function(resolve, reject){
    //Do an async task 
    // DB calls, cryptography, network
    
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)

})

promiseOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve()
        
    },1000)
    
}).then(function(){
    console.log("Async 2 resoleved ");
    
})





const promiseThree = new Promise(function(resolve,reject){
    setTimeout( function(){
       resolve({udername: "chai", email: "chaiexmaple.com"}) 
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFoure = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username : "Hiesh ", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
        
    },1000)
    
})
promiseFoure.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejeced")
)



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
          let error = false 
        if(!error){
            resolve({username : "Java script ", password: "123"})
        } else{
            reject('ERROR: Js went wrong  ')
        }
        
    },1000)
    
})


async function consumePromiseFive(){
         const response = await promiseFive
         console.log(response);
         
}

consumePromiseFive()


