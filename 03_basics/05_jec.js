// Javascript Execution Context
// 1.Global Execution Context
//2.Function Execution Context
//3.Eval Execution Context

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
     let total = num1 + num2;
     return total;
}

let result1 = addNum(val1,val2);
let result2 = addNum(10,2);

//1st Global Execution(this)

//2nd Memory Phase
//val1 -> undefind
//val2 -> undefind
//addNum ->defination
//result1 -> undefind
//result2 ->undefind

//3rd Execution Phase
//val1 <- 10
//val2 <- 5
//addNumber
    //1st memory phase
     //val1 -> undefind
     //val2 -> undefind
     //total ->undefind
   //2nd Execution Phase
     //num <- 10
     //num2 <- 5
     //total <- 15
//result1 <- 15
//addNumber
    //1st memory phase
     //val1 -> undefind
     //val2 -> undefind
     //total ->undefind
   //2nd Execution Phase
     //num <- 10
     //num2 <- 2
     //total <- 12
//result2 <- 12























