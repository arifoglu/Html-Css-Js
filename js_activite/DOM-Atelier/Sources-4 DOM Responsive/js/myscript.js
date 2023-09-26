const checkbox = function(){

    let articleHeaders = document.querySelectorAll("article header");
    // console.log(articleHeaders); 2 headers comes

    Array.prototype.forEach.call(articleHeaders , function( header ){

        header.onclick = function(){
        //    console.log(header);   every click one header come

        if( this.classList.contains("checked"))
        {
            this.classList.remove("checked");
            this.querySelector("h2 img").src = "images/checkbox-blank.svg";
        }
        else
        {
            this.classList.add("checked");
            this.querySelector("h2 img").src = "images/checkbox-checked.svg";
        }
        }
    })
}
const menuMobile = function(){

    const menuBurger =document.querySelector("header button");
   // console.log(menuBurger); // button come
    
    menuBurger.onclick = function(){
        const body = document.querySelector("body");
   //  console.log(body);      // body come

   if(body.classList.contains("openmenu"))
   {
    body.classList.remove("openmenu")
   }
   else
   {
    body.classList.add("openmenu")

   }
    }
}
const menuAnim = function(){
    const rubriques =document.querySelectorAll("div.container > aside > ul li > a");
    // console.log(rubriques); // all a comes

    Array.prototype.forEach.call(rubriques , function ( rubrique ){
    //    console.log(rubrique); //  a comes separately
    
    rubrique.onclick = function (e){
        e.preventDefault();

        if(this.parentNode.classList.contains("active"))
        {
            this.parentNode.classList.remove("active");

            this.nextElementSibling.style.height = "0px";
        }
        else
        {
            this.parentNode.classList.add("active");

            let ulHeight = this.nextElementSibling.scrollHeight;
            console.log(ulHeight);

            this.nextElementSibling.style.height = ulHeight + "px";
        };
    }


    })
}














window.onload =function(){
    checkbox();
    menuMobile();
    menuAnim();
}