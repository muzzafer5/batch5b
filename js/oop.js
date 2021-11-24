let Animal = {
    color : "red"
}




let Dog = {
    age : 4,
    stop : function(){
        console.log("stopped");
        return "hi"
    },
    __proto__ : Animal
}


Dog;
console.log(Dog.color)


Dog.__proto__ = User

 dog = Dog;
console.log(Dog.name, Dog.color);


let obj = {}
console.log(obj);

let arr = []
console.log(arr.__proto__.__proto__);


// mechanism allow to use property of other objects

//obj ->     array
// |           |
//proto      proto
//

let userFunctions = {
    country : "india",
    run : function(){
        console.log("running")
    },
    stop : function(){
        console.log("stopped");
    },
    print : function(){
        console.log(this.name);
    }
}

function User(name){
    // let user = Object.create(userFunctions); // create empty object and add userFunciton in prototype
    // user.name = name;
    // return user;    

    this.name = name;
    this.__proto__ = userFunctions
}


let user1 = new User("tmp1"); // {name : tmp1}
let user2 = new User("tmp2");


user1.country = "japan";

user1.run = function(){
    console.log("user 1 running");
}


console.log(user1, user2);

user1.__proto__.run();
user2.run(); // japan india

// user1.__proto__.country = "japan";

// user1.run();
// user2.print();


// closure


function outer(){

    function inner(){
        console.log(val);
    }

    let val2 = 3;
    let val = 2;
    return inner
    // return inner;
}




let inn = outer(); // local destroyed


console.log(inn);

// inn(); // undifined

// closure
function call(){
    for(var i=1;i<=5;i++){
    
        function ff(tmp){
            setTimeout(function(){
                console.log(tmp);
            }, tmp*1000);
        }

        ff(i);
    }
}

call(); // 5 second



function enc(){
    let counter = 0;
    this.increament  = function() {
        counter++;
        console.log(counter);
    }

    this.decreament  = function() {
        counter--;
        console.log(counter);
    }
}

let t_obj = new enc();

t_obj.increament();
t_obj.decreament();



 // _, #