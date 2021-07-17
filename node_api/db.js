const db = require("mongoose");
db.Promise = global.Promise;
//"mongodb+srv://db_user_demo:I1jetZVwryfALGJT@cluster0.w7qgp.mongodb.net/nodejsdemo_db?retryWrites=true&w=majority"
async function connect(url) {
  await db.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("[db] Conectada con exito");
}

module.exports = connect;