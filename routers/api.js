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
    const name = req.body.name;
    const time = req.body.time;
    const id = req.body.id;
    const seat_id = req.body.seat_id
    const data_crypto = toString(id) + toString(time)
    const code = crypto.createHash('md5').update(data_crypto).digest("hex");//generate identification code,by student id and booking time
    ```
    save above to database(NoSQL is preferred)
    return outcome through response
    ```

})