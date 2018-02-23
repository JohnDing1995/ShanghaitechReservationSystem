import { createHash } from 'crypto';

var express = require('express');
var crypto = require('crypto');

var router = express.Router();
var responseData;

var reservationModel = require('../models/reservation');
var seatModel = require('../models/seats');

router.use( function(req, res, next) {

    responseData = {
        code: 0,
        message: ''
    };
    next();
} );

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
        res.json(responseData)
    } else {
        var reserve = new reservationModel({
            username: '',
            studentId: req.body.id,
            fullName: req.body.fullName,
            time: req.body.time,
            seats: req.body.seats,
            code: crypto.createHash('md5').update(toString(id) + toString(time)).digest("hex")//generate identification code,by student id and booking time
        })
        reserve.save()

        //save above to database(NoSQL is preferred)
        responseData.code = 200
        responseData.message = "Reservation Succeed!"
        responseData.data = {
            code:code
        }
        res.json(responseData)
        //return outcome through response
    

    }
})