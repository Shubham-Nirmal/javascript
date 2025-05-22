//const tinderUser = new Object() //out put = > {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "sam"
tinderUser.isLoggedIn= false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userfullname:{
            frisname:"hiesh",
            lasname: "nirmal"
        }
    }
}

// access 

//  console.log(regularUser.fullname.userfullname);

// combain object 

const obj1 = {1: "a", 2:"b"}

const obj2 = {3:"a", 4 : "b"}

const obj3 = {obj1, obj2 }

//   console.log(obj3);
//  out put => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//  const obj3 = Object.assign({}, obj1 , obj2 ) //out put => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//  console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//         id:1,
//         email:"shubham@gmail.com"
//     }

//     {
//         id:1,
//         email:"shubham@gmail.com"
//     }

//     {
//         id:1,
//         email:"shubham@gmail.com"
//     }
// ]


// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));



// D-stucureing objecs

const course = {
    coursename: "Js hindi",
    price: "999",
    courseInsrucor:"shubham"
}

//  course.courseInstructor

const {courseInsrucor} = course

console.log(courseInsrucor);









