/////  onmouseover()    and this
document.querySelector("img.blue").onmouseover = function()
{
    this.src = "/DOM-Pratique/Source 1- Img_mouseover/images/green.jpg";
    document.querySelector("div#container").style.backgroundColor = "#073d41" ;
};
///// onmouseover()     and  this
document.querySelector("img.blue").onmouseout = function()
{
    this.src = "/DOM-Pratique/Source 1- Img_mouseover/images/blue.jpg";
    document.querySelector("div#container").style.backgroundColor = "#719171" ;
};

let images =document.querySelectorAll("div#container > img");
// console.log(images);

Array.prototype.forEach.call(images,function(imgObjet){
//    console.log(imgObjet);

    imgObjet.onclick = function(){
        this.style.opacity = "0.5";
        this.classList.add("anim");
        console.log(imgObjet)
    };
    imgObjet.ondblclick = function(){
        this.style.opacity = 1;
        this.classList.remove("anim");
        console.log(imgObjet);
    };
});


