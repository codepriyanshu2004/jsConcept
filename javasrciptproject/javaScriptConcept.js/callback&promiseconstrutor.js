// callback A callback is a function passed as an argument to another function, which gets invoked after

//  the main function completes its execution.


// With callbacks, though, you can keep the program running while these tasks happen in the background

// Callbacks enable you to handle the outcomes of asynchronous operations in a non-blocking way
// This means your program can keep running while the operation is ongoing.


// function h(x,fn){
//     // f -> high order function
//     // fn -> callback
//     console.log(x*x);
//     fn();
// }

// h(2,function(){
//     console.log("Done with callback")

// })                   

//  this h and y function are synchronous

// function y(x,fn){
//     console.log(x*x);
//     fn(x*x);
// }

// y(10,p);

// function p(n){
//     console.log("squared value is",n);
// }



// asynchronous


// console.log("start");

// setTimeout(function(){
//     console.log("time id done")
// },3000)
// console.log("end");

// function a (){
//     console.log("priyanshu");
// }
// setTimeout(a,3000);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// promise javaScript Promises are used to simplify managing multiple asynchronous operations,
//  preventing callback hell and maintain readablity it have pending fullfiled and reject state


// function createpromise(){
//     return new Promise(function exex(resovle,reject){
//          // your code Asynchronus code


//          setTimeout(function f (){
//             console.log("Timer done")
//             // resovle("done")
//             reject("done")

//          },3000)

//     });
// }
    

//  console.log("start")
// let x = createpromise();
// console.log("Got a new promise");
// x.then(function f(value){
//     console.log(("promise done","Then tabhi chalega ab settimeout complted ho jaeyga",value));
// }).catch(function g(value){
//     console.log("handled",value);
// }).finally(function fn(){
//     console.log("finally always run resovle or rejected");
// })

// console.log("end")

// some block code

// for(let i =0;i<1000000000;i++){

// }


// Async And await

// async makes a function return a Promise. await makes a function wait for a Promise

// async function consume(){
//     return 10
// }

// async always return a promise
// console.log(consume())



// function createpromise2(){
//     return new Promise(function exex(resovle,reject){
//          // your code Asynchronus code


//          setTimeout(function f (){
//             console.log("Timer done")
//             // resovle("done")
//             resovle("done")

//          },3000)

//     });
// }

// async function consume(){
//     console.log("Inside function");
//     const response = await createpromise2();
//     const response1 = await createpromise2();
//     // await promise base call ko hold karega
//     console.log("response is",response);
// }


// console.log("start");
// consume();
// console.log("end")



// async function consume(){
//    try{
//     console.log("Inside function");
//     const response = await createpromise2();
//     // const response1 = await createpromise2();
//     // await promise base call ko hold karega
//     console.log("response is",response);
//    } catch(err){
//     console.log("handled",err);
//    }
// }



// console.log("start");
// consume();
// console.log("end")


// creating a promise
// const promiseone = new Promise( function(resovle,reject){
//     // use in Db call

//     setTimeout(function(){
//         console.log("Async task is complte");
//         resovle()
//     },3000)

// })

// consuming the promise

// promiseone.then(function(){
//     console.log("promise consumed")
// })


// Real exam
// const promisetwo= new Promise(function(resovle,reject){
//     // Db call to get all user from database
//      setTimeout(function(){
//         resovle({username:"dilip", email:"sid@"})

//      },1000)
        

// })

// promisetwo.then(function(user){
//     console.log(user)
// })

// async function comsumepromise(){
//     const response = await promisetwo
//     console.log(response)
// }
// comsumepromise()
    
//  fetch() method is used to request data from a server

// fetch Api using Async and wait

// async function getAlluser(){
//  const response =  await fetch("https://jsonplaceholder.typicode.com/users");
//  const data =response.json();
//  console.log(data)
// }
// getAlluser()


// fetch Api using promise

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     return response.json();

// })
// .then((data) => console.log(data))
// .catch((data)  => console.log(error))


// JSON is use for storing and transporting data

// JSON is often used when data is sent from a server to a web page





        