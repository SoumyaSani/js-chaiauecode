//IIFE (Immidiatly Invoked Function Expressions)

 (function chai(){ //named IIFE
     console.log("DB CONNETED");
 })();

((name) =>{//unnamed IIFE
    console.log(`DB CONNECTED BY ${name}`);
})("sani");