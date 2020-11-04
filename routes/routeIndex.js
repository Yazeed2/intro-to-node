const express = require ('express')
const router = express.Router()
const blog = require('./blogRoute')
const user = require('./userRoute')

// add your routes here  👇👇

router.use('/blog', blog) 
router.use('/user', user)

module.exports = router; 
