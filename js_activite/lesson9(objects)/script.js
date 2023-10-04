///////////////////
const person = {
    firstName:"John",
    lastName:"Doe",
    age:32,
};
console.log(person);//Object { firstName: "John", lastName: "Doe", age: 32 }
console.log(person.firstName); // John
console.log(typeof person.firstName); // string

/////////////////// we can create empty object and add informations into object
const child = {};
child.firstName ="mike";
child.lastName ="bings";
child.age =12;
console.log(child);// Object { firstName: "mike", lastName: "bings", age: 12 }

///////////////////
myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  };

  console.log(myObj.name)// John
  console.log(myObj.cars)// Object { car1: "Ford", car2: "BMW", car3: "Fiat" }
  console.log(myObj.cars.car3)//  Fiat 

  /////////////////
  const myObj2 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  };
  console.log(myObj2.cars);// Array(3) [ {…}, {…}, {…} ]
  console.log(myObj2.cars[0]);// Object { name: "Ford", models: (3) […] }
  console.log(myObj2.cars[2].models[1]);// Panda
  console.log(myObj2.cars[0].models[2]);// Mustang
  console.log(myObj2.cars[1].models[2]);// X5

//////////////// forEach()

const letters = ["a","b","c"];
let text = "";

letters.forEach(function(value){
    text += value;
    console.log(text) 
    // if you write console.log here each time one element comes this results like this
    // a
    // ab
    // abc

});
console.log(text);
//// 

