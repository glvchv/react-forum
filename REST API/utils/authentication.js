const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

async function returnHashedPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

function generateToken(username, id) {
    return jwt.sign({ username, id }, config.privateKey, { expiresIn: 30 * 60 });
}

function verifyToken(token) {
    return jwt.verify(token, config.privateKey);
};

async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
    returnHashedPassword,
    generateToken,
    verifyToken,
    comparePasswords
}