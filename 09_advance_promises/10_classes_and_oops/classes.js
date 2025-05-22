class User {
    constructor(username , email, password){
        this.username= username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}qwe`
    }

    changeusername(){
        return`${this.username.toUpperCase()}`
    }


}

const chai = new  User("Shubham ", "shubham@gmail.com","1234")
console.log(chai.encryptPassword());
console.log(chai.changeusername());

