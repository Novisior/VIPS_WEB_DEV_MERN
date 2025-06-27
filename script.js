// console.log("hi hello"); 
// // variables
// //1st metho
// var a=10;
// a=20;
// console.log(a);
// // 2nd
// let b=20;
// //now cant redeclare
// //3rd
// const c = 54;
//cant reassign
//fumvtions

// // how js code runs 
// let a=10;
// let b=20;
// console.log(a);
// function sumo2(p1,p2){ //parameter
//     let ans=p1+p2;
//     return ans;
//  }
// let a1=12;
// let a2=14;
// console.log(sumo2(a1,a2)); //5,4 are arguments

// //eerror
// console.log(aa);      // with let it give error that referential rirror called before intialise
// let aa=22;
// let bb=20;
// console.log(bb);

// console.log(aa);
// var aa=22;                  //undefined + 20 output 
// var bb=20;
// console.log(bb);



// var x=300;

// function f1(){
//     let a=20;
//     let b =30;
//     function f2(){
//         let c=50;
//         let a=60; // shadowing
//         function f3(){
//             let d = 80;
//             return a+b+c+d+x;
//         }
//         return f3();
//     }
//     return f2();
// }
// console.log(f1());


// setTimeout(function (){
//     console.log("hello set timeout");
// },5000);

// setInterval(function (){
//     console.log("hello set interval");
// },2000);

for (let i = 0; i<=5; i++){
    setTimeout(()=>{                       // gives 6 ,6,6,6,6,6 because of all gives same value after 2 sec when use var aand 0,1,2,3,4,5 with let
        console.log(i);
        },2000);
}

