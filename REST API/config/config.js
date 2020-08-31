module.exports = {
    port: process.env.PORT || 175,
    privateKey: process.env.PRIVATE_KEY,
    dbUrl: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@forum.x6hwn.mongodb.net/forum?retryWrites=true&w=majority`,
    cookieKey: 'x-auth-token'
}