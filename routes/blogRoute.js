const express = require ('express')
const router = express.Router()
const Blog = require('../models/Blog')


router.get('/', async(req, res, next)=> { 
    try{ 
        let blogs = await Blog.find()
        res.status(200).json(blogs)
    }catch (err){ 
       next(err)
    }
} )

router.post('/', async(req, res, next)=> { 
    try{ 
        let text = req.body.text
        let title = req.body.title
        await Blog.create({text: text, title: title})
        res.status(200).json({msg: 'blog was created successfully 👍'})
    }catch (err){ 
       next(err)

    }
})

router.get('/:id', async(req, res, next)=> { 
    try{ 
        let blog = await Blog.findById(req.params.id)
        if(blog) {
            res.status(200).json(blog)
        }else{ 
            res.status(404).json({msg: "blog is not found 😞"})

        }

    }catch (err){ 
       next(err)
    }
} )

router.put('/:id', (req, res, next)=> { 
    try{    
        let text = req.body.text
        let title = req.body.title

        Blog.findByIdAndUpdate(req.parmas.id,  {text:text, title:title})
    }catch (err){   
       next(err)
    }
} )

router.delete('/:id', async(req, res, next)=> { 
    try{ 
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: 'blog was successfully deleted 👍'})
    }catch (err){ 
       next(err)
    }
} )



module.exports = router; 
