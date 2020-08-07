const router = require('express').Router();
const postController = require('../controllers/post');
const replyController = require('../controllers/reply');
const authGuard = require('../middleware/routeGuard');

router.get('/posts', postController.get.getAllPosts);
router.get('/posts/:id', authGuard, postController.get.getPostById);

router.post('/posts', authGuard, postController.post.createPost);

router.patch('/posts/:id', authGuard, replyController.post.replyToPost);
router.put('/posts/:id/like', authGuard, postController.put.likePost);

module.exports = router;