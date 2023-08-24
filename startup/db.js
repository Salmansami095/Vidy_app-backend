const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

async function connection(){
  const mongoURI= "mongodb+srv://salmansami:abcd1234@cluster0.utwu3yv.mongodb.net/vildy_tests";
  await mongoose.connect(mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
  console.info(`Connected to database`);
  // const db = mongoose.connection;
    
  //   db.once('open', () => {
  //     console.log('Connected to MongoDB');
  //   });


}
module.exports.connection = connection;
//'mongodb+srv://salmansami:abcd1234@cluster0.utwu3yv.mongodb.net/';
