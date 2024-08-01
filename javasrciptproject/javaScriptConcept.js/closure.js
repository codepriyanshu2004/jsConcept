
let score = 4;

function one(){
    let score = 0
    console.log(score);
}
function two(){
    let score = 1
    console.log(score);
}
function three(){
    
    console.log(score);
}

// one()
// two()
// three()
// console.log(score);



// exapmple 1
// lexical scoping  is Global variables can be accessed from anywhere within the program, while 
// local variables can only be accessed within the function or block in which they are defined.
// The nested scope allows functions to access variables defined in parent functions, 
function outerfunc(){
    let outervar ="I am at scope level 1"

    function innerfunc(){
        let innervar ="I am at scope level 2"
        // console.log(outervar)     inner function outer function ka variable
        //  acces kar sakra hain
    }
    innerfunc()

    // console.log(innervar);   outer function innerfuction
    //  ka variable acces nhi kar sakta error show hoga

}
// outerfunc()


// exmaple 2

const myGlobalvalue = 0;

function func(){
    const var1 =1;
    console.log(myGlobalvalue);
    // console.log(var2) error hoga ouerfunction inner ko acces nhi kar karta
    // but inner function outer ko kar sakta hain

    function inneroffunc(){
        const var2=2;
        console.log(var2,var1,myGlobalvalue);

        function innerofinnerfunc(){
            const var3 =3;
            console.log(var3,var2,var1,myGlobalvalue)
        }
        // innerofinnerfunc()
    }
    // inneroffunc()
}
// func()



// closure

// closure is you gain access to an outer function’s scope from an inner function.
// access to variables from their containing scope even after the parent function has finished executing. 
// They’re useful for maintaining private data,


// function superfunc(){
//     let outervalue ="I am outer"

//     function minorfunc(){
//         console.log(outervalue)
//     }
//     minorfunc( )
// }
// superfunc()


// const errormassge= "file not found";

// setTimeout( function callback() {
    // console.log(errormassge)     closure kaam aya jo v innerfunction hai unke pass acces hain outer memory ka jaise erroemassage
    

// },1000)




let pagecount =0;

let arr =[5,2,3];

// arr.forEach(function iterator(num) {
//     pagecount++;
//     console.log(num);
    
// });

// console.log("pagecount",pagecount)

arr.forEach((num) =>{
    pagecount++
    console.log(num);


});
console.log("pagecount",pagecount)