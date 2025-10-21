// console.log("Abdul")

// // Functions
// //Syntax
// // function name(p1, p2, p3) { // code }

// function myname() {
//     console.log("Abdul Rahman Ali");
// }

// myname();

// function printno(){
//     for (let i=1 ; i<11; i++)
//         console.log(i);
// }
// printno();

// function printNumber(num){    // here we are passing parameter listed inside parentheses i.e. num
//     console.log("Printing No: ",num);
// }
// printNumber(5);  // here we are calling arguments i.e. 5

// function average(num1,num2){
//     let avg = (num1 + num2)/2;
//     console.log("Average:",avg);
// }
// average(3,5);

//return functions

// function getsum(a,b,c){
//     let sum = a+b+c;
//     return sum;
    // unrechable statement
    // let a= 3;
    // let b=5;
    // let c=8;
// }
// let ans =getsum(1,2,3);
// console.log("Printing Ans: ",ans);

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius(77);
// console.log(value);

// function getMyName(firstname,middlename){
//     let fullName = firstname + " "+ middlename;
//     return fullName;
// }
// let fullName = getMyName("Abdul","Rahman");
// console.log(fullName);

// function getMyName(firstname,middlename){
//         let fullName = firstname + " "+ middlename;
//         return fullName;
//     }
//     let fullName = getMyName("2","Rahman");
//     console.log(fullName);

// function getMultiplication(a,b){
//     return a*b;

// }
// console.log(getMultiplication(3,5));
// let getMultiplication = function(a, b) {/

// const squareNumber = function(num) {
//     return num**2;
// }
// console.log(squareNumber(5))

// Arrow Functions
    // function is replace bt arrow i.e. =>

//         Before Arrow:
// Function to compute the product of a and b

// let myFunction = function(a, b) {
// return a * b
// }
// console.log(myFunction(5,9));

//     With Arrow
let myFunction = (a, b) => {
   return a * b;
}
console.log(myFunction(5,9));
