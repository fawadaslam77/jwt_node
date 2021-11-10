const Blog = require('../models/BlogModel');
const BaseController= require('../controllers/BaseController');

module.exports.getAllBlogs = BaseController.get(Blog);

module.exports.getBlog = BaseController.getById(Blog);

module.exports.editBlog = BaseController.update(Blog);

module.exports.deleteBlog = BaseController.remove(Blog);

module.exports.addBlog = BaseController.add(Blog);






