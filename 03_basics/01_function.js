// decleration of function 

function MyName(){
    //console.log("S");
  //  console.log("H");
//     console.log("U");
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("M");
    
}

MyName()

 function addTwoNumbers(numbers1, numbers2){  //parameters
     console.log(numbers1 + numbers2);
    
 }

addTwoNumbers(3, 7) // Arguments 
// out put => 10




function addTwoNumbers(numbers1, numbers2){ 

        // let result = numbers1 + numbers2 
    //    return result 


    return numbers1 + numbers2
        
     }

     
     const result =  addTwoNumbers(3,5 )

    //  console.log("Resilt : ", result);
     
     function LoginUsermessage (myname){
        // return `${myname} user just logged in  `

        return  `${ myname} user just logged in `

    }
    // console.log(LoginUsermessage("shubham"));

    function  calculateCartprice(...num1){

       return num1
    }
    
    // console.log(calculateCartprice(100 , 400, 500 , 5000 ));// out put => [100,400,500,5000]

    // object convert into function 

    const user = {
        username : "shubham",
        price : 199
    }

    function handleobject ( anyobject){
            // console.log(`User Nmae is ${anyobject.username} and price is ${anyobject.price}`);
            
    }


    // handleobject(user)
    handleobject(
        {
            username: "sam",

            price : 399
        }
    )


// Arrays conver Object

const myNewArra = [10,20, 39,40]

function returnSecoundValue(getArray){
    return getArray[2]
}

// console.log(returnSecoundValue(myNewArra));// out put 39

    

     
     