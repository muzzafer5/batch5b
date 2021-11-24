/*

Es6 
let
const 

Es5
var

*/ 


//console.log(x); // error of initiliation
// console.log(a); // undefined

// let x = 4;
// let y = 5;
// var a = 6;

// hoisting

// temporal  deadzone

// varibale shadowing


// invalid shadowing
let a = 4;

{
    const a = 5;
    console.log(a);
}

if(true)
{
    console.log("hello");
    let xx=3;
    console.log(xx);
}
console.log(a);

// Es5
var x=5;
var x=4;

// Es6 -> 2015
