

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
