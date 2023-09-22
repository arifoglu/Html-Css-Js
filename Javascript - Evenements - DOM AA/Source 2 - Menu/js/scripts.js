window.onload = function(){



let rubriques = document.querySelectorAll("ul#navigation > li");

// console.log(rubriques);

Array.prototype.forEach.call(rubriques,function(liObj){


    liObj.querySelector( " a " ).onclick = function(e)
    {
        e.preventDefault();
        console.log(e);
    };
    

   // console.log(liObj);


   if(liObj .querySelector("ul.sousmenu")  )

    liObj.onmouseover =function()
    {
      // console.log(" survol");
     //  this.querySelector("ul.sousmenu");

     liObj.querySelector("ul.sousmenu").style.display = "block";

    };
    liObj.onmouseout =function()
    {

     liObj.querySelector("ul.sousmenu").style.display = "none";

    };

});


}