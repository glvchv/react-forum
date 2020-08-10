const Reply = require('../models/reply');
const User = require('../models/user');
const Post = require('../models/post');

module.exports = {
    get: {

    }, 
    patch: {
        replyToPost: async (req, res) => {
            const id = req.params.id;
            const { authorId, text } = req.body;
            const date = new Date();
            const reply = new Reply({
                toPost: id,
                author: authorId,
                text,
                date
            });

            try {
                const replyObject = await reply.save();
                await User.findByIdAndUpdate(authorId, {$push: {posts: id} });
                await Post.findByIdAndUpdate(id, {$push: {replies: replyObject._id} });
                res.send({
                    message: 'Successfully replied!',
                    data: replyObject
                });
            } catch (e) {
                res.send({
                    message: e.message
                });
            }
        },
    },
    put: {
        likeReply: async (req, res) => {
            const { id } = req.params;
            const { userId } = req.body;
    
            try {
                const post = await Reply.findById(id);
                const result = post.likes.find(id => id == userId);
                if (result) {
                    res.send({
                        message: 'You have already liked this reply!'
                    });
                    return;
                }
    
                await Reply.findByIdAndUpdate(id, {$push: {likes: userId}});
    
                res.send({
                    message: 'Reply Liked!'
                });
    
            } catch (err) {
                res.send({
                    message: err.message
                });
            }
        }
    }
}