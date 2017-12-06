 const express = require('express');
 const app = express();
 var port = 8080;
 const mongoose = require('mongoose');
 const path = require('path');
 const config = require('./config/database');


mongoose.connect(config.uri, (err) => {
  if(err){
      console.log('Could not connect to database : ' , err);
    }else{
      //console.log(config.secret);
    console.log('Connected to database : '+ config.db);
  }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'))

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
});

app.listen(port, () => {
  console.log('Listinig on port '+ port);
});
