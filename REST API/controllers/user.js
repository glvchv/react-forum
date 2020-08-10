const User = require('../models/user');
const { returnHashedPassword, generateToken, comparePasswords, verifyToken } = require('../utils/authentication');
const config = require('../config/config');


module.exports = {
    get: {
        getUser: async (req, res) => {
            const id = req.params.id;
            try {
                const userInfo = await User.findById(id).populate('posts');
                res.send({
                    data: userInfo,
                    message: 'Success'
                });
            } catch(err) {
                res.send({
                    message: err.message
                });
            }
        }
    },
    post: {
        registerUser: async (req, res) => {
            const { username, password } = req.body;
            const hashedPass = await returnHashedPassword(password);

            try {
                const user = new User({ username, password: hashedPass });
                const userObj = await user.save();
                const token = generateToken(username, userObj._id);
                res.header('Authorization', token).send({
                    message: 'Successfully registered!',
                    data: userObj
                });
            } catch (err) {
                res.send({
                    message: 'Username already registered!'
                });
            }
        },
        loginUser: async (req, res) => {
            const { username, password } = req.body;
            if (username === '' || password === '') {
                return res.send({
                    message: 'Invalid data!'
                })
            }
            try {
                const user = await User.findOne({ username: username });

                if (!user) {
                    return res.send({message: 'User not found!'});
                };
                const matched = await comparePasswords(password, user.password);
                
                if (!matched) {
                    return res.send({message: 'Incorrect password!'});
                }

                const token = generateToken(username, user._id);
                res.header('Authorization', token).status(302).send({
                    data: user,
                    message: 'Logged In!'
                });
            } catch (err) {
                res.send({
                    message: err.message
                });
            }

        },
        verifyUser: async (req, res) => {
            const token = req.headers.authorization || '';

            try {
                const tokenData = verifyToken(token);
                const user = await User.findById(tokenData.id);

                if (!user) {
                    res.send({
                        message: 'Unauthorized!'
                    });
                    return;
                }

                res.send({
                    message: 'Authorized!',
                    data: user
                });
            } catch (err) {
                res.send({
                    message: err.message
                });
            };

        }
    }, 
    put: {
        updateUser: async (req, res) => {
            try {
                const userId = req.params.id;
                const url = req.body.url;
                console.log(url);
                const userObj = await User.findByIdAndUpdate(userId, {avatarUrl: url});

                if (!userObj) {
                    return res.send({
                        message: 'User not found!'
                    })
                }

                res.send({
                    message: 'Successfully updated!',
                    data: userObj
                });

            } catch (err) {
                res.send({
                    message: err.message
                });
            };
        }
    }
};
