function multipleBy5(num){
    return num*5
}

multipleBy5.Power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.Power);
console.log(multipleBy5.prototype);



function CreateUser(username, score){
    this.username = username
    this.score = score

}

CreateUser.prototype.increment = function(){
    this.score
}

CreateUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new CreateUser ("chai, 25")
const tea = CreateUser("tea", 250)

chai.printMe()


/*
  Here's what happens behind the scenes when the new keyword is used : 

  A new object is created : THe new keyword initiates the creation of a new javascrip object.

  A prototype is linked : THe newly created gets linked to the prototype property of the contructor function. This means that it has access to properties and methods defined on the comstructor,s prototype.

*/