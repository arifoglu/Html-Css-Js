let btn1 =document.querySelector("#button-try");
// console.log(btn1);

btn1.onclick = ()=>{

/// document.URL

document.getElementById("demo1").innerHTML += document.URL;
    
/// document.LastModified
document.getElementById("demo1").innerHTML += "<br>" + document.lastModified;


}