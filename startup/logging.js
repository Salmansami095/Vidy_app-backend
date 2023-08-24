const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const mongoose = require('mongoose');
const config =require('config');

module.exports = function(){
  console.log("Shaiq")
  winston.handleExceptions(
    //new winston.transports.console({colorize: true , prettyPrint : true}),
    new winston.transports.File({ filename : 'uncaughtExceptions.log'}));
  
  process.on('uncaughtRejection', (ex) =>{
   throw ex;
  });
  const p = promise.reject(new Error('something failed miserably !'));
  p.then(()=> console.log('Done'))
  
  
  winston.add(winston.transports.File, {filename : 'logfile.log'})
  //winston.add(winston.transports.MongoDB, {db: config.get('db')})
  
  console.log("Shaiq")
}