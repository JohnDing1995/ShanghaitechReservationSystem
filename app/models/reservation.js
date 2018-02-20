var mongoose = require('mongoose');
var db = require('./db');
var reservationSchema = new mongoose.Schema(
  {
    username: String,
    studentId: String,
    fullName: String,
    reservationTime: String,
    firstSeat: String,
    secondSeat: String,
    thirdSeat: String 
  }
);
module.exports = db.model('reservation', reservationSchema);
