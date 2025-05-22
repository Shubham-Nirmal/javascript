const user = {
    username : "shubham",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome o websie`);
        console.log(this);
        
        
    }
}

// this => is use to refer to curent contanst 
//   user.welcomeMessage()

//   user.username = "sam"

//   user.welcomeMessage()


//console.log(this);
 // out put => {}

    // syntax of Arrow function 

//    cont addTwo  () => {}

     const addTwo = (num1 , num2 ) => {
         return num1 + num2
     }

     console.log(addTwo(3,4));
    






