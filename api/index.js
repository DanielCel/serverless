const express = require("express");
const mongoose = require('mongoose')
const app = express();

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
const Users = mongoose.model('User', new mongoose.Schema({name:String}))
Users.create({name:"chanchito nuevo"})

app.get('*',(req,res) => {
  Users.find().then(x=>res.send(x))
  console.log('nuevo usuario creado')
})
/* Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});*/

module.exports =app