var mongoose = require('mongoose');
var db = require('db');

//Define a schema
var Schema = mongoose.Schema;
var seatSchema;
seatSchema = new Schema(
    {
        seatNumber: Number,
        taken: Boolean
    }
);
module.exports = db.model('seats', seatSchema);
