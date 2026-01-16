 require('dotenv').config()
 const mongoose = require('mongoose')



 
  async function connectToDatabase(){
    mongoose.connect(process.env.MONGODB_URL)
    console.log('Success')
 }
 module.exports = connectToDatabase;
