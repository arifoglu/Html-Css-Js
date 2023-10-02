////// we can find with  .hreflang / .id  / .rel / .target / .type  

///// href and id

let myBtn = document.querySelector("#btn1");
console.log(myBtn);

let linkGoogleHref = document.querySelector("#myAnchor").href;

let linkGoogleId = document.querySelector("#myAnchor").id;
console.log(linkGoogleId);

myBtn.onclick =()=>{
    document.getElementById("demo").innerHTML +=linkGoogleHref;
    
    document.getElementById("demo").innerHTML += "<br>" + linkGoogleId;
     
};


