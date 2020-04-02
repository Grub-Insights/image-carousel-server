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