const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website `);
       // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
//user.welcomeMessage()
//console.log(this);

// function chai()
// {
//     let username ="sani";
//     console.log(this.username);
// }


// const chai = function()
// {
//     let username ="sani";
//      console.log(this.username);
// }

const chai = () =>{
    let username = "sani"
    console.log(this.username);
}
//chai();


// const addTwo =(num1,num2) =>{
//     return num1 + num2;//explicit return
// }

//const addTwo =(num1,num2) => num1 + num2

//const addTwo =(num1,num2) => (num1 + num2)//implicit return

const addTwo =(num1,num2) => ({username : "saani"})


console.log(addTwo(10,20));