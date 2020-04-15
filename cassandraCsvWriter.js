
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var faker = require('faker');
let writer = csvWriter();

let userCount = 1;
let restaurantCount = 1;
let pictureCount = 1;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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

const dataGen = () => {
  writer.pipe(fs.createWriteStream('./cassandraCsvFiles/restaurantcsv/csv_restSeed0.csv'));
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      restaurant_id: i,
      restaurant_name: faker.company.companyName()
    })
  }

  writer.end();
  writer = csvWriter();
  writer.pipe(fs.createWriteStream('./cassandraCsvFiles/usercsv/csv_userseed0.csv'));
  for (let j = 0; j < 1000000; j++) {
    writer.write({
      user_id: j,
      elite_flag: getRandomIntInclusive(0, 1),
      friend_count: getRandomIntInclusive(0, 200),
      profile_image_url: profileImg[getRandomIntInclusive(0, profileImg.length - 1)],
      review_count: getRandomIntInclusive(0, 100),
      user_name: faker.company.companyName(),

    })
  }

  writer.end();
  writer = csvWriter();
  writer.pipe(fs.createWriteStream('./cassandraCsvFiles/picturecsv/csv_pictureseed0.csv'));
  for (let k = 0; k < 10000000; k++) {
    writer.write({
      restaurant_id: getRandomIntInclusive(0, 999999),
      picture_id: k,
      date: '2017-05-05',
      description: faker.random.words(5),
      elite_flag: getRandomIntInclusive(0, 1),
      friend_count: getRandomIntInclusive(0, 200),
      profile_image_url: profileImg[getRandomIntInclusive(0, profileImg.length - 1)],
      review_count: getRandomIntInclusive(0, 100),
      user_id: getRandomIntInclusive(0, 999999),
      user_name: faker.name.firstName(),
    });
  }
  writer.end();
  console.log('done');
};
dataGen();


// CREATE KEYSPACE restaurant_pictures WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};
// CREATE TABLE user (
  // user_id uuid,
  // user_name text,
  // profile_image_url text,
  // friend_count int,
  // review_count int,
  // elite_flag Boolean,
//   PRIMARY KEY (user_id)
// )

//  CREATE TABLE user (
//   user_id uuid PRIMARY KEY,
//   user_name text,
//   profile_image_url text,
//   friend_count int,
//   review_count int,
//   elite_flag Boolean,
//   );

// CREATE TABLE restaurants (
//   restaurant_id UUID PRIMARY KEY,
//   restaurant_name text,
// );

// CREATE TABLE cycling ( 
//   id UUID PRIMARY KEY, 
//   lastname text, 
//   birthday timestamp, 
//   nationality text, 
//   weight text, 
//   height text 
// );

// CREATE TABLE pictures (
//   user_id int,
//   user_name text,
//   profile_image_url text,
//   friend_count int,
//   review_count int,
//   elite_flag Boolean,
//   picture_id uuid,
//   restaurant_id int,
//   description text,
//   date DATE,
//   PRIMARY KEY ((restaurant_id), picture_id)
// )