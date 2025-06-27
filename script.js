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

// //eerror
// console.log(aa);      // with let it give error that referential rirror called before intialise
// let aa=22;
// let bb=20;
// console.log(bb);

// console.log(aa);
// var aa=22;                  //undefined + 20 output 
// var bb=20;
// console.log(bb);

// var a=10;
// var b=20;
// console.log(a);
// function sumo2(p1,p2){ //parameter
//     var ans=p1+p2;
//     return ans;
//  }
// var a1=12;
// var a2=14;
// console.log(sumo2(a1,a2)); //5,4 are arguments


// var x=300;
// function f1(){
//     var a=20;
//     var b =30;
//     function f2(){
//         var c=50;
//         var a=60; // shadowing
//         function f3(){
//             var d = 80;
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

// for (var i = 0; i<=5; i++){
//     setTimeout(function(){                       // gives 6 ,6,6,6,6,6 because of all gives same value after 2 sec when use var aand 0,1,2,3,4,5 with let
//         console.log(i);
//         },2000);
// }

// console.log("hi ");
// setTimeout(function (){
//     console.log("hello set timeout");
//     },5000);
// console.log("end");             
// // output 
// // hi 
// // end
// // hello set timeout
// // because of asynchronous nature of setTimeout function it waits for 5 sec and then prints the output so it does not block the execution of code and hence prints hi and end first and then hello set timeout after 5 sec

// {
//     // compound statement
// }

var a = 10;
var b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
{
    var d = 40;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
// output
// 10
// 20
// 30
// undefined
// 10
// 20
// 30
// 40