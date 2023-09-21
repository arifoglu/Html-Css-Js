window.onload = function(){

   document.getElementById("myBtn").onclick= function(){

        let a;
        let b;
        let c;
        a =Number(document.getElementById("numero1").value);
        // console.log(a);
        b =Number(document.getElementById("numero2").value);
        // console.log(b);
        c =Number(document.getElementById("numero3").value);
        // console.log(c);
        console.log(typeof a); // string

       /// this function can write if you want but "" Number""" method more than efficace
       // function myfunction(){
       //            a =Number(a) ;
       //            b =Number(b) ;
       //            c =Number(c) ;
       //     return
       // };
       // myfunction();
       // console.log(typeof a); // number
        
           //comparison options//
    if(a > b && a > c && b > c)
    document.getElementById("result").innerHTML = a + ">" + b + ">" + c ;
    else if(a > b && a > c && c > b)
    document.getElementById("result").innerHTML = a + ">" + c + ">" + b ;
    else if(b > c && b > a && c > a)
    document.getElementById("result").innerHTML = b + ">" + c + ">" + a ;
    else if(b > a && b > c && a > c)
    document.getElementById("result").innerHTML = b + ">" + a + ">" + c ;
    else if(c > a && c > b && a > b)
    document.getElementById("result").innerHTML = c + ">" + a + ">" + b ;
    else if(c > a && c > b && b > a)
    document.getElementById("result").innerHTML = c + ">" + b + ">" + a ;
    else if(a == b && a < c )
    document.getElementById("result").innerHTML = a + "=" + b + "<" + c ;
    else if(a == b && a > c )
    document.getElementById("result").innerHTML = a + "=" + b + ">" + c ;
    else if(b == c && a > c )
    document.getElementById("result").innerHTML = a + ">" + b + "=" + c ;
    else if(b == c && a < c )
    document.getElementById("result").innerHTML = a + "<" + b + "=" + c ;
    else if(a == c && a > b )
    document.getElementById("result").innerHTML = a + "=" + c + ">" + b ;
    else if(a == c && a < b )
    document.getElementById("result").innerHTML = a + "=" + c + "<" + b ;
    else
    document.getElementById("result").innerHTML = "EGAL"
    };
   /// 
    
   ////     option for clear input fields
   
   ////     option 1

   //  function clearFields(){
   //      document.getElementById("numero1").value = "";
   //      document.getElementById("numero2").value = "";
   //      document.getElementById("numero3").value = "";
   //  };
   //  clearFields();

   ////      option 2

   // let x = document.querySelectorAll("div#container > input");
   // console.log(x);
   // x.forEach(function(p){
   //  p.value = "";
   // });
   //  option 2.1
   document.querySelectorAll("div#container > input").forEach((p)=>{ p.value = ""});
   ;

 }


