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
        for (let i = 1; i <= 100; i += 1) {
            let randomIdx = Math.floor(Math.random() * restaurants.length);
            let temp = restaurants[randomIdx];
            let restaurantQuery = `INSERT INTO restaurants(id, res_name) VALUES(${i}, "${temp}")`;
            connection.query(restaurantQuery);
        }
        // insert 50 users 
        for (let x = 1; x <= 50; x += 1) {
            let randomIdx = Math.floor(Math.random() * userNames.length);
            let randomIdxImg = Math.floor(Math.random() * profileImages.length);
            let tempName = userNames[randomIdx];
            let tempImg = profileImages[randomIdxImg];
            let friendCount = getRandomIntInclusive(0, 200);
            let reviewCount = getRandomIntInclusive(0, 255);
            let helpfulCount = getRandomIntInclusive(0, 50);
            let eliteFlag = Math.floor(Math.random() * flag.length);
            let userQuery = `INSERT INTO users(id, name_user, profile_img, friend_count, review_count, helpful_count, elite_flag) VALUES(${x}, "${tempName}", "${tempImg}", "${friendCount}", "${reviewCount}", "${helpfulCount}", "${eliteFlag}" )`
            connection.query(userQuery)
        }
        // insert 50 pictures
        for (let j = 1;  j < 300; j += 1) {
                let userId = getRandomIntInclusive(1, 50);
                let imgUrl = foodImages[getRandomIntInclusive(0, 33)];
                let foodDescript = foodDesc[Math.floor(Math.random() * foodDesc.length)];
                let date = faker.date.recent();
                let resId = getRandomIntInclusive(1, 100);
                let resQuery = `INSERT INTO pictures(id, id_user, img_url, descript, date_of, restaurant_id) VALUES(${j}, "${userId}", "${imgUrl}", "${foodDescript}", "${date}", "${resId}")`;
                connection.query(resQuery);
        }

        
        
    })
    return console.log('DB seeded')
}
insertFakeData()

module.exports = {
    insertFakeData,
}
/* 
let restaurantQuery = `INSERT INTO restaurants(id, res_name) VALUES("${i}", "${temp}")`;
let userQuery = `INSERT INTO users(id, name_user, profile_img, friend_count, review_count, helpful_count, elite_flag) VALUES("${x}" ,"${tempName}", "${tempImg}", "${friendCount}", "${reviewCount}", "${helpfulCount}", "${eliteFlag}" )`
let resQuery = `INSERT INTO pictures(id, id_user, img_url, descript, date, restaurant_id) VALEUS("${j}" , "${userId}", "${imgUrl}", "${foodDescript}", "${date}", "${resId}")`;

*/
/* 
seed restaurants table first
        ID range from 0 - 100
        seed users 0-50
        seed pictures 
        for user_id: random number between 0-50
        for restaurant_id: random number between 0-100
        
        */
/*  for (let i = 1; i < 100; i += 1) {
        let randomIdxRes = Math.floor(Math.random() * restaurants.length);
        let tempRes = restaurants[randomIdxRes];
        let restaurantQuery = `INSERT INTO restaurants(id, res_name) VALUES(${i},"${tempRes}")`;
        connection.query(restaurantQuery);

        let randomIdxUser = Math.floor(Math.random() * userNames.length);
        let randomIdxImg = Math.floor(Math.random() * profileImages.length);
        let tempName = userNames[randomIdxUser];
        let tempImg = profileImages[randomIdxImg];
        let friendCount = getRandomIntInclusive(0, 200);
        let reviewCount = getRandomIntInclusive(0, 255);
        let helpfulCount = getRandomIntInclusive(0, 50);
        let eliteFlag = Math.floor(Math.random() * flag.length);
        let userQuery = `INSERT INTO users(id, name_user, profile_img, friend_count, review_count, helpful_count, elite_flag) VALUES(${i} ,"${tempName}", "${tempImg}", "${friendCount}", "${reviewCount}", "${helpfulCount}", "${eliteFlag}" )`
        connection.query(userQuery)

        let userId = getRandomIntInclusive(0, 50);
        let imgUrl = foodImages[i];
        let foodDescript = Math.floor(Math.random() * foodDesc.length);
        let date = faker.date.recent();
        let resId = getRandomIntInclusive(0, 100);
        let resQuery = `INSERT INTO pictures(id, id_user, img_url, descript, date_of, restaurant_id) VALUES(${i}, ${i}, "${imgUrl}", "${foodDescript}", "${date}", ${i})`;
        connection.query(resQuery);
    } */