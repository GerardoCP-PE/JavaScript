//CON OBJECT.ENTRIES PODEMOS RECIBIR TODOS LOS VALORES DE UN OBJETO
//LA COMA AL FINAL PUEDE IR AL FINAL NORMAL
const data = { frontend: "Gerardo", backend: "Potter", design: "Hagrid" };

const elementos = Object.entries(data);
console.log(elementos);
console.log(elementos.length);

const values = Object.values(data);
console.log(values);

////AGREGAR ADELANTE DE UNA CADENA
const string = "hello";
console.log(string.padStart(7, "h1"));
//AGREGAR AL FINAL
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
