const mongoose = require("mongoose");
const port = 27017;

const db = {
  username: "rooman",
  password: "rooman",
  database: "checkarham",
};

const url = `mongodb+srv://${db.username}:${db.password}@cluster0.qkuqm.mongodb.net/${db.database}?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log(`DataBase Connected port No ${port}`);
  })
  .catch(() => {
    console.log(`Fail DataBase Connection on port No ${port}`);
  });
