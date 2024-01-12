const name = "sani";
const age =23;
console.log(`hii my name is ${name} and my age is ${age}`);

const gameName = new String("Soumya-Sani");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName[1]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,6);
console.log(newString);

//console.log(gameName);
const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newStringOne ="  soumya  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://soumya.com/hitesh%20sani";

console.log(url.replace('%20','-'));

console.log(url.includes('sani'));

console.log(gameName.split('-'));