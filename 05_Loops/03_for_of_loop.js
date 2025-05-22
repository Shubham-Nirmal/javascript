// for of loop

//["" , " ", " " , " "]
//[{}, {},{},{}]


 const arr = [1, 2, 3, 4, 5, ]

for (const num  of arr ) {
    //    console.log(num);
          
}

// out put => 
//     2
//     3
//     4
//     5


const greeings = "Hello world "

for (const gree of greeings) {
    // console.log(`Each char is ${greeings}`)
}


// Maps 

const map = new Map()
map.set(`In`, "India")
map.set(`USA`, "United States of America ")
map.set(`Fr`,"France")


// console.log(map);

for (const key of map) {
    // console.log(key);
}


for (const [key, value] of map) {
    // console.log(key, `:-`, value);
    
}

const myObject = {
    game1: `NFS`,

    game2: `Spiderman`
}

// for (const [key,value] of myObject) {
//     console.log(key, `:-`, Value);
// }










// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

