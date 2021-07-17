const HelloWorld = () =>{
    const hello = 'Hello World';
    console.log(hello);
};

HelloWorld();


//AMBITO LEXICO
//LA SCOPE GLOBAL MANTIENE SU VALOR
//UNA LOCAL LA PUEDE HEREDERAR PERO NO REEMPLAZA
var scope = "I am global";

const functionScope = () =>{
    var scope = "I am just a local";
    const func = () =>{
        return scope
    }
    console.log(func());
};

functionScope();
console.log(scope);