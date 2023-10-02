//
let btn1 = document.querySelector("#myButton");
console.log(btn1);

let myImage = document.querySelector("#searchImage");
console.log(myImage.height);

let mainDiv = document.querySelector("div");
console.log(mainDiv);

btn1.onclick = ()=>{
    // height
    console.log(myImage.height);
   //  src change
    myImage.src = "images/tick2.png"
   
   // border change
   mainDiv.style.border = "5px solid";
   
   //  padding
   mainDiv.style.padding = "15px";

   // 
};
////
let myTable = document.querySelector("#myTable");
console.log(myTable);

let btn2 = document.querySelector("#myButton2");
console.log(btn2);



btn2.onclick = ()=>{
    // border change
    myTable.style.border = "5px solid";

    // padding change
    myTable.style.padding = "15px";

    // find cells in the table
    let chercheCellule =myTable.rows[0].cells;
    document.getElementById("demo2").innerHTML = chercheCellule[0].innerHTML;// cell1
    document.getElementById("demo2").innerHTML = chercheCellule[1].innerHTML;// cell3


};
///// delete rows

let btn3 = document.querySelector("#myButton3");
console.log(btn3);

btn3.onclick = ()=>{
    document.getElementById("myTable").deleteRow(0);
};

///// add rows

let btn4 = document.querySelector("#myButton4");
console.log(btn4);

btn4.onclick = ()=>{
      let x = document.getElementById("myTable").insertRow(0);
      console.log(x);
      let y = x.insertCell(0);
      let z = x.insertCell(1);
      y.innerHTML = z.innerHTML = "new cells"
}
