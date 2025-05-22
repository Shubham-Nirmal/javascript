// # primitive


// 7 types : Sting , Number , boolean , Null, Undefined, Symbol , BigInt 

// note js is dyanamic langvege he ya static 

const score = 100
const scorevalue = 123.4

const isLoggedIn = false 
const id = Symbol('123')
const anotherId = Symbol('123')

//  console.log(id===anotherId);

const bigNumber = 5524353455551455n


// Non primitive/ Reference 

// Array , Objects, Function 

//Array

const frinds =["shubham","Dattu ", "Ramu"]
let myobj={
    name : "shubham ",
    age : 21,
}


// Object

const myfunction=function(){
        //  console.log("Hello World");
         
}


//++++++++++++++++Memory+++++++++++++++++++
// 2 tyepsof memory
// 1) stack (ptimitive) only copies are found in the middle of the sack 
// 2)Heap(Non-primitive) oringnol value found in the Heap

// Stack 

let myYoutubename = "shubham@com"

let anothername = myYoutubename

anothername = "chaiaurcode"

//  console.log(myYoutubename);
// console.log(anothername);

const name = {
    
};

//  console.log(name);
