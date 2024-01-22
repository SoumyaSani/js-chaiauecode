// const coading = ["js", "rb", "java", "py", "cpp"]

// const values = coading.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

//console.log(newNums);

//Maps

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const newNumbers = myNumbers.map( (num) => num + 10);
// const newNumbers = myNumbers.map( (num) => num*10)
//                             .map((num) => num+1)
//                             .filter((num) => num>40)
// console.log(newNumbers);


//Reduce

const myNums =[1, 2, 3]

// const myTotal = myNums.reduce( function (acc,curval) {
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce( (acc,cur) => (acc + cur),0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    }
]

const total = shoppingCart.reduce( (acc,item) => (acc + item.price),0);

console.log(total);
