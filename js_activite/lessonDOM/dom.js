/////////////////////// getElementById() ////////////////////////
//document.getElementById("demo").innerHTML = "Hello world";

const firstP = document.getElementById("intro");
document.getElementById("demo").innerHTML = "this word was taken from DOM " + firstP.innerHTML ;

/////////////////////// getElementsByTagName() //////////////

const secondP = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML = "this word was taken from DOM " +  secondP[0].innerHTML; // index value comes
document.getElementById("demo3").innerHTML = "this word was taken from DOM " +  secondP[1].innerHTML;
////
document.getElementById("last").innerHTML = "these are taken DOM" + "<br>" +
firstP.innerHTML + " / " + secondP[1].innerHTML + " / " + secondP[2].innerHTML + " / "+ secondP[3].innerHTML ;


/////////////////////// getElementsByClassName() //////////////


