const express = require('express')

// express app
const app = express()

// listen for requests through port number
app.listen(4000, () => {
  console.log('listening on port 4000')
})