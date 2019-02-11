const express = require("express");
const mongoos = require("mongoose");

const app = express();
mongoos.connect("mongodb://localhost/muggers-db"); //приконектили,создали и назвали БД

app.use("/api", require("./api")); //импортировали API с api.js

app.listen(4000, () => {
  console.log("server Express is listening !");
});
