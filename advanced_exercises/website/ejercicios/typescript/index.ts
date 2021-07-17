console.log("Hello, TypeScript");
// function add(a: number, b: number) {
//   return a + b;
// }
// const sum = add(2, 3);

//boolean
let muted: boolean = true;
muted = false;
//muted = "callado";

//Numeros
let age = "6";
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String
let nombre: string = "Gerardo";
let saluda = `Me llamo ${nombre}`;

//arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
//people.push(9000)

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Gerardo");
peopleAndNumbers.push(492);

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//any
let comodin: any = "Joker";
comodin = { type: "WildCar" };

//Object
let someObject = { type: "WIldCard" };

///funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 20);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//CON EL SIMBOLO ? SE PUEDE PONER UN PARAMETRO OPCIONAL
function fullName(firstname: string, lastname: string = 'Caso'): string {
    return `${firstname} ${lastname}`;
}

const gerardo = fullName('Gerardo');
console.log(gerardo);
