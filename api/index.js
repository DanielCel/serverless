const express = require("express");
const app = express();

const port = 3000;

app.get('*',(req,res) => {
  console.log('hola mundo')
  res.send({mensaje:"andres triste y feliz"})
})
/* Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});*/

module.exports =app