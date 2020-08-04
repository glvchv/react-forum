const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    get: {
        getAllPosts: async (req, res) => {
            try {
                const posts = await Post.find().populate('author');
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
                    return res.status(404).send('Post not found!');
                }
                res.status(300).send({
                    message: 'Found!',
                    data: post
                });
            } catch (err) {
                res.status(404).send({
                    message: err.message
                });
            }
        }
    },
    post: {
        createPost: async (req, res) => {
            const { title, text, author } = req.body;
            try {
                const post = new Post({ title, text, author });
                await User.findByIdAndUpdate(author, {$push: {'posts': post._id}});
                const returnObject = await post.save();
                return res.status(302).send({
                    message: 'Successfully posted!',
                    data: returnObject
                });

            } catch (err) {
                res.status(400).send({
                    message: 'Duplication of posts!'
                });
            }
        }
    },
    patch: {
        likePost: async (req, res) => {
            const { id } = req.params;
            const { userId } = req.body;
    
            try {
                const post = await Post.findById(id);
                const result = post.likes.find(id => id == userId);
                if (result) {
                    res.send({
                        message: 'You have already liked this post!'
                    });
                    return;
                }
    
                await Post.findByIdAndUpdate(id, {$push: {likes: userId}});
    
                res.send({
                    message: 'Post Liked!'
                });
    
            } catch (err) {
                res.send({
                    message: err.message
                });
            }
        }
    }
};