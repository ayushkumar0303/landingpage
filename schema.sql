CREATE DATABASE Company;
USE Company;

CREATE TABLE userDetails(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  Name VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Message TEXT NOT NULL
);

INSERT INTO userDetails (Name, Email,Message)
VALUES 
('Ayush', 'ayush@gmail.com','My name is Ayush');