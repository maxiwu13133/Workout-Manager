require('dotenv').config()

const express = require('express')

// express app
const app = express()

// routes
app.get('/', (req, res) => {
  res.json({msg: 'Welcome to the app'})
})

app.get('/home', (req, res) => {
  res.json({msg: 'work in progress'})
})

// listen for requests through port number
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000')
})