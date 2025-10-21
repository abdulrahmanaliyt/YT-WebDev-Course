// // arithematic operators
// let a = 10;
// let b = 4;
// console.log("a + b =", a + b); // addition
// console.log("a - b =", a - b); // subtraction
// console.log("a * b =", a * b); // multiplication
// console.log("a / b =", a / b); // division
// console.log("a % b =", a % b); // modulus
// console.log("a ** b =", a ** b); // exponentiation

// // Unary operators
// let c = 5;
// console.log("c before increment:", c);
// console.log("++c =", ++c); // pre-increment
// console.log("c after pre-increment:", c);
// console.log("c++ =", c++); // post-increment
// console.log("c after post-increment:", c);
// console.log("--c =", --c); // pre-decrement
// console.log("c after pre-decrement:", c);
// console.log("c-- =", c--); // post-decrement
// console.log("c after post-decrement:", c); 

//// Assignment operators
// let x = 10;
// console.log("Initial x:", x);
// x += 5;

// console.log("After x += 5:", x);
// x -= 3;
// console.log("After x -= 3:", x);

// x *= 2;
// console.log("After x *= 2:", x);
// x /= 4;
// console.log("After x /= 4:", x);
// x %= 3;
// console.log("After x %= 3:", x);
// x **= 2;
// console.log("After x **= 2:", x);

// // Comparison operators
// let p = 7;
// let q = '7';
// console.log("p == q:", p == q);

// // strict equality
// let p = 7;
// let q = '7';
// console.log("p == q:", p == q); // loose equality
// console.log("p === q:", p === q);

// // loose equality
// console.log("p != q:", p != q); // loose inequality
// console.log("p !== q:", p !== q); // strict inequality

// // ternary operator
//syntax: condition ? exprIfTrue : exprIfFalse;
// let age = 20;
// let age = 16;
// let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
// console.log("Can vote:", canVote);

// // logical operators
// ---> AND (&&), OR (||), NOT (!)
// let isAdult = true;
// let hasVoterID = false;

// let canVote = isAdult && hasVoterID;
// console.log("Can vote (AND):", canVote);

// canVote = isAdult || hasVoterID;
// console.log("Can vote (OR):", canVote);

// let isMinor = !isAdult;
// console.log("Is minor (NOT):", isMinor);

// // working with non boolean values
// (false && true) // returns false
// (false || true) // returns true
// (!true) // returns false

// console.log("false && 'Hello':", false && 'Hello'); // returns false
// console.log("true && 'Hello':", true && 'Hello'); // returns 'Hello'
// console.log("false || 'Hello':", false || 'Hello'); // returns 'Hello'
// console.log("true || 'Hello':", true || 'Hello'); // returns true
// console.log("!0:", !0); // returns true
// console.log("!42:", !42); // returns false
// console.log("!'' :", !''); // returns true
// console.log("!'Hello':", !'Hello'); // returns false
// console.log("!!'Hello':", !!'Hello'); // returns true
// console.log("!!'':", !!''); // returns false
// console.log("!!42:", !!42); // returns true
// console.log("!!0:", !!0); // returns false
// console.log("!!null:", !!null); // returns false
// console.log("!!undefined:", !!undefined); // returns false

// // short-circuit evaluation
// console.log(false || 7||8||77); // returns 7
// console.log(true && 7&&8&&77); // returns 77
// console.log(false && 7&&8&&77); // returns false
// console.log(true || 7||8||77); // returns true

// // Bitwise Operators
// let a = 5;  // In binary: 0101
// let b = 3;  // In binary: 0011
// console.log("Bitwise Operators")
// console.log("a & b =", a & b); // AND: 0001 (1 in decimal)
// console.log("a | b =", a | b); // OR: 0111 (7 in decimal)
// console.log("a ^ b =", a ^ b); // XOR: 0110 (6 in decimal)
// console.log("~a =", ~a); // NOT: 1010 (-6 in decimal)
// console.log("a << 1 =", a << 1); // Left Shift: 1010 (10 in decimal)
// console.log("a >> 1 =", a >> 1); // Right Shift: 0010 (2 in decimal)
// console.log("a >>> 1 =", a >>> 1); // Unsigned Right Shift: 0010 (2 in decimal)

// // conditional statements
//syntax:
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }
// console.log("Conditional Statements if-else:");
// let num = 10;
// if (num > 0) {  // condition
//     console.log(num, "is a positive number.");
// } else if (num < 0) {
//     console.log(num, "is a negative number.");
// } else {
//     console.log(num, "is zero.");
// }   

// console.log("if-else-if ladder:");
// // if-else-if ladder
// let marks = 85;
// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else if (marks >= 70) {
//     console.log("Grade: C");
// } else if (marks >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

console.log("nested if-else-if:");
// nested if-else
let age = 25;
let hasLicense = true;
if (age >= 18) {
    console.log("You are an adult.");
    if (hasLicense) {
        console.log("Eligible to drive.");
    } else {
        console.log("Not eligible to drive: No license.");
    }
} else {
    console
    console.log("Not eligible to drive: Underage.");
}

// switch statement
// syntax:
// switch (expression) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     ...
//     default:
//         // code to be executed if expression doesn't match any case  
// }

// console.log("Switch Statement:");
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");    
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number.");
// }


