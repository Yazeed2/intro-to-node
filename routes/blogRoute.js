const express = require ('express')
const router = express.Router()
const Blog = require('../models/Blog')


router.get('/', async(req, res)=> { 
    try{ 
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    }catch (err){ 
       console.log(err)
       res.status(500).json({msg:"server error ☹️"})
    }
} )

router.post('/', async(req, res)=> { 
    try{ 
        const text = req.body.text
        const title = req.body.title
        await Blog.create({text: text, title: title})
        res.status(200).json({msg: 'blog was created successfully 👍'})
    }catch (err){ 
       console.log(err)
       res.status(500).json({msg:'server error'})

    }
})

router.get('/:id', async(req, res)=> { 
    try{ 
        const blog = await Blog.findById(req.params.id)
        if(blog) {
            res.status(200).json(blog)
        }else{ 
            res.status(404).json({msg: "blog is not found 😞"})

        }

    }catch (err){ 
       console.log(err)
       res.status(500).json({msg:"server error ☹️"})
    }
} )

router.put('/:id', (req, res)=> { 
    try{    
        const text = req.body.text
        const title = req.body.title

        Blog.findByIdAndUpdate(req.parmas.id,  {text:text, title:title})
    }catch (err){   
       console.log(err)
       res.status(500).json({msg:"server error ☹️"})
    }
} )

router.delete('/:id', async(req, res)=> { 
    try{ 
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: 'blog was successfully deleted 👍'})
    }catch (err){ 
       console.log(err)
       res.status(500).json({msg:"server error ☹️"})
    }
} )



module.exports = router; 
