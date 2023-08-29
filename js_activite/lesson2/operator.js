let a = 10 ;

a += 5;
console.log(a);
a -= 4;
console.log(a);    
a *= 5;
console.log(a);
a /= 11;
console.log(a);
a **= 3;
console.log(a);
a %= 100;
console.log(a);
//at the beginning a equal >25< after 30 after 26 
let firstOne = a+=5;
let secondOne= a-=4;
console.log(firstOne*secondOne)
let total = firstOne * secondOne ;
document.getElementById("myOperator").innerHTML = total;