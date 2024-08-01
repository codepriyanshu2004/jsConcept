async function consume(){
    console.log("Inside function");
    const response = await createpromise2();
    const response1 = await createpromise2();
    // await promise base call ko hold karega
    console.log("response is",response);
}


console.log("start");
consume();
console.log("end")