const express = require('express')
const getMessage = require('./routes/routes')

const app = express()

//Say hell at indes
app.use('/', (req, res) => {
  res.send('Hello world')
})

//profile route
app.use('/', getMessage)

const port = 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
