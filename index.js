const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost/FirstBlog', // this should be in a secure file like a .env file
    {useNewUrlParser : true , useUnifiedTopology: true ,'useCreateIndex': true}  // parameters to aviod any warrnings 
    
    )
    .then(()=> console.log('Mongodb is running 🔥'), (err)=> console.log(err) )

// Returns middleware that parses both json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));



// routes 
app.use('/', require('./routes/indexRoute'));



app.listen(5000, ()=>console.log(`server is running on port 5000 🔥`));