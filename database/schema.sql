DROP DATABASE IF EXISTS carousel;

CREATE DATABASE carousel;

USE carousel;

CREATE TABLE restaurants (
    id int NOT NULL AUTO_INCREMENT,
    res_name VARCHAR(40),
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id int NOT NULL , 
    name_user VARCHAR(50) NOT NULL,
    profile_img VARCHAR(255) NOT NULL,
    friend_count int(200) NOT NULL,
    review_count int(255) NOT NULL,
    helpful_count int(50) NOT NULL,
    elite_flag boolean NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE pictures (
    id int NOT NULL  ,
    id_user int NOT NULL ,
    img_url VARCHAR(255) NOT NULL,
    descript VARCHAR(100) NOT NULL,
    date_of VARCHAR(100),
    restaurant_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) 
        REFERENCES users(id),
    FOREIGN KEY (restaurant_id)
        REFERENCES restaurants(id)
);

/* INSERT INTO restaurants(id, res_name) VALUES(0, "Dragon Eats");
INSERT INTO users(id, name_user, profile_img, friend_count, review_count, helpful_count, elite_flag) VALUES(0, "Calvin H.", "https://elclectictacoportraits.s3-us-west-1.amazonaws.com/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-2379004.jpg", 100, 100, 5, true );
INSERT INTO pictures(id, id_user, img_url, descript, date, restaurant_id) VALUES(0, 1, "https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/anise-aroma-art-bazaar-277253.jpg", "Pizza", "2010-01-01,", 1); */

-- ////////////////////////// casandra layout
-- const restaurants = schema({
-- restaurant_id: Number,
-- res_name: String,
-- });

-- const user = schema ({
--    userId: Number,
--    name: String,
--    profileImg: String,
--    friendCount: Number,
--    reviewCount: Number,
--    helpfulCount: Number,
--    eliteFlag: boolean
-- })

-- pictures = schema ({
--     pictureId: Number, 
--     imageUrl: String, 
--     description: String,
--     date: String,
--     restaurantId: Number,
-- })

-- ////////////////////////////////////// postgres layout
id_User INTEGER REFERENCES users(user_id), id_Restaurants INTEGER REFERENCES restaurants(id)

CREATE TABLE restaurants (rest_id bigserial primary key, res_name VARCHAR (100) NOT NULL);


CREATE TABLE users ( user_id bigserial primary key, name VARCHAR (100) NOT NULL, profile_img VARCHAR(255) NOT NULL, friend_count INTEGER default 0, review_count INTEGER default 0, helpful_count INTEGER default 0, elite_flag BOOLEAN NOT NULL);

CREATE TABLE pictures ( picture_id bigserial primary key, date_of VARCHAR(100), img_url VARCHAR(255) NOT NULL, descript VARCHAR(100) NOT NULL, restaurant_id int NOT NULL, id_Picture INTEGER REFERENCES users(user_id), id_Restaurants INTEGER REFERENCES restaurants(rest_id));
