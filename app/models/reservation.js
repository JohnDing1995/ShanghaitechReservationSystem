var mongoose = require('mongoose');
var db = require('./db');

//Define a schema
var Schema = mongoose.Schema;
var reservationSchema;
reservationSchema = new Schema(
    {
        studentId: String,
        date: {type: Date, default: Date.now},
        seats: Array,
        code: String
    }
);
module.exports = db.model('reservation', reservationSchema);
