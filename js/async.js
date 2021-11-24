

console.log("first line");



// let currtime = new Date().getTime();

// let nextTime = new Date().getTime() + 2000;

// // code that should wait for 2 seconds;
// while(currtime < nextTime){
//     currtime = new Date().getTime();
// }

// console.log("second line");

// setTimeout(function(){
//     console.log("second line");
// }, 2000);

console.log("third line");


// callback

function outer(inn){
    inn();
    console.log("bi");
}

function inn(){
    console.log("hi");
}

outer(inn);


let data = ["tmp1"];

// function putData(name, getData){
//     setTimeout(()=>{
//         console.log(myPromise);
//         console.log("write");
//         data.push(name);
//         getData();
//     }, 2000);
// }

// function getData(){
//     setTimeout(()=>{
//         console.log("read");
//         console.log(data);
//     }, 1000)
// }

// putData("tmp2", getData);


// promise 

// represent future result of asycnhronous call

let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let x = 4;y=4;
            if(x==y){
                resolve(x);
            }
            else{
                reject("error");
            }
    }, 3000);
});
// resolve after 3 seconds;

console.log(myPromise);

// myPromise.then((returnValue)=>{
//     console.log("everything executed, now you can show results");
//     console.log("show data");
//     console.log(returnValue);
// }).catch(error=>{
//     console.log(error);
// })

// promise state

// resolve
// reject
// settled
// pending



function putData(name){

    promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data.push(name);
            resolve("write done");
        
        }, Math.random() * 2000);
    })

    return promise;
}

function getData(){
    promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("read done");
        }, Math.random() * 1000);
    })
    return promise;
}

// to run first putData then you will be running getData

putData("tmp2").then(returnValued => {
    // when u will put data, these line execute
    console.log("writing is done, you call api");
    console.log(returnValued);
    getData().then(getValued => {
        // when u will get these line execute
        console.log("you have done reading");
        console.log(getValued);
    });   
})


newPrmise = new Promise((resolve, reject)=>{
    // fetch() post vf code
    let status = true;
    if(status){
        resolve("verification is done");
    }
    else{
        reject("code do not match");
    }
    
})

newPrmise.then(val=>{
    // move to the next page
    console.log(val);
}).catch(error=>{
    /*
        document.q(input);
        inp.
        re
        red..
    */ 
});

// async and await

async function f(){

    let val = await myPromise; // block your thread
    
    console.log("second oper");

    let tmp = 0;
    tmp += val;
    console.log(tmp);
    return "completed";   
}

f();


// get
function callGetAPI(){
    fetch("https://jsonplaceholder.typicode.com/posts", {method : "get"}).then( async (response)=>{
   
        console.log(response);
        let dataFromServer = await response.json(); // body
    
    
        let dataContaner = document.getElementById("response_data");
    
        let str = "";
    
        for(let obj of dataFromServer){
            console.log(obj);
            str+= `<div> <b> ${obj.title} </b> <br> ${obj.body} <hr> </div>`;
        }
    
        dataContaner.innerHTML = str;
    
    }).catch(error=>{
        console.log(error);
    })
    
}

const newFbPost = {
    title: 'A blog post by Kingsley',
    body: 'Brilliant post on fetch API',
    userId: 200,
    };


// post
function callPostAPI(data){
    fetch("https://jsonplaceholder.typicode.com/posts", 
        {method : "post", 
        headers: {
        'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)}
    ).then( async (response)=>{
   
        console.log(response);
        let dataFromServer = await response.json(); // body

        console.log(dataFromServer)
    
    }).catch(error=>{
        console.log(error);
    })  
}

callPostAPI(newFbPost);