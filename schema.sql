DROP DATABASE IF EXISTS `database_development`;
CREATE DATABASE `database_development`;

USE 'database_development';

CREATE TABLE IF NOT EXISTS `accounts` (
  `id`int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
);

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

