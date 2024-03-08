const mongoose = require('mongoose');
function dbConnection (){
    mongoose.connect('mongodb+srv://zahirulitbd:mongodb878862@cluster0.bkgm3tr.mongodb.net/ecommerce?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
}

module.exports = dbConnection;