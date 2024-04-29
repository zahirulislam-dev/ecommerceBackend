const express = require('express')
var cors = require('cors')
const dbConnection = require('./confiq/dbConnection')
const router = require('./route')
const path = require('path')


const app = express()
const port = 3000

app.use(cors());

app.use(express.json())
app.use(router)
dbConnection ()

// MULTER IMAGE STATIC AND PUBLIC Method
// ======================================
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// const express = require('express');
// const cors = require('cors');
// const dbConnection = require('./confiq/dbConnection');
// const router = require('./route');
// const path = require('path');

// const app = express();

// const port = 3000;

// // Enable CORS
// app.use(cors());

// // JSON parsing middleware
// app.use(express.json());

// // Route middleware
// app.use(router);

// // Database connection
// dbConnection()
//   .then(() => {
//     console.log('Database connected successfully');
//   })
//   .catch((err) => {
//     console.error('Database connection error:', err);
//   });

// // MULTER IMAGE STATIC AND PUBLIC Method
// app.use('/upload', express.static(path.join(__dirname, 'upload')));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });