
let count = document.querySelector("#count");  // h1 -> 0
let increament = document.querySelector("#increament"); // button -> incream..

function increamentCount(){
    
    count.innerText = parseInt(count.innerText) + 1;
}

function increamentCount2(){
    count.innerText = parseInt(count.innerText) + 2;
}




// increament.addEventListener("click", increamentCount); // 1 time
// increament.addEventListener("click", increamentCount); 

increament.addEventListener("click", increamentCount); //1

increament.onclick = increamentCount; // 1



// 3


// bubbling

red_con = document.querySelector("#red_container");

red_con.addEventListener("click", increamentCount); //1

// 1

yellow_con = document.querySelector("#yellow_container"); // 2


yellow_con.addEventListener("click", (event)=>{event.stopPropagation()}) // red 
yellow_con.addEventListener("click", increamentCount2);

// event delegation

// let td_list = document.querySelectorAll("td");

// let first_child = td_list[0];

// function make_red(event){
//     event.target.style.backgroundColor = "red"
// }


// for(let i=0;i<td_list.length;i++){
//     td_list[i].addEventListener("click", make_red);
// };

let tbl = document.querySelector("#tbl");


function make_red(event){
    let td_tag = event.target.closest("TD"); // cell no 1
    if(td_tag){
        if(tbl.contains(td_tag)){      
            for(let i =0 ;i<td_tag.childNodes.length;i++){
                let child = td_tag.childNodes[i];
                if(typeof child == "object" && child.tagName!=undefined){
                    console.log("hi")
                    child.style.backgroundColor = "red";
                }
            }
           td_tag.style.backgroundColor = "red";
        }
    }
}


tbl.addEventListener("click", make_red);


// mouse event

// mouse over and mouse out  

// mouse enter and mouse leave

// red_con.addEventListener("mouseover", ()=>{red_con.style.backgroundColor = "black"; console.log("hello")});


// red_con.addEventListener("mouseout", ()=>{red_con.style.backgroundColor = "red"; console.log("bye")});


red_con.addEventListener("mouseenter", ()=>{red_con.style.backgroundColor = "black"; console.log("hello")});


red_con.addEventListener("mouseleave", ()=>{red_con.style.backgroundColor = "red"; console.log("bye")});


let input = document.querySelector("#inp");

function verify(event){
    let key = event.key;
    if(key<="9" && key>= "0" || key=="a"){
        console.log("number");
    }
    else{
        console.log("not num");
        return false;
    }
}


let login = document.forms[0];

let input_user = login.elements.username;

let error = document.querySelector("#error");


function verify_user(event){
    let value = event.target.value;
    if(!(value.includes("@") && value.includes(".com"))){
        event.target.focus();
        // event.target.classList.add("invalid");
        // error.innerText = "Please enter valid username";
    }

}

function active_focus(event){
    event.target.classList.remove("invalid");
    error.innerText = "";
}

// input_user.addEventListener("focus", active_focus);
// input_user.addEventListener("blur", verify_user);

// input_user.addEventListener("change", ()=>{console.log("update")});
// input_user.addEventListener("input", (event)=>{console.log(event.target.value)});


function prevent_paste(event){
    // console.log("paste, notify server");
    alert("Warning!");
    event.preventDefault();
}


// input_user.addEventListener("paste", prevent_paste);


function validate(event){
    event.preventDefault();
    let em = login.elements.email.value;
    if(em=="" || !em.includes("@") || !em.includes(".com")){
        console.log("wrong email");
        document.getElementById("error_email").innerText = "Wrong email id";
        login.elements.email.classList.add("invalid");
        return false;
    }

    let ps = login.elements.password.value;

    if(ps.length<8){
        console.log("wrong password");
        login.elements.password.classList.add("invalid");
        return false;        
    }

    //method post

    if(false){
        location.href = "https://replit.com/team/acciojob-batch-5B/";
    }
    else{
        alert("wrong email id or password");
        login.elements.password.value = "";
    }
        
}
login.addEventListener("submit", validate);


// input.onkeydown = verify;