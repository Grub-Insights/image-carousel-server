const express = require('express')
const bodyParser = require('body-parser')
var Db = require('../database/index.js')
const app = express()

app.get('/', (req, res) => {
    console.log('Pinged')
})

app.use(express.static(__dirname + '/../public'))


app.get('/api/carousel/', (req, res) => {
    console.log('GET REQUEST recieved')
    var restaurant = 20;
    Db.getPictures(20, (err, results) => {
        if (err) {
            console.log('err in server CB: ', err) 
        } else {
            console.log('results in server CB: ', results)
        }
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

/* 
data: 20

'/api/carousel/:restaurantID'

req.params.restaurantID


*/