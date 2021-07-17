function hola(nombre, micallback){
    //console.log('Hola, soy una función asincrona');
    setTimeout(function(){
        console.log('Hola, '+ nombre);
        micallback();
    },1000)
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log('Adios',nombre);
        otrocallback();
    },1000)
}


console.log('Iniciando proceso...');
hola('Gerardo',function(){
   adios('Gerardo', function(){
    console.log('Terminando proceso...');
   })
   
});
