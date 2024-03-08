const express = require('express')
const dbConnection = require('./confiq/dbConnection')
const router = require('./route')
const app = express()

const port = 3000
app.use(express.json())
app.use(router)
dbConnection ()

// MULTER IMAGE STATIC AND PUBLIC Method
// ======================================
const path = require('path')
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})