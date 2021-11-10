const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{ type:String, required:true, minlength:6, maxlength:30},
    content:{ type:String, required:true, minlength:6, maxlength:30}
});

module.exports = mongoose.model('Blog',blogSchema);