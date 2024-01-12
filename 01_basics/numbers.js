const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toFixed(2));

const otherNumber = 123.879
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));

//-------------------------Maths--------------------------------

// console.log(Math);

// console.log(Math.abs(-8));//8

// console.log(Math.round(4.4)); //4
// console.log(Math.round(4.8)); //5

// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.8)); //4

// console.log(Math.min(4,3,2,1,7));//1
// console.log(Math.max(4,3,2,1,7));//7

console.log(Math.random());

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1))+min);
