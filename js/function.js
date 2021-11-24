

function sayHello(){
    console.log("Hello");   
    return "print";
}


// return value of function is null or undefined then ret value 6 else ret return value
// let ret = null;

// let val = ret!==null ? ret : 10;

// val = ret??10;
// console.log(val); 


// ret = sayHello() ?? 6;

// console.log(ret); 



// let f = sayHello;

// console.log(f(), sayHello(), '\n', f());



/*
    Hello
    Hello
    print print
*/




let funct = function () {
    console.log("hi");
    return 3;
};


function square(a=3, b){
    console.log(b);
    return a*a;
}

// ()=>{}

//let fun = (a) => { return a}

// let fun = function(a){
//     return a*a;
// }


// return console.log("func called")
let fun = a => {a+=2; return a*a};



// function write(){
//     console.log("hello");
// }

// function read(){
//     let tmp = 4;
//     tmp += 2;
//     return tmp;
// }

function f(task, num, f1, f2) {

    if (task == "double") {
        return f1(num);
    }
    if (task == "square")
        return f2(num);
}

function double(a){
    return a*2;
}

let val = f("double",4, double, a => a*a);

let varFun = double;
console.log(varFun);

//let val = f("double",4, a=>a*2, a => a*a);



function task(f1, f2){
    /*
     kxs 
     lkdc l

    */    
   if("error"){
       f2();
       return;
   }
   f1();
}


// x = 10;
function Mutiply(num){
    this.a = function ret(){
        console.log("hi");
    }
}

let mul = ()=>{
    console.log("hi");
}
// console.log(mutiply(2));
// let mutipleBy2 = new mul();

// let tmp = mutipleBy2.a();

// console.log(tmp);



function newF(p1, p2, ...rest){

    console.log(p1, p2);
    console.log(rest);

}


newF("hello", "sec", "sdecf", 1, {h : 1});

let arr = [1, 2, 3, 5];
console.log(Math.max(...arr));

console.log(arr);
console.log(...arr);


newArr = [3, ...arr, 5];

str = "ksd"
console.log("k", "s", "d");
console.log(...str);
console.log(str);
 

newF(...str, 1); // 


function f(){

    for(var i=0;i<5;i++){
        setTimeout(() => {
            console.log(i+3);
        }, 1000*i);
    }

}

// 5 5 5 5 5

f();