var mongoose = require('mongoose'),
    User = require('./users');

var connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// create a user a new user
var testUser = new User({
    username: 'dry',
    password: 'Password123'
});

// save user to database
// testUser.save(function(err) {
//     if (err) throw err;
// });


User.findOne({username:'dry'}, function(err, testUser){
    if(err) throw err;
    testUser.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -> Password123: true
    });
})