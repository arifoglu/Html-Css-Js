window.onload = function(){

let rubriques = document.querySelectorAll("ul#navigation > li");
// console.log(rubriques);   NodeList(3) [ li, li, li ]

Array.prototype.forEach.call(rubriques,function(liObj){
// console.log(liObj);      li li li 

          liObj.querySelector("a").onclick = function (e)
          {
            e.preventDefault();
            console.log(e);
          }  ;

          if(liObj.querySelector("ul.sousmenu"))

          liObj.onmouseover = function(){
            liObj.querySelector("ul.sousmenu").style.display = "block";
          }
          liObj.onmouseout = function(){
            liObj.querySelector("ul.sousmenu").style.display = "none";
          }


})
}