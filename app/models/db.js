
const mongoose = require('mongoose')

mongoose.Promise = Promise

// 数据库地址
const DB_URL = 'mongodb://localhost:27017/reservation'

var db = mongoose.createConnection(DB_URL)
db.on('error', (error) => console.log('连接数据库错误 => ' + error));
db.on('open', () => console.log('连接数据库成功'));

module.exports = db;