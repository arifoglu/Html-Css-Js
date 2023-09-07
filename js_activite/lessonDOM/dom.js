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
const thirdP = document.getElementsByClassName("program");
document.getElementById("myTitle").innerHTML = thirdP[0].innerHTML + " " +thirdP[1].innerHTML ;

/////////////////////////// FORMS ////////////////////////////////////
const x = document.forms["frm1"];
let text = "" ;
for(let i = 0 ; i < x.length ; i++){
    text += x.elements[i].value + " <br>"
};
document.getElementById("formResult").innerHTML = text ;

////
document.getElementById("myDate").innerHTML = "Date is " + Date();

/////////// FORM VALIDATION
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("YOU HAVE TO WRITE!");
        return false;
    }
}
////////// FORM VALIDATION
function myFunction(){
    let x = document.getElementById("numb").value;
    if(isNaN(x) || x < 1 || x > 10){
        text = "invalid";
    }else {
        text = "OK";
    };
    document.getElementById("result").innerHTML = text ;
};

////////////////////////////////////CHANGING CSS /////////////////////////
document.getElementById("myLine").innerHTML = "this line was added by me";
let myCss = document.getElementById("myLine").style ;
myCss.fontSize = "23px";
myCss.color = "black";

function myFunctionRed(){
    myCss.color = "red";
    document.getElementById("red").style.backgroundColor = "red";
};

function myFunctionBlue(){
    myCss.color = "blue";
    document.getElementById("blue").style.backgroundColor = "blue";
};