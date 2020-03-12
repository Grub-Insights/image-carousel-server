const mysql = require('mysql');
const mysqlConfig = require('./config.js');
var fakeData = require('../fakeData.js')
var faker = require('faker');
var connection = mysql.createConnection(mysqlConfig);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

var insertFakeData = () => {
    var flag = [true, false]
    fakeData.generate((userNames, foodDesc, restaurants, foodImages, profileImages) => {
        // insert 100 restaurants
        for (let i = 0; i <= 100; i += 1) {
            let randomIdx = Math.floor(Math.random() * restaurants.length);
            let temp = restaurants[randomIdx];
            let restaurantQuery = `INSERT INTO restaurants(res_name) VALUES(${temp})`;
            connection.query(restaurantQuery);
        }
        // insert 50 users 
        for (let x = 0; x <= 50; x += 1) {
            let randomIdx = Math.floor(Math.random() * userNames.length);
            let randomIdxImg = Math.floor(Math.random() * profileImages.length);
            let tempName = userNames[randomIdx];
            let tempImg = profileImages[randomIdxImg];
            let friendCount = getRandomIntInclusive(0, 200);
            let reviewCount = getRandomIntInclusive(0, 255);
            let helpfulCount = getRandomIntInclusive(0, 50);
            let eliteFlag = Math.floor(Math.random() * flag.length);
            let userQuery = `INSERT INTO users(name_user, profile_img, friend_count, review_count, helpful_count, elite_flag) VALUES(${tempName}, ${tempImg}, ${friendCount}, ${reviewCount}, ${helpfulCount}, ${eliteFlag} )`
            connection.query(userQuery)
        }
        // insert 50 pictures
        for (let j = 0;  j <= 50; j += 1) {
            let userId = getRandomIntInclusive(0, 50);
            let imgUrl = foodImages[j];
            let foodDescript = Math.floor(Math.random() * foodDesc.length);
            let date = faker.date.recent();
            let resId = getRandomIntInclusive(0, 100);
            let resQuery = `INSERT INTO pictures(id_user, img_url, descript, date, restaurant_id) VALEUS(${userId}, ${imgUrl}, ${foodDescript}, ${date}, ${resId})`;
            connection.query(resQuery);
        }


    })
}

module.exports = {
    insertFakeData,
}

/* 
    seed restaurants table first
        ID range from 0 - 100
        seed users 0-50
        seed pictures 
            for user_id: random number between 0-50
            for restaurant_id: random number between 0-100

*/