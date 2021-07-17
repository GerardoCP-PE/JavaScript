//OPERADOR DE REPOSO 
//EXTRAE LAS PROPIEDADES DE UN OBJETO QUE AUN NO SE HA CONSTRUIDO
const obj = {
    name : 'Gerardo',
    age: 30,
    country : 'PE'
};

let { country, ...all} = obj;
console.log(all);


//PROPIEDADES DE PROPAGACION 
//SE PUEDE UNIR UNO O MAS OBJETOS

const obj = {
    name: 'Gerardo',
    age: 30
}

const obj1 = {
    ...obj,
    country: 'PE'
}

console.log(obj1);


const HelloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ?setTimeout(() => resolve('Hello World'),3000)
        :reject(new Error('Test Error'))
    });
};

HelloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

///MEJORA EN REGEX DATA
const regrexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regrexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);