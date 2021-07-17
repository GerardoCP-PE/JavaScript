var hello = 'Hello';
var hello = 'HOLA 2';
//let world = 'Common';
let world = 'Hello world';
const hellowworld = 'Hello World';
//console.log(hello);

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(hellowworld);
}

anotherFunction();

const helloWorld = () =>{
    globalVar = 'Im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () =>{
    var localVar = globalVar = 'im Global';
}

anotherFunction();
console.log(globalVar);