const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, (error) => {
    if(error) {
        console.log(`Oops ${error}`)
    }
    console.log(`Server running on port ${PORT}`)
})