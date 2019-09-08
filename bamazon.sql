DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE products
(
  item_id INT NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (100) NOT NULL,
  department_name VARCHAR
  (100) NOT NULL,
  price DECIMAL
  (10,2) NOT NULL,
  stock_quantity INT
  (20) NOT NULL,
  PRIMARY KEY
  (item_id)
);

  Select *
  FROM products;

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ('Coca-Cola', 'Drinks', 1.25, 10),
    ('Fanta Orange', 'Drinks', 1.25, 14),
    ('Dasani', 'Drinks', 1.00, 5),
    ('Diet Coke', 'Drinks', 1.25, 1),
    ('Trail Mix', 'Snacks', 1.50, 6),
    ('Cheetos', 'Snacks', 1.50, 15),
    ('Lays', 'Snacks', 1.50, 14),
    ('Snickers', 'Candy', 1.25, 6),
    ('Twix', 'Candy', 1.25, 15),
    ('Juicy Fruit', 'Gum', 0.75, 8);