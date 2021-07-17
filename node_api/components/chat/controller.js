const store = require("./store");

function addChat(users) {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      console.error("[messageController] Faltan datos");
      reject("Los datos son incorrectos");
    }
    const chat = {
      users: users,
    };
    store.add(chat);
    resolve(chat);
  });
}

function getChats(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

module.exports = {
  addChat,
  getChats,
};
