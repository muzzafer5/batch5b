// let obj = {};

// let obj2 = new Object();




let obj = {
    name : "Ram",
    age : 21,
    address : {
        pin_code : 274303,
        street : "kvkd"
    },
    printAdrress : function(){
        console.log(this.name, this.age, this.address);
    },
    1 : "hello",
    "1" : "hi"
};


// for(let tmp in obj){
//     console.log(tmp, obj[tmp]);
// }

obj.name = "Shyam";

obj.printAdrress();

console.log("name" in obj);

console.log(obj[1]);


// reference


let obj1 = {
    name : "Ram",
    age : 21,
    address : {
        pin_code : 274303,
        street : "kvkd"
    }
};

let obj2 = {};

// for(let tmp in obj1){
//     obj2[tmp] =  obj1[tmp];
// }

Object.assign(obj2, obj1);

obj2.address.pin_code = 10;

console.log(obj1);
console.log(obj2);
// will it clone completely ? 

// write the code that will do deep copy completely


// this 

// let name = "global";

// function fun(){
//     var name = "fun_scope";
//     let f = (name) =>{
//         console.log(name)
//     }
//     f(name);
// }



let f = ()=>{
    // console.log(this);
}

let tmp_obj1 = {
    name : "tmp1",
    call : f
}

let tmp_obj2 = {
    name : "tmp2",
    call  : f
}

f();
tmp_obj1.call();
tmp_obj2.call();


// ?. ??

let response = {
    detail :{
        square : num=>num*num,
    }
};

let sq = response?.detail?.square(2);

console.log(sq);