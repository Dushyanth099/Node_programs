function myFunction(){
    console.log("Hello from my function1!")
}
function myFunction2(){
    console.log("Hello from my function2!")
}
module.exports={
    foo:"bar",
    myFunction1:myFunction,
    myFunction2:myFunction2,
}