// For Loop
// Syntax:
// for(initialization; condition; increment/decrement){ 
//     // code block to be executed
// }
// for(let i = 1; i <= 5; i++){
//     //console.log("Hello World!",i);
//     console.log(i,"-", i**2);
// }

// for(let i = 5; i >= 1; i--){
//     console.log(i,"-", i**2);
// }

// if we want to print only even numbers between 1 to 20
// for(let i = 2; i <= 20; i+=2){
//     console.log(i);
// }

// if-else
    // syntax:
    // if(condition){
    //     // code block to be executed if condition is true
    // } else {
    //     // code block to be executed if condition is false
    // }

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i, "is even");
//     } else {
//         console.log(i, "is odd");
//     }
// }

// //Use of continue statement
// for (let i = 1; i <= 20; i++){
//     if(i % 2 !== 0){
//         continue; // skip the odd numbers
//     }
//     console.log(i, "is even");
// }

// for (let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         continue; // skip the even numbers
//     }
//     console.log(i, "is odd");
// }

// for( let i=1; i<=4; i++){
//     if(i==3)
//         continue;
//     else
//         console.log(i);
    
// }

// //while Loop
// // Syntax:
// // while(condition){
// //     // code block to be executed
//     // increment/decrement
// // }

// let num = 1;
// while(num <= 5){
//     console.log("Hello World!", num);
//     num++;
// }

// let num2 = 5;
// while(num2 >= 1){
//     console.log("Hello World!", num2);
//     num2--;
// }

// // Print first 10 natural numbers
// let n = 1;
// while(n <= 10){
//     console.log(n);
//     n++;
// }

// // Print first 20 even numbers using continue statement
// let count = 1;
// while(count <= 20){
//     if(count % 2 !== 0){
//         count++;
//         continue;
//     }
//     console.log(count);
//     count++;
// }

// // do-while Loop
// // Syntax:
// // do{
// //     // code block to be executed
//     // increment/decrement
// // } while(condition);

// let n3 = 1;
// do{
//     console.log("Hello World!", n3);
//     n3++;
// } while(n3 <= 5);

// // Strings
//  Strings are for storing text
// Strings are written with quotes

// let firstname="Abdul"
// let lastname="Ali"

// // Template Strings
// // Templates were introduced with ES6 (JavaScript 2016).
// // Templates are strings enclosed in backticks (`This is a template string`).
// // Templates allow multiline strings:
// // Example
// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;
// console.log(text);

// JavaScript Strings as Objects
// Normally, JavaScript strings are primitive values, created from literals:

// let x = "John";
// But strings can also be defined as objects with the keyword new:

// let y = new String("John");
// Example
// let x = "John";
// let y = new String("John");
// console.log(y);

let op1="English ";
let op2="Hindi";
// console.log(ans)
// let ans = op1 + op2;
// let finalans= `${op1}${op2}`;
// console.log(finalans);

// console.log(finalans.length);
// console.log(finalans.toUpperCase());
// console.log(op1.toLowerCase());

// let a= "Abdul Rahman Ali";
// console.log(a.substring(5))
// console.log(a.substring(13))
// console.log(a.substring(6,12))

// let a = "Abdul Rahman Ali";
let a = "Abdul Rahman Ali";
let words = a.split(' ');

console.log(words.join('_')); 