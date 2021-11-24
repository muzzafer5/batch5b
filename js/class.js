
// class User{
//     constructor(name){
//         this.name = name;
//     }

//     printName(){
//         console.log(this.name);
//     }

//     printAge(){
//         console.log(this.age);
//     }
// }

function User(name){
    this.name = name;
}

User.prototype.printName = function(){
    console.log(this.name);
}

User.prototype.printAge = function(){
    console.log(this.age);
}



let user = new User("tmp");


user.printName(); // function

console.log(User.prototype);

//  are there classes in js
// no


let Emp = class{
    constructor(){
        
    }
}

let emp = new Emp();

class Animal{
    constructor(color){
        this.color = color;
        console.log("parent");
    }

    run(){
        console.log("running");
    }

    stop(){
        console.log("animal stop");
    }
}

class Dog extends Animal{

    static obj = "a";
    constructor(color){
        console.log("hello");
        super(); // parent constructor
        this.color = color;
    }

     static stop(){
        console.log(this.obj)
        // super.stop(); // animal constructor
        console.log("dog stopped");
    }
}





let dog = new Dog("red");
Dog.stop();
Dog.obj = "b";
console.log(Dog.obj);
console.log(dog.obj);


// Dog class inherit Animal class

// Dog class User

class Students{
    static cnt = 0;

    constructor(){
        Students.cnt++;
    }
}

let tmp = new Students();
let tmp1 = new Students();
let tmp2 = new Students();
let tmp3 = new Students();

console.log(Students.cnt);



let ar = [1, 2, 3];


