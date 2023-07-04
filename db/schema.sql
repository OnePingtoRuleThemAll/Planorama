DROP DATABASE IF EXISTS planorama_db;

CREATE DATABASE planorama_db;

USE planorama_db;

CREATE TABLE newEvent (
    id INT NOT NULL,
    event_title VARCHAR(40) NOT NULL,
    event_body VARCHAR(150) TEXT NOT NULL,
    event_location VARCHAR(30) TEXT NOT NULL,
    event_coordinates VARCHAR(30) TEXT NOT NULL,
    event_privacy VARCHAR(10) TEXT NOT NULL,
    event_date VARCHAR(20) TEXT NOT NULL,
    event_createdate VARCHAR(20) TEXT NOT NULL
  )
