const store = require("./store");
const socket = require('../../socket').socket;
function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !message || !user) {
      console.error("[messageController] No hay usuario  o mensaje");
      reject("Los datos son incorrectos");
    }


    let fileUrl = '';
    if (file) {
        fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id inválido");
    }
    store
      .remove(id)
      .then((resultado) => {
        if (resultado) {
          resolve();
        } else {
          reject("No existe en base de datos");
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
