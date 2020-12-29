const mongoose = require('mongoose')
/*
mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })
    */

    
//conexao nuvem
const uri = 'mongodb+srv://user_mevn:2qaXQ2kP6FThy9AC@cluster0-yvmma.mongodb.net/boiler2?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a MongoDB..') },
  /** handle initial connection error */
  err => { console.log(err) }
);
