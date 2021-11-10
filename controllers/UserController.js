const User = require('../models/UserModel');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


module.exports.login = (req, res, next)=>{
    
    User.find({"email":req.body.email}).exec()
        .then(users =>{
            if(users.length<1){
                res.status(200).json({
                    message:"Auth Failed",
                    statusCode:401,
                    data:null,
                    error:"Auth Failed"
                });
            }
            else{
                bcrypt.compare(req.body.password, users[0].password, (error,result)=>{
                    if(result){
                        const token=jwt.sign({email:users[0].email,userId:users[0]._id},'MyPrivateKey',{expiresIn:"1h"});
                        
                        res.status(200).json({
                            message:"Auth Successfull",
                            statusCode:200,
                            data:users[0],
                            token:token,
                            error:null
                        });
                    }
                    else{
                        res.status(200).json({
                            message:"Auth Failed",
                            statusCode:401,
                            data:null,
                            error:"Auth Failed"
                        });
                    }
                    if(error){
                        res.status(200).json({
                            message:"Auth Failed",
                            statusCode:401,
                            data:null,
                            error:"Auth Failed"
                        });
                    }
                });
            }
        })
        .catch(err =>{
            res.status(200).json({
                message:"Something went wrong",
                statusCode:500,
                data:null,
                error:err
            });
        });
}

module.exports.signUp = (req, res, next)=>{
    User.find({"email":req.body.email}).exec()
        .then(result=>{
            if(result.length>=1){
                res.status(200).json({
                    message:"user already exists",
                    statusCode:409,
                    data:null,
                    error:"uer already exists"

                });
            }
            else{
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        res.status(200).json({
                            message:"something went wrdffong",
                            statusCode:500,
                            data:null,
                            error:err
                        });
                    }
                    else{
                        const user = new User({
                            "fullName":req.body.fullName,
                            "email":req.body.email,
                            "password":hash
            
                        });
                        user.save()
                            .then(result =>{
                                res.status(200).json({
                                    message:"user created successfully",
                                    statusCode:200,
                                    data:user,
                                    error:null
                                });
                            })
                            .catch(err =>{
                                res.status(200).json({
                                    message:"some thing went wrong",
                                    statusCode:500,
                                    data:null,
                                    error:err
                                });
                            });
                    }
                });
            }
        })
        .catch(err =>{
            res.status(200).json({
                message:"some thing went wrong",
                statusCode:500,
                data:null,
                error:err
            });
        });
    

}

module.exports.deleteUser = (req , res, next)=>{
    User.remove({_id:req.params.userId}).exec()
    .then(result=>{
        res.status(200).json({
            message:"deleted successfully",
            statusCode:200,
            data:null,
            error:null
        });

    })
    .catch(err=>{
        res.status(200).json({
            message:"some thing went wrong",
            statusCode:500,
            data:null,
            error:err
        });

    })
}