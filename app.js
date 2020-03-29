const express = require('express')
const getMessage = require('./routes/routes')

const app = express()

app.use('/home', (req, res) => {
  res.send('Hello world')
})
app.use('/', getMessage)

const port = 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
