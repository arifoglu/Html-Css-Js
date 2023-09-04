function myFunction(p1){   
    if (p1>=18) {
        console.log("this person can buy somethings")
    } else {
        console.log("this person CAN NOT buy somethings")
    }
    return
};
myFunction(19);


let x = 35;
console.log(x);

function myFunction1(a,b){
    return a * b
};
let d = myFunction1;
console.log(d(3,7));

let myFunction2 = (a,b)=> a * b ;
console.log(myFunction2(3,7));