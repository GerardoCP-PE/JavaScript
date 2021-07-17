const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey! ");
    } else {
      reject("Whoooops!");
    }
  });
};

somethingWillHappen()
  .then((Response) => console.log(Response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whooop");
      return error;
    }
  });
};

somethingWillHappen2()
.then(Response => console.log(Response))
.catch(err => console.log(err));

//EJECUTAR VARIAS PROMESAS AL MISMO TIEMPO
Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(Response => {
  console.log('Array de promesas',Response);
})
.catch(err => console.log(err));