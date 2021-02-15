const express = require ('express')
const router = express.Router()
const blog = require('./blogRoute')

// add your routes here  👇👇

router.use('/blog', blog) 

module.exports = router; 
