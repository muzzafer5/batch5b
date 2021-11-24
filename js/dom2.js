

// function print(){

//     console.log("first_time");
//     // console.log(count);
//     // if(count==4){
//     //     clearInterval(printFun);
//     // }
// }

// let setT = setTimeout(print, 4000);

// function clear(){
//     console.log("clear");
//     clearTimeout(setT);
// }


// let count = 0;

// function print_at_int(){
//     body = document.querySelector("body");
//     if(body.style.backgroundColor == "white")
//         body.style.backgroundColor = "red";
//     else
//     body.style.backgroundColor = "white";
// }


// const but = document.querySelector("#change_bg");
// but.onclick = clear;


// let printFun = setInterval(print_at_int, 100); // infinte time




let h1_list = document.querySelectorAll("h1");


console.log(document.getElementById("change_bg").innerText);

console.log(h1_list[1].innerText);

let dd_class = document.getElementsByClassName("dd"); // list

console.log(dd_class);

let hello = document.querySelector("#tmp"); // first match



// setInterval(() => {
//     if(hello.classList.contains("bg")){
//         hello.classList.remove("bg");
//         hello.style.height = "200px";
//     }
//     else{
//         hello.classList.add("bg");
//         hello.style.height = "100px";
//     }
//     if(hello.classList.contains("center")){
//         hello.classList.remove("center");
//     }
//     else{
//         hello.classList.add("center");
//     }
//     hello.classList.add("border");
// }, 500);

console.log(hello.classList); // Hello



let count = document.querySelector("#count");  // h1 -> 0
let increament = document.querySelector("#increament"); // button -> incream..

function increamentCount(){
    count.innerText = parseInt(count.innerText) + 1;
}

function increamentCount2(){
    count.innerText = parseInt(count.innerText) + 2;
}

increament.addEventListener("click", increamentCount); // 1 time
increament.addEventListener("click", increamentCount2); 

increament.onclick = increamentCount;
increament.onclick = increamentCount; // 2 inw

// 2time

// total = 3

// total = 4


let num = document.querySelector("#num"); // input
let add = document.querySelector("#add_num"); // button

function increamentNum(){
    count.innerText = parseInt(count.innerText) + parseInt(num.value);
}

num.addEventListener("change", (e)=>{console.log(e.target.value)});
num.onchange = (event)=>{console.log(event.target.value)};

add.onclick = increamentNum;

function trigger(){
    console.log(document.documentElement.scrollTop );
    if(document.documentElement.scrollTop>30 || document.body.scrollTop> 30){
        console.log("hi");
        hello.style.height = "50px";
        hello.style.backgroundColor = "blue";
    }
    else{
        hello.style.height = "200px";
    }
}

document.documentElement.onscroll = trigger;
document.body.onscroll = trigger;

