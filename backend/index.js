const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const App = new express();
dotenv.config();
App.use(express.json());
App.use(cors());
App.use('/user',require('./Routes/Auth'));
App.use('/Chat',require('./Routes/chatsRoute'));
  
const connectDB = async()=>{
try{
    const connect =  await mongoose.connect(process.env.Mongo_URI);
    console.log("Connection to DB is sucessful ........");
}
catch(err){
    console.log("Failed Connecting to DB .......", err.message);
}
}
connectDB();


App.listen(5000,console.log("Server is running........"));