DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE products
(
  item_id INT(5) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(20) NOT NULL,
);
