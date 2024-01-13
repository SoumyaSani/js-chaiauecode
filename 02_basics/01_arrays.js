//arrays

const myArr = [0, 1, 2, 3];
const myHeros = ["ironMan", "spiderMan"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr2);
console.log(myHeros);
console.log();

//Array Methods

// myArr.push(4);
// myArr.push(5);
// myArr.pop();
// console.log(myArr);

console.log(myArr);
myArr.unshift(8);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log();
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log();

console.log(myArr);
const newArr = new Array(myArr.join());
const newArr2 = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(newArr2);

console.log();

//slice, splice

console.log("Before slice :",myArr);
const mna = myArr.slice(1,3);
console.log(mna);
console.log("After slice :",myArr);
console.log();

console.log("Before splice :",myArr);
const mna2 = myArr.splice(1,3);
console.log(mna2);
console.log("After splice :",myArr);





