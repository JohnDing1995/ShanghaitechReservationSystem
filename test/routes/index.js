var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var arr = req.body.seats;
  console.log('test arrays');
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
});

module.exports = router;
