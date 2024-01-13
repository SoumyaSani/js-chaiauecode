//Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
console.log();
let myCreatedDate = new Date(2023,2,23,5,3);
let myCreatedDate2 = new Date("2023-01-13");
console.log(myCreatedDate.toString());
console.log(myCreatedDate2.toString());

console.log();

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(myTimeStamp/1000));

console.log();
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})
