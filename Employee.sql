-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table employee within employee_db --
CREATE TABLE employee (
  id int(30) NOT NULL AUTO_INCREMENT ,
 
  firstname VARCHAR(30) ,
  
  lastname VARCHAR(30),
  
  role_id int,
  
  manager_id int NULL

  Primary key (id)
);


-- Department Table --
CREATE TABLE department (
 
  id  int(30) AUTO_INCREMENT ,

  name VARCHAR(30),
  
  PRIMARY KEY (id)
  
  
);


-- Role Table --

CREATE TABLE role (
 
  id  int(30) AUTO_INCREMENT ,

  title VARCHAR(30),
  
  salary DECIMAL(10,2) NULL,

  department_id INT(30) ,

  PRIMARY KEY (id)
  
  
);




-- Creates new rows containing data in all named columns --


