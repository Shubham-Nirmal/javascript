//singleton

// object.creat

// object literals

const JsUser = {
    name: "Shubham",
     age : 18,
    Gmail: "shubham@gmail.com",
    isLoggedIn :false,
    LastLoginDays:["sunday","Monday"]

}

// Acces object  

//  console.log(JsUser.age);
//  console.log(JsUser["Gmail"]);


// O P => 18

// O P => shubham@gmail.com


// checnge value

Gmail = "shubham@chagp.com"

// console.log(Gmail);

//Lock objec using freeze key word

// Object.freeze(JsUser)

JsUser.Gmail = "hiesh@microsof.com"

// console.log(JsUser);

// O P => mirocrosof ch mail nahi yenar pahilach yeil karan apnn freeze key word use kelay



JsUser.greeting = function(){
    console.log("Hello Js user ");
    
}
console.log(JsUser.greeting); //out put => undefined 
console.log(JsUser.greeting()); //out put => Hello Js user

JsUser.greetingTwo = function(){
     console.log(`Hello Js user, ${this.name} `); //out opt => Hello Js user shubham 
    
}

// console.log(JsUser.greeting); //out put => undefined
// console.log(JsUser.greeting())

// console.log(JsUser.greetingTwo());






