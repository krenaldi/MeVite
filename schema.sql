-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS mevite;
-- Creates the "blogger" database --
CREATE DATABASE mevite;

USE mevite;


    CREATE TABLE  contacts (

        id INT NOT NULL auto_increment , 

        userName VARCHAR(255) NOT NULL, 

        name VARCHAR(255) NOT NULL, 

        email VARCHAR(255) NOT NULL, 

        num INT NOT NULL, 

        createdAt DATETIME NOT NULL, 

        updatedAt DATETIME NOT NULL,

        PRIMARY KEY (id)
    );

    CREATE TABLE  createEvents (
        id INT NOT NULL auto_increment, 

        title VARCHAR(255) NOT NULL, 

        date DATETIME NOT NULL,

        time TIME NOT NULL, 

        address VARCHAR(255) NOT NULL, 

        city VARCHAR(255) NOT NULL, 

        state VARCHAR(255) NOT NULL, 

        zipcode INTEGER NOT NULL, 

        country VARCHAR(255) NOT NULL, 

        createdAt DATETIME NOT NULL, 

        updatedAt DATETIME NOT NULL, 
        
        PRIMARY KEY (id)
    
    );


    CREATE TABLE Users (
        id INTEGER NOT NULL auto_increment, 

        firstName VARCHAR(255) NOT NULL, 

        lastName VARCHAR(255) NOT NULL, 

        email VARCHAR(255) NOT NULL UNIQUE, 

        password VARCHAR(255) NOT NULL, 

        createdAt
        DATETIME NOT NULL, 

        updatedAt
        DATETIME NOT NULL,
        
        PRIMARY KEY (id)
    );