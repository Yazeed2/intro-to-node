const express = require('express')
const app = express()
const mongoose = require('mongoose')



// Returns middleware that parses both json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use((request, result, next)=> { 
//     console.log('middleware 1')
//     next()
// })

// //a middleware with a chance of getting an error
// app.use((req, res, next)=> { 
//     let number = Math.floor(Math.random()* 2)
//     if(number == 1){ 
//         res.status(200).json({msg: 'you are lucky I like you '})
//     }else{ 
//         next('I do not like zeros')
//     }
// })
 
// routes 
app.use('/', require('./routes/routeIndex'));


// error handler 
app.use((err, req, res, done)=> {

    res.status(500).json({msg: 'an error has accoured', error:err })
})

app.listen(3000, ()=>console.log(`server is running on port 3000 🔥`));