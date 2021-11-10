const express = require('express');
const router = express.Router();

const Auth = require('../middlewares/AuthMiddleware');

const UserController = require('../controllers/UserController');


router.delete('/:userId',Auth, UserController.deleteUser);
router.post('/login',UserController.login);
router.post('/signup',UserController.signUp);

module.exports = router;