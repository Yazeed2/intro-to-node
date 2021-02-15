const express = require('express')
const app = express()
const mongoose = require('mongoose')



// Returns middleware that parses both json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.get('/', (req,res)=> { 
//     res.send('Hello world!')
// } )
// app.use('/', require('./routes/indexRoute'));



app.listen(3000, ()=>console.log(`server is running on port 3000 🔥`));