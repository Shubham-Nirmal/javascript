// Array

const myArr = [0,1,2,3,4,5]

const myHeors = ["Dhanush ", "Arjun", "nnagraj"]

const mArr2 = new Array(1,2,3,4)

//console.log(myArr[0]); // O P=> 0


// Array Methods

myArr.push(6)

// console.log(myArr);

// out put 

// [
//     0,1,2,3,
//     4,5,6
// ]

// +++++++++++ push ++++++++++++++
myArr.push(7)

//console.log(myArr);

// out put 

// [
//     0,1,2,3,
//     4,5,6,7
// ]

// +++++++Pop method +++++++

myArr.pop()

console.log(myArr);// REmve las value

// out put 

// [
//     0,1,2,3,
//     4,5,6,
// ]

// ++++++++Unshift ++++++++++

myArr.unshift(9)
console.log(myArr);

// out put 

// [
//     9,0,1,2,
//     3,4,5,6
// ]



myArr.shift()
//console.log(myArr);

// out put 

// [
//     0,1,2,
//     3,4,5,6,
// ]

const newArr = myArr.join()

// console.log(myArr); //out put => [0,1,2,3,4,5,6] 
// console.log(newArr);//out put => 0,1,2,3,4,5,6,

//  console.log( typeof newArr) //string // join function conver to string 




































