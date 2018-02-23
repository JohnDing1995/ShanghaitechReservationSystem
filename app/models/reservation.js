var mongoose = require('mongoose');
var db = require('./db');

//Define a schema
var Schema = mongoose.Schema;
var reservationSchema;
reservationSchema = new Schema(
    {
        username: String,
        studentId: String,
        fullName: String,
        time: String,
        date: {type: Date, default: Date.now},
        firstSeat: Number,
        secondSeat: Number,
        thirdSeat: Number,
        code: String
    }
);
module.exports = db.model('reservation', reservationSchema);
