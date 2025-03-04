// Express Server Creation: 
const express = require('express')
const app = express(); 
const port = 3000
app.listen(port ,()=>{

    console.log( `App has been started on port:${port}`)
}); 

app.get('/', (req, res) => {
  res.send('Advanced JS Course Server!')
}); 

console.log("Ok we are now ready to go!")