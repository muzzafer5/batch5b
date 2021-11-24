console.log(this); // window

var name = "global";

function callName(id, age){
    console.log(id, age, this.name);
}


let user1 = {
    name : "bharat",
    id : "1"
}


let user2 = {
    name : "ritesh"
}

// fun.bind(context)
// let fun = user1.userCall.bind(user2);

// user1.userCall();

// bind
let userFunc = callName.bind(user1);
userFunc();

// call
callName.call(user1, 2, 104);

let args = [2, 104];

callName.call(user1, ...args);

//apply
callName.apply(user1, args);