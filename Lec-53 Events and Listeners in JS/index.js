// // // // // // // // // // monitorEvents(document);   // in console
// // // // // // // // // // unmonitorEvents(document); // in console


// // // // // // // // // function changeText() {
// // // // // // // // //     let fpara = document.getElementById("fpara");
// // // // // // // // //     fpara.textContent = "Hello Abdul Rahman";
// // // // // // // // // }
// // // // // // // // // let fpara = document.getElementById("fpara");
// // // // // // // // // fpara.addEventListener('click',changeText);

// // // // // // // // // // or

// // // // // // // // let fpara = document.getElementById("fpara");
// // // // // // // // fpara.addEventListener('click', function changeText() {
// // // // // // // //         let fpara = document.getElementById("fpara");
// // // // // // // //         fpara.textContent = "Hello Abdul Rahman";
// // // // // // // // });

// // // // // // // fpara.removeEventListener("click", changeText);

// // // // // // // // // fpara.removeEventListener('click',changeText); // in console

// // // // // // function changeText(event) {
// // // // // //     console.log(event);
// // // // // //     let fpara = document.getElementById('fpara');
// // // // // //     fpara.textContent = "Abdul Rahman Ali";
// // // // // //  }
// // // // // //  let fpara = document.getElementById('fpara');
// // // // // //  fpara.addEventListener('click',changeText);

// // // // // let anchorElement = document.getElementById('fanchor');

// // // // // anchorElement.addEventListener('click', function(event) {
// // // // //     event.preventDefault();
// // // // //     anchorElement.textContent = "GitHub"
// // // // // });

// // // // let paras = document.querySelectorAll('p');
// // // // for(let i=0; i<paras.length; i++){
// // // //     let para = paras[i];
// // // //     para.addEventListener('click', function(){
// // // //         alert("You have Clik On Para: " +(i+1));
// // // //     })
// // // // }

// // // // or best to use 

// // // let paras = document.querySelectorAll("p");
// // // function alertPara(event) {
// // //     alert("You have Clik On Para: " + event.target.textContent );
// // // }

// // // for (let i = 0; i < paras.length; i++) {
// // //   let para = paras[i];
// // //   console.log("eventListener added")
// // //   para.addEventListener("click", alertPara);
// // // }

// // // or best to use 

// // function alertPara(event) {
// //   alert("You have Clik On Para: " + event.target.textContent);
// // }
// // let mydiv = document.getElementById('wrapper');
// // document.addEventListener('click',alertPara)

// // only for span

// function alertPara(event) {
//     if(event.target.nodeName == 'SPAN')
//   alert("You have Clik On Para: " + event.target.textContent);
// }
// let mydiv = document.getElementById("wrapper");
// document.addEventListener("click", alertPara);

//Homework How to use donme content event to add dynamically sript