const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World, from the Test Server')
})

app.listen(port, () => {
  console.log(`Test server app listening on port ${port}`)
})
