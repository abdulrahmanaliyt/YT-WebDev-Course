// let obj={
//     name:"Abdul",
//     "full name": "Andul Rahman Ali",
//     age: 25,
//     weight: 55,
//     height: "174 cm",
//     greet: function(){
//         console.log("Hellow ji how are you");
//     }
// };
// console.log (obj);
// obj.greet();

// // Shallow copy
// let obj2=obj;       // A shallow copy occurs when you copy the reference of an object to a new variable.
// obj2.greet()

/* Deep Copy
A deep copy, on the other hand, creates a completely independent 
copy of the object, including all nested objects or arrays. 
This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.

Creating a Deep Copy
Now to create a deep copy of an object in JavaScript we 
use JSON.parse() and JSON.stringify() methods. 
 */

/* Literals
whenever you directly write a value like a number, a string, true, false, or define an array or object structure without using constructors or functions, you are using a literal.
*/

// creation of arrays
// let arr = [1,2,3,4 ,5];
// console.log(arr);
// console.log(typeof(arr));

// Array constructor
// let brr = new Array('Abdul',1, true);
// console.log(brr[0]);
// console.log(typeof(brr));
// brr.push('Rahman Ali');
// brr.pop();
// brr.shift();
// brr.unshift('Abdul Rahman Ali');
// brr.push(20);
// brr.push(30);
// brr.push(50);

// console.log(brr);
// console.log(brr.slice(2,4));
// console.log(brr.slice(0,4));
// brr.splice(1,2,'Gyan');
// brr.splice(1,0,'Gyan');
// console.log(brr);

// let arr = [1,2,3,4 ,5];
// let ansArr = arr.map((num)=>{
//     return num*num;
// })
// console.log(ansArr);

// let arr = [1,2,3,4 ,5];
// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })

// let Arr = [1,3 ,4 ,5 ,6,'abdul','Rahman' ,7,8,9,10];
// let evenArray =Arr.filter((Number)=>{
// if(Number%2 ===0){
//     return true;
// }
// else{
//     return false;
// }
// return Number %2 === 0;

// let arr = [1, 3, 4, 5, 6, "abdul", "Rahman", 7, 8, 9, 10];
// let evenArray = arr.filter((value) => {
// //   if (typeof (value) == "string") {
//     if (typeof value == "number") {cc
//       // Corrected: changed 'value' to 'Number'
//       return true;
//     } else {
//       return false;
//     }
// });
// console.log(evenArray);

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;
// } ,0 )
// console.log(ans);

// // Sorting the array in descending order
// arr.sort((a, b) => b - a);
// console.log("Sorted Descending:", arr); // Output: Sorted Descending: [40, 30, 20, 10]

// let arr = [10,20,30,40];
// arr.sort();
// console.log(arr);
// console.log(arr.indexOf(40));

// const array = [5, 12, 8, 130, 44];

// const found = array.find((element) => element > 10);

// console.log(found);
// // Expected output: 12

// let arr = [10, 20, 30, 40 , 50 ];
// let length =arr.length;
// console.log("length: ", length);
// // traditional loop
// for( let index=0; index<length; index++){
//     console.log(arr[index]);
// }

// arr.forEach((value, index)=>{
//     console.log("Number: ",value,"Index: ", index);
// })

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// for (let key in person) {
//   console.log(key, " ", person[key]);
// }

// /* For of 
// Iterating over an Array:*/
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // Iterating over a String:
// const message = "Hello";
// for (const char of message) {
//   console.log(char);
// }
// // Iterating over a Map:
// const user = new Map([
//   ["name", "Alice"],
//   ["age", 30],
// ]);
// for (const [key, value] of user) {
//   console.log(`${key}: ${value}`);
// }

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add the current element to the sum
}

console.log(sum); // Output: 15