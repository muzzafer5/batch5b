

// let arr = [1, 4, 2, 3];

// arr.sort((a,b)=>{return b-a});

// console.log(arr);

// Data types

//  Number


let a = 1.2;

console.log(typeof a);

// 10^9 + 7

 a = 1e91 + 7;

// What is range of number in js ?

// -2^53-1 to 2^53-1

console.log(Number.MAX_SAFE_INTEGER.toString(2))


// 32

// max range 2^31 - 1

// 111111111111


// n

/*
    -3
    -2
    -1
    0
    1
    2
    3
*/ 


a = 123n; 
console.log(typeof a, a);


/*

0 1 2 3 4 5 6 7 8 9 A B C D E F

10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1A, 1B, 1C, 1D, 1E, 1F, 20


35 => 3*16 + 5 = 53

2B4 => 2*256 + 11*16 + 4 = 692

base 2  =  13
        1101  binary 

        base 16 = 13
                D hexadecimal

        base 10   =  54 (decimal)
        base 16 = __ (hexadecimal)

        base 10 -> 23 => 2*10 + 3*0
        15 -> f
        16 -> 10 -> 1*16 + 0


        35
         3*10 + 5

        11

        1*2 + 1 = 3


        36 (base 16)

    base 8
    0 1 2 3 4 5 6 7 10 11


    34 = 3*8 + 4 = 28
*/ 

a  = 0o34;

b = a.toString(10);

b = parseInt(b);
console.log(typeof b, b);

// if we converting lower base number to higher

// length increase, lenght may increase, length decr, len may dec.



// let num1 = (2.94).toPrecision(2), num2 = (1.01).toPrecision(2);
// let num = num1 + num2;

// console.log(num1+0.01 == 2.95)


// console.log(Math.round(num));

// 2 to 5
let randNum = parseInt(Math.random() * 4 + 2); // ? 5
console.log(randNum);
// 

// String

let str = "HelLo";
// str = 'hi';

// str = "hey "  + (2+3+4) + " random number ";

// string is immutabale

// str[0]='y'; not valid

let tmp = "";

for(let i=0;i<str.length;i++){ // n
    tmp += str[i]; // o(n)
    console.log(tmp);
}
tmp = tmp.toLowerCase();
console.log(tmp);


// const ar = [1,2,4];

// ar[0] = 4;

console.log(tmp.includes("ell"));


console.log(tmp.indexOf("ell"));

tmp1 = tmp.substr(1, 4);
console.log(tmp1);



// Map

let obj = new Object(); // = {}

let arr = new Array(); // = []

let mp = new Map();

console.log(typeof obj, typeof arr, typeof mp);

mp.set("1", "ali");

mp.set(1, "2");
obj = {"name " : "tmp"}
mp.set(obj, "1");

for( let key of mp.entries()){
    console.log(key);
}

console.log(mp.has(obj));
// set
let st = new Set();
st.add(1);
st.add(2);
st.add(0)

console.log(st);
console.log(st);
for( let val of st.values()){
    console.log(val);
}
let st2 = st;
st.delete(2);
console.log(st, st2);
// weakmap and weakset

let wMp = new WeakMap();
wMp.set({tmp : "valll"} , "val");
console.log(wMp);