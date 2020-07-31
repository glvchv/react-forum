module.exports = {
    port: process.env.PORT || 175,
    privateKey: 'superSecretKey',
    dbUrl: 'mongodb+srv://forumAdmin:superSecretPassword@forum.x6hwn.mongodb.net/forum?retryWrites=true&w=majority',
    cookieKey: 'x-auth-token'
}