var mongoose = require('mongoose'),
    User = require('./users');

var connStr = 'mongodb://localhost:27017/reservation';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// create a user a new user
var testUser = new User({
    username: 'dry',
    password: '123456'
});

// save user to database
// testUser.save(function(err) {
//      if (err) throw err;
//  });


User.findOne({username:testUser.username}, function(err, user){
    if(err) throw err;
    user.comparePassword(testUser.password, function(err, isMatch) {
        if (err) throw err;
        console.log('123456:', isMatch); // -> Password123: true
    });
})