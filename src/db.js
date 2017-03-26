import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.connection.on('open', function () {
    console.log('Connected to mongo server.')
});
mongoose.connection.on('error', function (err) {
    console.log('Error connected to mongo server!');
    console(err);
});
mongoose.connect('mongodb://localhost:27017/test');