const express = require('express');

const fs = require('fs');


const router = express.Router();

const Auth = require('../middlewares/AuthMiddleware');

const BlogController = require('../controllers/BlogController');

router.get('/',BlogController.getAllBlogs);
router.get('/:Id', BlogController.getBlog);
router.patch('/:Id',Auth, BlogController.editBlog);
router.delete('/:Id',Auth, BlogController.deleteBlog);
router.post('/', Auth,BlogController.addBlog);
router.post('/saveImage',(req,res,next)=>{
    var buf = new Buffer(req.body.base64, 'base64');
    var d = new Date();
    var name = d.getTime().toString();
    fs.writeFile('images/'+name+'.png', buf,(err)=>{
       if(err){
           res.status(200).json({
               message:"Some thing went wrong in saving file",
               status:500,
               data:null,
               error:err
           });
       }
       res.status(200).json({
            message:"file got saved successfully",
            statusCode:200,
            data:null,
            error:null
        });
        
       
    });

   
   
   
});

module.exports = router;
