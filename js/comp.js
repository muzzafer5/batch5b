"use strict"

// maths
let a = 4;
let b =5;

a++; // a = 6;


++a // a==6


let c;


//  a = 6

// c = a++;
// console.log(c); // 7

// c = ++a;
// console.log(c); // 8

a = 5;
c = b = a;

// console.log((5++));

// console.log(4* (++5));



// console.log( 2+(3+'2')); // 232  25  232
             
// console.log('2' * 2); // 4


// console.log(parseInt("a3"));

// comparision

//equal (==)
a=4;
console.log('4' == 4); // true

console.log(["hi"] == "hi"); // true

console.log(undefined == null); // true


console.log(null === undefined); // false

// question  a->b, b->c a->c

console.log([""] == "") // true

console.log("" == 0) // 

console.log(0 === "0") // true
            
console.log([""] == "0") // false

console.log("" == ["", ""]); // false




// if else
let x = 4, y=4;
if(a==4)
    x=10, y=9;

console.log(x,y);
if (a == 4) {
    console.log("hi");
}
else{
    console.log("bi");
}


if (a == 9) {
    console.log("hi");
}
else if(b==1){
    console.log("bi");
}
else{
    console.log("tmp");
    if('4'==4)
        console.log("hi");
    else
        console.log("bi");
}

// a = (x+5, y+5); // x = 10, y = 9;



a==4 ? console.log("hi"): console.log("bi");

a == 9 ? console.log("hi") : b == 1 ? console.log("bi") : console.log("tmp"), '4'===4 ? console.log("hi"):console.log("bi");



// for(let i = 0; i<4;i++){
//     if(1){
//         continue;
//     }
//     console.log("hello");
// }

let arr = ['2', 3, '4', 5];

for(const ele of arr){ // extra time
    console.log(ele);
}


console.log("final");
let i = 0
for (;;) {
    i++;
    if(i>4)
        break;
    console.log("hello");
}


i=2
while(i--){ // 2 times
    console.log("in while");
}

i=0;
do{
    console.log("in do while");
}while(i>0);


let val = "you";

switch (val){

    case "hi":
        console.log("done");
        break;

    case "hello":
        console.log("done perfectly");
        break;

    case "hello":
        console.log("repeated");
    default:
        console.log("wrong");
}

let varib = (4,3); // 3

//let str = "hey " + val + "!";



let str = `hey ${4, 3}! ${val}`; // 3 4 | 

console.log(str); // hey you
