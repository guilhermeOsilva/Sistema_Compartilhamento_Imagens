const express = require("express");
const app = express();
let mongoose = require("mongoose");
let user = require("./models/User");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1/picsgui", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 
}).catch(err => {

})

let User = mongoose.model("User", user);
app.get("/", (req, res) => {
  res.json({ message: "success" });
  console.log("ok");
});

app.post("/user", async (req, res) => {
  try{

    let newUser = new User( { name: req.body.name, email: req.body.email, password: req.body.password });
    await newUser.save();
    res.json({ email: req.body.email })

  } catch(err) {
    res.sendStatus(500);
  }
 
})
module.exports = app;