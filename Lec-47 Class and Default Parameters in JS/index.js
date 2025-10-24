// class Human{
//     // properties
//     age ;//public
//     #wt = 39; //private use #
//     ht = 149;
//      // constructor

//     constructor (newAge,newHeight, newWeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     // behaviour

//     walking(){
//         console.log("I am walking",this.#wt);
//     }
//     running(){
//         console.log(" I am running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyweight(val){
//         this.#wt= val;
//     }
// }

// let obj = new Human(50,190,88);
// // console.log(obj.ht);
// console.log(obj.fetchWeight)
// obj.walking();

// function sayName(myName = "Abdul ",lName=myName.toUpperCase()){  // default 
//     console.log("My Name is", myName," ",lName);
// }

// // sayName("Abdul Rahman Ali");
// sayName("Abdul Rahman", "Ali");
// // sayName();

// // function solve(value = {age:15, wt:90, ht:190}){
// // function solve(value = [ age= 15, wt= 90, ht= 190 ]) {
//     function solve(value = "Abdul") {
//       console.log("Hello Jii How are you->", value);
//     }
// // solve(59);
// // solve(null);
// solve(undefined);

// function getAge(){
//     return 199;
// }
// // function utility(name,age){
//     function utility(name="Rahman Ali", age=getAge()) {
//       console.log(name, " ", age);
//     }
// // utility("Abdul",20);
// utility();