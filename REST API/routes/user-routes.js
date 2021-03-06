const router = require('express').Router();
const User = require('../models/user');
const userController = require('../controllers/user');
const authGuard = require('../middleware/routeGuard');

router.get('/profile/:id', authGuard, userController.get.getUser);

router.post('/register', userController.post.registerUser);
router.post('/login', userController.post.loginUser);
router.post('/verify', userController.post.verifyUser);

router.put('/:id/update', userController.put.updateUser);

module.exports = router;