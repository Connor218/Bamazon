DROP DATABASE IF EXISTS products;
CREATE    database products;

USE products;

CREATE TABLE products(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
   PRIMARY KEY (id),
   prodcut_name VARCHAR(50) NOT NULL,
   department_name VARCHAR(50) NOT NULL,
   price INTEGER,
   stock_quantity INTEGER,
);

INSERT INTO products (id, prodcut_name, department_name, price, stock_quantity) VALUES (1, "Iphone", "Phones", 1000, 50);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Fan", "Appliances", 50, 10);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Monitor", "Computers", 300, 25);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Laptop", "Computers", 1100, 10);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Mic", "Computers", 100, 50);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Speakers", "Computers", 150, 100);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Keyboards", "Computers", 130, 15);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Backpacks", "Appliances", 60, 50);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("S6", "Phones", 600, 50);
INSERT INTO products (prodcut_name, department_name, price, stock_quantity) VALUES ("Mouse", "Computers", 100, 5);
