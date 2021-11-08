let arr = [1, 2,{age:4}, "hello", true];

// let arr = new Array(1, 2,  "hello", true);


// let obj = {
//     1 : 2,
//     2 : "hello",
//     3 : true
//     4 : 12
// }



arr.push("12"); // O(1)
arr.pop(); // O(1)

let del_val = arr.shift(); // O(n)

arr.unshift(10); // O(n)


console.log(arr, del_val);

// for(let i=0;i<arr.length ; i++){
//     console.log(arr[i]);
// }

// for(let ele of arr)
//     console.log("h");


// let arr2 = arr;

let arr2 = [];

for(let ele of arr){
    arr2.push(ele);
}

arr2[2].age = 9;
console.log(arr); // age value changed or not?
console.log(arr2);


let obj1 = {
    name : "hi",
    age : 2,
    address : {
        pin : 123,
        street : [123, 'landmark']
    }
}


// deep copy
function objCopy(x, y){ // copy y in x
    for(key in y){
        if(typeof y[key] == "object"){
            x[key] = {};
            objCopy(x[key], y[key]);   
        }
        else
            x[key] = y[key]; // obj2.address = obj1.address
    }
}

let obj2 = {};
objCopy(obj2, obj1);

obj2.age = 3;//
obj2.address.street[0] = 120;

console.log(obj2, obj1);


console.log(arr);

function call(val){
    console.log("each item",val);
}


/*
forEach(call){
    let ind;
    let item = arr[ind]; // 2
    call(2, ind);
}

*/


// arr.forEach(item=>console.log(item));

//splice

//arr.splice(0, 3);
 // map and filter

let new_arr = arr.slice(0, 4);
console.log(new_arr);

/*
newRes.push(arr.map(call){
    let ind;
    let item = arr[ind]; // 2
    return call(item);
})

*/

let res = arr.find(item=>{ return (typeof item == "number") && item<1;}); // O(n)
console.log(res); // 10

let results = arr.filter(item =>  (typeof item == "number") && item < 5) //'1'
console.log(results);

let newRes = arr.map(item => {return `this element is ${typeof item} and the value of element ${item}`}); let newRes = arr.map(item => {return `this element is ${typeof item} and the value of element ${item}`});

console.log(newRes);

// 1 && 1 