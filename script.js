// for (var i = 0; i<=5; i++){
//     function close(a){
//         setTimeout(function(){                      // gives 012345 with var cause look it pass value in the inner function in local scope so its value will remaindiffernt at each iteration
//             console.log(a);                      // its called closure
//         },2000);
//     }
//     close(i);
// }

// // FUNCTIONS
// function nameoffunc(){          // normal
//     return 1;
// }

// // 2/anonymous
// function ()=>{
//     return 2;
// };        // anonymous function is called immediately so it will return 2

// //3. arrow function
// ()=>{
//     return 3;
// }

// //4. function expression
// var myfunc=()=>{
//     return 4;
// }

// // 5. named function
// var myfunc2=function(){
//     console.log("hello");
// }

// console.log ("hello");

// var a=200;
// console.log(a);

// // fb(); // it give error as now fb is a variable
// // var fb=()=>{
// //     var x=100;
// //     console.log("this is output ",x);
// // }
// var fb= function(){
//         console.log("hello world ")
//     };
    
// fb(); // it give doesnt give error and call function
    
// first claass function
// function outer(cname){
//     console.log("helllofrom ", cname);     //complete this
//     return 1;
// }

// callback function 
//example
// setTimeout(()=>{
//     console.log("menu")
// }, 5000);
// setTimeout(()=>{
//     console.log("order")
// }, 2000);
// setTimeout(()=>{
//     console.log("dinner")
// }, 10000);
// setTimeout(()=>{
//     console.log("sauf")
// }, 1000);
// setTimeout(()=>{
//     console.log("pay")
// }, 15000);


// to make call back
function menu(cb){
    console.log("menu")
    setTimeout(cb, 5000);
}

function order(cb){
    console.log("order")
    setTimeout(cb, 2000);

}
function dinner(cb){
    console.log("dinner");
    setTimeout(cb, 10000);
}
function sauf(cb){
    console.log("sauf")
    setTimeout(cb, 1000);
}

function pay(){
setTimeout(()=>{
    console.log("pay")
}, 15000);
}

menu(()=>{
    order(()=>{
        dinner(()=>{
            sauf(()=>{
                pay();
            })
        })
    })
});