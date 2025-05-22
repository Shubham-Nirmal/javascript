const coding = ["js","Ruby","java", "pyhone ", "cpp"]


const value = coding.forEach( (item) => {
    // console.log(item);
    
})

// console.log(value);


// filter function 

const myNums = [1,2,3,4,5,6,7,8,9,10]


//  const newNums = myNums.filter( (num) => num > 4)
const newNums = myNums.filter( (num) =>{
    return num > 4
})

// console.log(newNums);


const book=  [
    {title : 'Book one ', genre : 'ficion', publish: 1981,
    edition: 2004 },
    
    {title : 'Book two ', genre : 'Non-ficion', publish: 1992,
    edition: 2008},

    {title : 'Book three  ', genre : 'History', publish: 1989,
        edition: 2004 },

    {title : 'Book Four ', genre : 'History', publish: 2009,
    edition: 2010 },

    {title : 'Book Five ', genre : 'ficion', publish: 1987,
    edition: 2014 },
]

// const userBooks = book.filter( (bk ) => bk.genre === `History` )

const userBooks = book.filter( ( bk ) => {
   return bk.publish >= 2000
} )

console.log(userBooks);
