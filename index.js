const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.connect("mongodb://localhost/muggers-db", { useNewUrlParser: true }); //приконектили,создали и назвали БД

app.use(bodyParser.json());
app.use("/api", require("./api")); //импортировали API с api.js

app.listen(4000, () => {
  console.log("server Express is listening !");
});
