const Model = require("./model");

function addChat(users) {
  //list.push(message);
  const MyChat = new Model(users);
  MyChat.save();
}

async function getChats(userId) {
  //return list;
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId !== null) {
      filter = { users: new RegExp(userId, "i") };
    }
    Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      })

  });
}


module.exports = {
  add: addChat,
  list: getChats,
};
