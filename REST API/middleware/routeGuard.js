const { verifyToken } = require('../utils/authentication');
const User = require('../models/user');

const authGuard = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token == '') {
        res.send({
            message: 'Auhtorization token must be provided!'
        });
        return;
    }
    try {
        const tokenData = verifyToken(token);
        const user = await User.findById(tokenData.id);
        if (!user) {
            res.send({
                message: 'Invalid token!'
            });
            return;
        }

        next();

    } catch (err) {
        res.send({
            message: 'UNAUTHORIZED!',
        })
    }
};

module.exports = authGuard;