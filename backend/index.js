const express = require('express');
const App = new express();

App.get('/',(req,res)=>{
    res.send('App is listening');
})

App.listen(5000,console.log("server is running"));