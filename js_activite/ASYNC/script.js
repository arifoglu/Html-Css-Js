
/////  setTimeout()
// after 3 seconds Hello display
function myFunction(){
    document.getElementById("demo").innerHTML = "Hello"
};
setTimeout(myFunction,3000);

// after 5 seconds Salut display
setTimeout(()=>{document.getElementById("demo").innerHTML = "Salut"},5000);

// after 7 seconds Bye!! display
setTimeout(()=>{document.getElementById("demo").innerHTML = "Bye!!!"},7000);

////
/////  setInterval()
function myWatch(){
    let d = new Date();
    document.getElementById("demo2").innerHTML = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
};
setInterval(myWatch,1000);


//////       Promise

const myPromise = new Promise(function(myResolve,myReject){
    setTimeout(function(){ myResolve("HI!!!");},8000);
});

myPromise.then(function(value){
    document.getElementById("demo3").innerHTML = value;
})


/////           Async and Await

function myPage(some){
    document.getElementById("demo4").innerHTML = some;
};

async function myFunction2(){return "HALLO"};

myFunction2().then(
    function(value){ myPage(value);},
);

//////

