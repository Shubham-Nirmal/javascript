class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
    
}

class Teacher extends User{
    constructor(username, email , password ){
        super(username)
        this.username = username;
        this.email = email;
        this.password = password
    }

    addCourese(){
       console.log(`A new Course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("shubham", "chai@gmail.com", "123asd")

chai.addCourese()