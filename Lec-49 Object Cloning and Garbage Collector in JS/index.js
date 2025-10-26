// // // let obj = {
// // //     age:12,
// // //     wt:59,
// // //     ht:190
// // // };
// // // console.log(obj)
// // // obj.color = "White";
// // // console.log(obj);

// // // cloning

// // // let  dest = {...src};
// // // // let dest = src;
// // // src.age=55;
// // // console.log("src: ",src);
// // // console.log("dest: ",dest);

// // let src = {
// //   age: 12,
// //   wt: 59,
// //   ht: 190,
// // };

// // let src2 = {
// //   value: 101,
// //   name: "Abdul Rahman Ali",
// // };

// // let dest = Object.assign({},src,src2);
// // src.age=55;
// // console.log("src: ",src);
// // console.log("dest: ",dest);

// let src = {
//   age: 12,
//   wt: 59,
//   ht: 190,
// };

// let dest = {};
// // cloning using iteration
// for(let key in src){
//     let newKey = key;
//     let newValue = src[key];
//     //insrt newKey and value in dest and create a clone
//     dest[newKey] = newValue;
// };
// src.age = 55;
// console.log("src: ",src);
// console.log("dest: ",dest);

// Garbage Collector
// always runs in backgraound we don't have control over it.