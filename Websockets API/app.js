//WebSockets API

//Set up our backend for tomorrow: 
import express from 'express'
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => res.send('YAY WE HAVE A SERVER!!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



