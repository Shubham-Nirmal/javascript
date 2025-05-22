// object literal
const user = {
    username : "Hitesh",
    LoginCount: 8,
    singnedIn: true,

    getUserDetails: function(){
        // console.log("Go user details from database");
        console.log(`UserName:  ${this.username}`);
          console.log(this);
            
    }

}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);



function User (username, LoginCount, isLoggedIn){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
 const userOne = new User("Hitesh", 12, true )
 const userTwo = new User("Dattu ", 13, false)

 console.log(userOne);
 console.log(userTwo);
 
 

