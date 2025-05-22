// Reduce 

const myNums = [ 1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and curraval : ${currval}`);

// return acc+ currval

// } ,0)

const myTotal = myNums.reduce((acc, curr)=> acc+curr,0)

console.log(myTotal);
const shoppingcar = [
    {
        itemName : "js course",
        price : 2999
    },

    {
        itemName : "py course",
        price : 999
    },

    {
        itemName : "DSA course",
        price : 12999
    },

    {
        itemName : "mobail dev course",
        price : 22999
    }
]
const priceTopay = shoppingcar.reduce((acc,item) => acc+item.price , 0 )
console.log(priceTopay);
