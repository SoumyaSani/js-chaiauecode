//const jsUser = new Object();

const jsUser ={}

jsUser.id = "sani252"
jsUser.name = "Sani"
jsUser.islggedin = false
//console.log(jsUser);

const user = {
    email : "sani@gmail.com",
    userFullName : {
        firstName : "soumya",
        lastName : "sani"
    }
}
console.log(user);
console.log(user.userFullName.firstName);

console.log();

const obj1 = {1:"a",2:"b"}
const obj2 = {3 : "c" , 4 : "d"}
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log();

console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));
console.log(Object.entries(jsUser));

console.log(jsUser.hasOwnProperty('isLoggedin'));