//const list = [];

const Model = require("./model");
//mongodb+srv://db_user_demo:I1jetZVwryfALGJT@cluster0.w7qgp.mongodb.net/nodejsdemo_db?retryWrites=true&w=majority

function addMessage(message) {
  //list.push(message);
  const MyMessage = new Model(message);
  MyMessage.save();
}

async function getMessages(filterUser) {
  //return list;
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: new RegExp(filterUser, "i") };
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      })

  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

async function existDB(id) {
  const exist = await Model.exists({
    _id: id,
  });
  return exist;
}

async function removeMessage(id) {
  const siExiste = await existDB(id);
  if (!siExiste) {
    return siExiste;
  }
  return await Model.deleteOne({
    _id: id,
  });
}
module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};
