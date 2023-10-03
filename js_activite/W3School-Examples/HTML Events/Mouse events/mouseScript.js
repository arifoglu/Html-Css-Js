//
//// onmouseover and onmouseout
let text = document.querySelector("#demo");
console.log(text);

text.onmouseover = ()=>{
    text.style.color = "red"
};
text.onmouseout = ()=>{
    text.style.color = "black"
};

//// onmousedown and onmouseup

let text2 =document.querySelector("#demo2");
console.log(text2);

text2.onmousedown = ()=>{
    text2.style.color = "red"
};
text2.onmouseup = ()=>{
    text2.style.color = "green"
};