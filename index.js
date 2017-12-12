 const express = require('express');
 const app = express();
 var port = 8080;
const router = express.Router();


 const mongoose = require('mongoose');
 const path = require('path');
 const config = require('./config/database');
 const authentication = require('./routes/authentication')(router); // Import Authentication Routes
 const bodyParser = require('body-parser');
 const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err){
      console.log('Could not connect to database : ' , err);
    }else{
      //console.log(config.secret);
    console.log('Connected to database : '+ config.db);
  }
});

// Middlwear
 app.use(cors({
   origin : 'http://localhost:4200',

 }))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Routing
app.use(express.static(__dirname + '/client/dist/'))

app.use('/authentication' ,authentication);

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
});

app.listen(port, () => {
  console.log('Listinig on port '+ port);
});
