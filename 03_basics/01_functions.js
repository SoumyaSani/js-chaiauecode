function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("i");
}

//sayMyName();

// function addTwoNumbers(num1,num2)
// {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2)
{
    let result = num1 + num2;
    return result;
}
let result = addTwoNumbers(10,20)
console.log("Result :" ,result);

console.log();

function userLoggedIn(user)
{
    if(!user)
    {
        console.log("Enter a valid Name .");
        return
    }
    return `${user} just logged in .`
}

userLoggedIn()


function userLoggedInMessage(username = "sam")
{
    if(!username)
    {
        console.log("Enter a valid Name .");
        return
    }
    return `${username} just logged in .`
}

// console.log(userLoggedInMessage());

console.log(userLoggedInMessage("Hitesh"));
console.log("---------------------------------------------");

function itemsAddedToCart(...num1)
{
    return num1;
}
console.log(itemsAddedToCart(1000,2000,3000,29302));

const user = {
    username : "soumya",
    price : 199
}
function handelObject(anyObj)
{
    console.log(`Username is ${anyObj.username} and the price is ${anyObj.price}`);
}

handelObject(user);
handelObject({
    username :"sam",
    price :200
})

const myNewArray = [200,400,500]

function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

