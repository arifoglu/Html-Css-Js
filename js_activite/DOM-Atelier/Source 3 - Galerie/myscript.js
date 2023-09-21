window.onload = function (){

    let images = document.querySelectorAll("div.vignettes > img");
    console.log(images);

    let tableau = document.querySelectorAll("div.figure > img");
    console.log(tableau);

Array.prototype.forEach.call(images,function(imgObj){
   
    if(imgObj.querySelectorAll("div.vignettes > img"))

    imgObj.onmouseover = function(){
        this.style.opacity = "0.5"; 
        tableau[0].src = "images/vignettes/purple.jpg";

        
        
    };
    imgObj.onmouseout = function(){
        this.style.opacity = 1; 
        tableau[0].src = "images/grandes/blue.jpg";
    }




})



















}