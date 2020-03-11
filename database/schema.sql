-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Pictures'
-- 
-- ---

DROP TABLE IF EXISTS `Pictures`;
		
CREATE TABLE `Pictures` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `img_url` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `restaurant_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `User`;
		
CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_name` VARCHAR NULL DEFAULT NULL,
  `profile_img` VARCHAR NULL DEFAULT NULL,
  `friend_count` INTEGER NULL DEFAULT NULL,
  `review_count` INTEGER NULL DEFAULT NULL,
  `helpful_count` INTEGER NULL DEFAULT NULL,
  `elite_flag` BINARY NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Restaurant'
-- 
-- ---

DROP TABLE IF EXISTS `Restaurant`;
		
CREATE TABLE `Restaurant` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Pictures` ADD FOREIGN KEY (user_id) REFERENCES `User` (`id`);
ALTER TABLE `Pictures` ADD FOREIGN KEY (restaurant_id) REFERENCES `Restaurant` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Pictures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Restaurant` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Pictures` (`id`,`user_id`,`img_url`,`description`,`date`,`restaurant_id`) VALUES
-- ('','','','','','');
-- INSERT INTO `User` (`id`,`user_name`,`profile_img`,`friend_count`,`review_count`,`helpful_count`,`elite_flag`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Restaurant` (`id`,`name`) VALUES
-- ('','');