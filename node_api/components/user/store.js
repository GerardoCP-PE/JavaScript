//const list = [];

const Model = require("./model");
//mongodb+srv://db_user_demo:I1jetZVwryfALGJT@cluster0.w7qgp.mongodb.net/nodejsdemo_db?retryWrites=true&w=majority

function addUser(user) {
  //list.push(message);
  const MyUser = new Model(user);
  return MyUser.save();
}

async function getUser(filterUser) {
    //return list;
    let filter = {};
    if (filterUser !== null) {
      filter = { name: new RegExp(filterUser, "i") };
    }
    const users = await Model.find(filter);
    //console.log(filterUser);
    return users;
  }

module.exports = {
  add: addUser,
  list: getUser,
};
