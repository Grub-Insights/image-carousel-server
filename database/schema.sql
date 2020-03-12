DROP DATABASE IF EXISTS carousel;

CREATE DATABASE carousel;

USE carousel;

CREATE TABLE restaurants (
    id int NOT NULL AUTO_INCREMENT,
    res_name VARCHAR(40),
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name_user VARCHAR(50) NOT NULL,
    profile_img VARCHAR(100) NOT NULL,
    friend_count int(200) NOT NULL,
    review_count int(255) NOT NULL,
    helpful_count int(50) NOT NULL,
    elite_flag boolean NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE pictures (
    id int NOT NULL AUTO_INCREMENT,
    id_user int NOT NULL,
    img_url VARCHAR(100) NOT NULL,
    descript VARCHAR(100) NOT NULL,
    date date,
    restaurant_id int NOT NULL,
    PRIMARY KEY (id)
);