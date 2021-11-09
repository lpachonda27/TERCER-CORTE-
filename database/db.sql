-- to create a new database
CREATE DATABASE users_info;

-- to use database
use users_info

-- creating a new table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(30)
);


ALTER TABLE users ADD COLUMN email VARCHAR(30); 
