import { createHash } from 'crypto';

var express = require('express');
var crypto = require('crypto');

var router = express.Router();
var responseData;


router.use( function(req, res, next) {

    responseData = {
        code: 0,
        message: ''
    }
    next();
} );

router.get('/seats', function(req, res){

})

router.post('/reserve', function(req, res){
    //check seats' number
    if(req.body.seats.length > 3){
        responseData.message = 'Maximum 3 seats allowed'
        responseData.succeed = false
        res.json(responseData)
    } else {
        const name = req.body.name;
        const time = req.body.time;
        const id = req.body.id;
        const seats = req.body.seats
        const data_crypto = toString(id) + toString(time)
        const code = crypto.createHash('md5').update(data_crypto).digest("hex");//generate identification code,by student id and booking time
  
        //save above to database(NoSQL is preferred)
        responseData.code = 200
        responseData.message = "Reservation Succeed!"
        responseData.data = {
            name:name,
            time:time,
            id:id,
            seats:seats,
            code:code
        }
        res.json(responseData)
        //return outcome through response
    

    }
})