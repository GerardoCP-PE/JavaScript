function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "Gerardo", edad = 29, country = "PE") {
  console.log(name, edad, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");

//TEMPLATE LITERALS
let hello = "Hello";
let world = "World";
let epicPhare = hello + " " + world;
console.log(epicPhare);
//CON ES6
let epicPhare2 = `${hello} ${world}`;
console.log(epicPhare2);

let lorem = "Esta es mi opcion \n" + "jajajaja";

//ES6
let lorem2 = `otra fase epica q necesitamos
ahora es otra la situasao`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Gerardo",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

let { name } = person;
console.log(name);

//OPERADOR DE PROPAGRACION
//ES6
let team1 = ["Gerardo", "Fernando", "Fabricio"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];
console.log(education);

//variables
{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//propiedad de  OBJETOS mejorada
let name = "oscar";
let age = 32;

obj = { name: name, age: age };

//ES6
obj2 = { name, age };
console.log(obj2);

//ARROW FUNCTION
const names = [
  { name: "Gerardo", age: 31 },
  { name: "Julio", age: 28 },
  { name: "Lourdes", age: 29 },
];

let lisOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //.....
};

const listOfNames4 = (name) => {
  //....
};

const square = (num) => num * num;

//JAVA ESCRIPT ES ASYNCRONICO
//PORQUE NO EJECUTA MAS DE 2 EVENTOS AL MISMO TIEMPO

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("hola"))
  .catch((error) => console.log(error));

//CLASES
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

///MODULOS IIMPORT EXPORT
const calc = new Calculator();
console.log(calc.sum(4, 5));

import { hello } from "./module";

hello();

//GENERATOR
function* helloWorld() {
  if (true) {
      yield 'Hello, ';
  }
  if(true){
      yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);