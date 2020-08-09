const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    get: {
        getAllPosts: async (req, res) => {
            try {
                const posts = await Post.find().populate('author').populate('replies');
                res.status(200).send({
                    message: 'Successfull!',
                    data: posts
                });
            } catch(err) {
                res.send({
                    message: err.message
                });
            }

        },

        getPostById: async (req, res) => {
            const id = req.params.id;
            try {
                const post = await Post.findById(id).populate('replies').populate('author');
                if (!post) {
                    return res.status(404).send({
                        message: 'Post not found!'
                    });
                }
                res.send({
                    message: 'Found!',
                    data: post
                });
                console.log('LIKES = ' + post);
            } catch (err) {
                res.send({
                    message: err.message
                });
            }
        }
    },
    post: {
        createPost: async (req, res) => {
            const { title, text, author, category } = req.body;
            try {
                const post = new Post({ title, text, author, category });
                await User.findByIdAndUpdate(author, {$push: {'posts': post._id}});
                const returnObject = await post.save();
                return res.status(302).send({
                    message: 'Successfully posted!',
                    data: returnObject
                });

            } catch (err) {
                res.status(400).send({
                    err,
                    message: 'Duplication of posts!'
                });
            }
        }
    },
    put: {
        likePost: async (req, res) => {
            const { id } = req.params;
            const { userId } = req.body;

            try {
                const post = await Post.findById(id);
                const result = post.likes.find(id => id == userId);
                if (result !== undefined) {
                    res.send({
                        message: 'You have already liked this post!'
                    });
                    return;
                }
    
                const newPost = await Post.findByIdAndUpdate(id, {$push: {likes: userId}});
                res.send({
                    message: 'Post Liked!',
                    data: newPost
                });
    
            } catch (err) {
                res.send({
                    message: err.message
                });
            }
        }
    }
};