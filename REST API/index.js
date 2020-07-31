const mongoose = require('mongoose');
const app = require('express')();
const config = require('./config/config');
const postRouter = require('./routes/post-routes');
const userRouter = require('./routes/user-routes');

mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        throw err;
    };

    console.log('*'.repeat(50));
    console.log('Database is set up!');
    console.log('*'.repeat(50));
});


require('./config/express')(app);

app.use('/api/', postRouter);
app.use('/api/user', userRouter);

app.listen(config.port, (err) => {
    if (err) {
        throw err;
    };
    console.log(`Server is up and running on port ${config.port}!`);
    console.log(`To use the RESTful API go to localhost:${config.port}/api/`);
});