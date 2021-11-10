const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{ type:String, required:true, minlength:6, maxlength:30},
    email:{ type:String, required:true, match:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/},
    password:{type:String,required:true}
});

module.exports = mongoose.model('User',userSchema);