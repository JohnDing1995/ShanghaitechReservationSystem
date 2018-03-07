var express = require('express');
var crypto = require('crypto');

var router = express.Router();
var responseData;

var reservationModel = require('../models/reservation');
var seatModel = require('../models/seats');
var userModel = require('../models/users')

router.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }
    next();
});

router.post('/login', function (req, res) {
    console.log(req.body);
    userModel.findOne({username:'dry'}, function(err, user){
        if(err) throw err;
        console.log(user);
        user.comparePassword('123456', function(err, isMatch) {
            if (err) throw err;
            responseData.succeed = isMatch;
            console.log(isMatch);
            res.status(200).json(responseData);
        });
    });
});

router.get('/findseats', function(req, res){
    var querySeats =  seatModel.find({taken: 0});
    querySeats.select('seatNumber');
    querySeats.exec(function (err, seatNumbers) {
        if (err) return handleError(err);
    });
    responseData.data = {
        seats: seatNumbers//an ordered list of all available seats' number
    }
});

router.post('/reserve', function(req, res){
    //check seats' number
    if(req.body.seats.length > 3){
        responseData.message = 'Maximum 3 seats allowed'
        responseData.succeed = false;
        res.status(401);
    } else {
        var now= new Date();
        var reserve = new reservationModel({
            studentId: req.body.id,
            seats: req.body.seats,
            code: crypto.createHash('md5').update(toString(id) + toString(time)).digest("hex")//generate identification code,by student id and booking time
        })
        reserve.save(function(err) {
             if (err) throw err;
        });

        //save above to database(NoSQL is preferred)
        responseData = {
            code:code
        };
        res.status(200).json(responseData)
        //return outcome through response
    }
})

router.post('/test', function(req, res){
    console.log(req.body.account, req.body.password);
    responseData.succeed = true;
    responseData.message = 'I\'m not your guy， buddy' 
    res.status(200).json(responseData)
})

module.exports = router;