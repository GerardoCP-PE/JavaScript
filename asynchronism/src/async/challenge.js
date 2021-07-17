const fetchData = require("../utils/fetchData");
///SI NUNCA SE VA A MOVER DEBE IR EN MAYUSCULA
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async () => {
  try {
    const data = await fetchData(API);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log('Before');
anotherFunction(API);
console.log('After');