//// we can also defined after a array
const array1 = [];
array1[0] = "apple";
array1[1] = "banana";
array1[2] = "kiwi";
console.log(array1);


/// we can create with <<<<new>>>>> new array 
const array2 = new Array("apple-fresh","banana-fresh","kiwi-fresh");
console.log(array2);

/////par exemple we added these vairables to new array3
let firstOne = "melon";
let secondOne = "lemon";
let lastOne = "grape";
const array3 = new Array(firstOne,secondOne,lastOne);
console.log(array3);
console.log(array3[2]); // grape
/// we can change or add new fruits
array3[2] = "grape-fresh";
console.log(array3[2]); // grape-fresh

////// toString() from Array to String /////////////////////

let fruitsSuisse = ["abricot","raisin","prune"];
let fruitsSuisseNames = fruitsSuisse.toString();
console.log(fruitsSuisseNames);

///////// length   
console.log(fruitsSuisse.length);
console.log(fruitsSuisse[1]);
console.log(fruitsSuisse[fruitsSuisse.length -1]); // last element  >length-1<

////// for loop  examples
let fruitTotal = fruitsSuisse.length;
let list1 ="<ol>";
for (let i = 0 ; i < fruitTotal ;i++){
    list1 += "<li>" + fruitsSuisse[i] + "</li>";
} list1 += "</ol>";

document.getElementById("fruitSuisse").innerHTML = list1 ;


////////////////////////////////////////////////////////
let fruitsEspagne =["avocat","peach","strawberry"];
let flen = fruitsEspagne.length;
let text = "<ul>";
for (let i = 0; i < flen ; i++){
    text += "<li>" + fruitsEspagne[i] + "</li>";
}  
text += "</ul>";

document.getElementById("fruitEspagne").innerHTML = text ;
///////////////////////////////////////////////////////////

let legumeSuisse = ["tomates","patato","onion"];
let legumeFlen = legumeSuisse.length;

let list2 ="<ul>";
for (i = 0 ; i < legumeFlen ; i++){
    list2 += "<li>" + legumeSuisse[i] + "</li>";
} list2 += "</ul>";
document.getElementById("legumeSuisse").innerHTML = list2 ;

////////////////////////////////////////////////////////////

let fruitItaly = ["mango","ananas","peach"];
function myFunction(p1){
    myList += "<li>" + p1 + "</li>";
};
let myList ="<ul>";
fruitItaly.forEach(myFunction);
myList += "</ul>";
document.getElementById("fruitItaly").innerHTML = myList;

/////////////////////////////////////////////////////////////
////// Array.isArray() we can verifiy with this method//////
console.log(typeof fruitItaly);
console.log(Array.isArray(fruitItaly));
const Names ={
    firstName : "sali",
    lastName : "dali",
};
console.log(typeof Names);
console.log(Array.isArray(Names));

//////////////////////////////////////////////////////////////
 
////// join() from Array to string with separator " "
document.getElementById("demo").innerHTML = fruitItaly.join("-----");

////// push() added
fruitItaly.push("ORANGE"); /// orange added  
console.log(fruitItaly);
//['mango', 'ananas', 'peach', 'ORANGE']

////// pop()  removed last element of Array
fruitItaly.pop();   /// orange removed
console.log(fruitItaly);
//['mango', 'ananas', 'peach']

///// shift() removed first element of Array
fruitItaly.shift(); // mango removed
console.log(fruitItaly);
//['ananas', 'peach']

///// unshift() added first element 
fruitItaly.unshift("mango");
console.log(fruitItaly);  // mango added
//['mango', 'ananas', 'peach']

///// concat() merge two or more Array
let fruitEurope = fruitItaly.concat(fruitsEspagne,fruitsSuisse);
console.log(fruitEurope);  // 3 array has merged
//['mango', 'ananas', 'peach', 'avocat', 'peach', 'strawberry', 'abricot', 'raisin', 'prune']


//// splice() added new items into Array
fruitEurope.splice(3,0,"THIS PART");  /// 3 is position 0 is for removed
console.log(fruitEurope); 
//['mango', 'ananas', 'peach', 'THIS PART', 'avocat', 'peach', 'strawberry', 'abricot', 'raisin]

///// slice()
let mySlice = fruitEurope.slice(3,);
console.log(mySlice);


















