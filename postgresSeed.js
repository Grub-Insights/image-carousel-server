/* eslint-disable no-console */
// const mysql = require('mysql');
const faker = require('faker');
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'carousel',
});

console.log('in the PG seed file');
// const mysqlConfig = require('./database/config.js');
// require('dotenv').config();

// const connection = mysql.createConnection({
//   database: 'carousel',
//   host: 'localhost',
//   user: 'root',
//   // password: process.env.PASS,
// });

const generate = (callback) => {
  const names = [];
  for (let i = 0; i <= 50; i += 1) {
    let temp;
    temp = '';
    temp += faker.name.firstName();
    const last = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    temp += (' ' + last + '.');
    names.push(temp);
  }
  const food = [
    'Steak',
    'Porkchops',
    'String Beans',
    'Ahi',
    'Sushi',
    'Pho',
    'Beef Noodle Soup',
    'Fries', 'Rib-Eye',
    'Garlic Noodles',
    'Soft Shell Crab',
    'Mac and Cheese',
    'Poke',
    'Salad',
    'Eggs Benedict',
    'Humus',
    'Gyro',
    'Garbanzo Beans',
  ];
  const foodImages = [
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/anise-aroma-art-bazaar-277253.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/appetizing-bread-breakfast-close-up-357573.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/apricot-fruits-on-bowl-1028599.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/asparagus-barbecue-cuisine-delicious-361184.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/barbecue-bbq-beef-cooked-410648.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/black-frying-pan-with-spaghetti-sauce-near-brown-wooden-691114.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/blur-breakfast-close-up-dairy-product-376464.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/burrito-chicken-delicious-dinner-461198.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/close-up-photo-of-a-cheese-burger-1633578.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/close-up-photo-of-man-cooking-meat-1482803.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/club-sandwich-served-on-chopping-board-1600711.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/cooked-food-704569.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/cooked-pasta-on-brown-wooden-bowl-803963.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/food-dinner-lunch-unhealthy-70497.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/food-restaurant-meal-chicken-106343.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/lunch-table-5929.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pasta-with-vegetable-dish-on-gray-plate-beside-tomato-fruit-769969.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pepperoni-pizza-803290.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pepperoni-pizza-with-basil-leaves-1260968.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/plate-of-rice-and-cooked-meat-1624487.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/round-white-and-blue-ceramic-bowl-with-cooked-ball-soup-and-955137.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/selective-focus-photography-of-beef-steak-with-sauce-675951.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/slice-of-loaf-bread-with-dog-face-920220.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/sliced-tomato-with-green-vegetables-in-brown-saucer-1639556.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/sliced-vegetable-and-cooked-food-on-white-ceramic-plate-1234535.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/spinach-chicken-pomegranate-salad-5938.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/top-view-of-food-1640772.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/top-view-photo-of-food-dessert-1099680.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/variety-of-cooked-dishes-374052.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/vegetable-sandwich-on-plate-1095550.jpg',
    'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545.jpg'];
  const profileImg = [
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-african-american-afro-black-female-1181519.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-attractive-beautiful-beauty-415829.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-beard-boy-casual-220453.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-businessman-close-up-corporate-428364.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/close-up-photography-of-man-wearing-sunglasses-1212984.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/closeup-photo-of-smiling-woman-wearing-blue-denim-jacket-1130626.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/face-facial-hair-fine-looking-guy-614810.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/man-in-black-shirt-35065.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/man-in-red-jacket-1681010.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/men-s-wearing-black-suit-jacket-and-pants-937481.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/photo-of-a-woman-smiling-1520760.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/photography-of-a-guy-wearing-green-shirt-1222271.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-2379004.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/smiling-woman-wearing-black-sweater-1587009.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-in-black-scoop-neck-shirt-smiling-38554.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-smiling-at-the-camera-1181686.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-wearing-coat-762020.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-with-red-lips-leaning-on-green-garment-in-selective-1758845.jpg',
    'https://elclectictacoportraits.s3-us-west-1.amazonaws.com/women-s-white-and-black-button-up-collared-shirt-774909.jpg',
  ];

  callback(names, food, foodImages, profileImg);
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seedPG = () => {
  client.query(`DROP DATABASE IF EXISTS carousel;`, (err) => {
    console.log('inside the query func')
    if (err) {
      console.log('postgres did not drop Carousel Database: ', err);
    }
  });

  client.query('CREATE DATABASE carousel;', (err) => {
    if (err) {
      console.log('postgres did not create Carousel Database: ', err);
    }
  });

  client.query('\c carousel;', (err) => {
    if (err) {
      console.log('postgres did not use Carousel Database');
    }
  });

  const createRestaurantsTable = 'CREATE TABLE restaurants (rest_id bigserial primary key, res_name VARCHAR (100) NOT NULL);';


  client.query(createRestaurantsTable, (err) => {
  console.log('inside making the rest table')

    if (err) {
      console.log('DB did not create restaurants table');
    }
  });

  const createUsersTable = 'CREATE TABLE users ( user_id bigserial primary key, name VARCHAR (100) NOT NULL, profile_img VARCHAR(255) NOT NULL, friend_count INTEGER default 0, review_count INTEGER default 0, helpful_count INTEGER default 0, elite_flag BOOLEAN NOT NULL);';

  client.query(createUsersTable, (err) => {
    if (err) {
      console.log('DB did not create users table');
    }
  });

  const createPicturesTable = 'CREATE TABLE pictures ( picture_id bigserial primary key, date_of VARCHAR(100), img_url VARCHAR(255) NOT NULL, descript VARCHAR(100) NOT NULL, restaurant_id int NOT NULL, id_Picture INTEGER REFERENCES users(user_id), id_Restaurants INTEGER REFERENCES restaurants(rest_id));';

  client.query(createPicturesTable, (err) => {
    if (err) {
      console.log('DB did not create pictures table');
    }
  });


  const flag = [true, false];
  generate((userNames, foodDesc, foodImages, profileImages) => {
    // insert 100 restaurants
    for (let i = 1; i <= 100; i += 1) {
      // const randomIdx = Math.floor(Math.random() * restaurants.length);
      const temp = faker.company.companyName();
      const restaurantQuery = `INSERT INTO restaurants(rest_id, res_name) VALUES(${i}, '${temp}')`;
      // console.log(restaurantQuery);
      client.query(restaurantQuery, (err) => {
        if (err !== null) {
          console.log('error in restaurant query: ', err);
        }
      });
    }
    // insert 50 users
    for (let x = 1; x <= 50; x += 1) {
      const randomIdx = Math.floor(Math.random() * userNames.length);
      const randomIdxImg = Math.floor(Math.random() * profileImages.length);
      const tempName = userNames[randomIdx];
      const tempImg = profileImages[randomIdxImg];
      const friendCount = getRandomIntInclusive(0, 200);
      const reviewCount = getRandomIntInclusive(0, 255);
      const helpfulCount = getRandomIntInclusive(0, 50);
      const eliteFlag = Math.floor(Math.random() * flag.length);
      const userQuery = `INSERT INTO users(user_id, name, profile_img, friend_count, review_count, helpful_count, elite_flag) VALUES(${x}, '${tempName}', '${tempImg}', '${friendCount}', '${reviewCount}', '${helpfulCount}', '${eliteFlag}' )`;
      client.query(userQuery, (err) => {
        if (err !== null) {
          console.log('error in users query: ', err)
        }
      });
    }
    // insert 50 pictures
    for (let j = 1; j < 1000; j += 1) {
      const userId = getRandomIntInclusive(1, 50);
      const imgUrl = foodImages[getRandomIntInclusive(0, 33)];
      const foodDescript = foodDesc[Math.floor(Math.random() * foodDesc.length)];
      const day = getRandomIntInclusive(1, 30);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[Math.floor(Math.random() * months.length)];
      const year = getRandomIntInclusive(2000, 2020);
      const date = `${month} ${day}, ${year}`;

      const resId = getRandomIntInclusive(1, 100);
      const resQuery = `INSERT INTO pictures(picture_id, id_user, img_url, descript, date_of, restaurant_id) VALUES(${j}, '${userId}', '${imgUrl}', '${foodDescript}', '${date}', '${resId}')`;
      client.query(resQuery, (err) => {
        if (err) {
          console.log('error in pictures query: ', err);
        }
      });
    }
  });

  client.end((err) => {
    if (err !== null) {
      console.log('DB failed to disconnect');
    }
    console.log('DB disconnected');
  });
};

seedPG();
