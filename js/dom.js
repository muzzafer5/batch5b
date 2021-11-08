

//dom manipu...
// document.getElementById("tmp").innerHTML = "Hello world!";

console.log(document.body);


// bom manipu..
console.log(location.href);


let tmp1 = document.getElementById("tmp1");

tmp1.innerHTML = "Ali";
tmp1.style.border = "1px solid black";

let tmp_class_ele = document.getElementsByClassName("dd");

tmp_class_ele[1] = "div2";

let tmp_tags = document.getElementsByTagName("h1");


let firstMatch = document.querySelector("ol > li")
// firstMatch.innerHTML = "item ";

// console.log(ele);


let list_elements = document.querySelectorAll("ol > li");

console.log(list_elements);
list_elements[2].innerHTML = "3rd";

for(let i =0 ; i<list_elements.length;i++){
    if(list_elements[i].id == "item2"){
        list_elements[i].style.backgroundColor = "red";   
    }
    else
        list_elements[i].style.backgroundColor = "blue";
}

let list_a = document.querySelectorAll("a");

for(let i =0;i<list_a.length;i++){
    console.log(list_a[i].outerHTML);
    if(list_a[i].matches('a[href$="a2"]')){
        list_a[i].style.color = "red";
    }
    else{
        list_a[i].style.color = "blue";
    }
}


let button  = document.getElementById("change_bg");

button.onclick = (event) =>{
    if(document.body.style.backgroundColor == "blue")
        document.body.style.backgroundColor = "white";
    else
    document.body.style.backgroundColor = "blue";
    document.getElementById("change_bg").style.backgroundColor = "red";
}

let hello = document.getElementById("tmp");

console.log(hello);
hello.onmouseover = function(){
    document.getElementById("tmp").style.backgroundColor = "grey";
}

hello.onmouseleave = function(){
    document.getElementById("tmp").style.backgroundColor = "white";
}

let chkbox = document.getElementById("button_same");


let input_p = document.getElementById("add_p");
input_p.onchange = (event) =>{
    console.log(event.target.name);
    document.getElementById("add_p").setAttribute("value", event.target.value);
}

chkbox.onclick = () => {
    let txtVal = document.getElementById("add_p").getAttribute("value");
    console.log(txtVal);
    document.getElementById("add_c").setAttribute("value", txtVal);
}