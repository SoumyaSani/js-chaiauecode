//singleton

  //Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full Name" : "soumya Ranjan Mahalik",
    age : 18,
    location :"jajpur",
    email :"soumya@gmail.com",
    [mySym ] : "mykey1",
    isLoggedIn :false,
    lastLohinDays: ["monday","saturday"]
}



// console.log(jsUser["full Name"]);

// console.log( jsUser[mySym]);
// Object.freeze(jsUser);

// jsUser.email = "sani@gmail.com"
// console.log(jsUser["email"]);

// console.log(jsUser);
// console.log();


jsUser.greeting = function(){
    console.log("Greetings from JS.......");
}

jsUser.greetingTwo = function() {
    console.log(`greeting from user , ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



