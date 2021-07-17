console.log('Algo');
console.info;//VER  INFO
console.error('Algo');//VER ERROR EN FORMA MAS VISUAL
console.warn('Algo');//PARA VER EN FORMA DE WARNING
//muestra datos en forma de tabla
var tabla =[
    {
        a:1,
        b:'D'
    },
    {
        a:5,
        b:'P'
    }
]
console.log(tabla);
console.table(tabla);
//CONSOLE GROUP  : AGRUPAR MUCHAS COSAS
console.group('Conversacion');
console.log('Hola');
console.group('bla')
console.log('Bla bla bla');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversacion');

//CONSOLE GROUP EN FUNCIONES

function function1() {
    console.group('funcion 1')
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    console.log('Esto tambien');
    function2();
    console.log('He vuelto a la 1');
    console.groupEnd('funcion 1')
}

function function2() {
    console.group('funcion 2');
    console.log('Esto es de la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');