const mysql = require('mysql');
const mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);


var getPictures = (ID, callback) => {
    var queryStr = `SELECT * from users;`
    connection.query(queryStr, (err, results) => {
        if (err) {
            console.log('error in getPictures: ',err)
        } else {
            callback(null, results)
        }
    })
}

module.exports = {
    getPictures
}
