const express = require("express");
const app = express();
let mongoose = require("mongoose");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1/picsgui", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 
}).catch(err => {

})


app.get("/", (req, res) => {
  res.json({ message: "success" });
  console.log("ok");
});

module.exports = app;