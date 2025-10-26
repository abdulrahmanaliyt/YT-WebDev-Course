// // // compile time error 

// // // syntax error
// // // console.log(1;

// // // Runtime error -> Refrence error
// // // console.log(x);

// // // try block

// // try{
// //     console.log("A\n");
// //     console.log(x);
// //     console.log("C")
// //     //a 
// //     //b
// // }
// // catch(error){
// //     // define krte hai , error 
// //     // retry logic
// //     // fall back mechanism
// //     //logging
// //     console.log("B not print due to error in code ");
// //     // console.log("Your error is here ->",error);
// // }
// // finally{
// //     console.log("I will run everytime, as I am finally bl");
// // }


// // let's create a custom error
// try{
//     //Refrence error
//     console.log(x);
// }
// catch(error){
//     throw new Error("First declare x then print");
// }

let errorCode = 100;
if(errorCode== 100){
    throw new Error("Invalid Json");
}