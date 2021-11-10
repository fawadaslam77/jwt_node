const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{
        const decoded = jwt.verify(req.headers.token,'MyPrivateKey');// it verifies and returns the decoded token.
        req.userData=decoded;// append another object in req body inorder to use toekn decoded values in future.
        next();

    }
    catch(err){
         res.status(200).json({
            message:"auth failed",
            statusCode:401,
            data:null,
            error:"Auth Failed"
        });

    }

}