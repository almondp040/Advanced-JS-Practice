//WebSockets API
//const path = require('path'); 

import path from 'path';
//Set up our backend for tomorrow: 
import express from 'express'
const app = express(); 
const port = 3000; 

app.use(express.static('static/')); 

app.get('/', (req, res) => {

 const options = {
  root: path.resolve()
 }; 
  res.sendFile('chat.html', options)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//Room Name Route: 
// app.get('/:roomName', (req, res, next) => {

//     res.sendFile(path.join(__dirname, 'chat.html')); 
//   //res.sendFile(path.join(path.dirname(), 'public', 'chat.html') ); 

// })


