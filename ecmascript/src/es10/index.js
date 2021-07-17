//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2]));
let hello = '     Hello World';
console.log(hello.trimStart());


///PODEMOS PONER EL ERROR DE FRENTE SIN PONERLO EN EL CATCH
try{

}catch(error)
{
    error
}

//from enties
///transformar arreglos a objetos
let entries = [["name","oscar"],["age",40]];
console.log(Object.fromEntries(entries));

///DESCRIPCION DE UN OBJETO SYMBOLO
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);