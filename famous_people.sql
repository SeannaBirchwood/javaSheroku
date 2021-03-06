-- Schema creation

-- First delete tables if they already exist

DROP TABLE IF EXISTS famous_people;

-- Create tables

CREATE TABLE famous_people (id SERIAL, --should this still have "Primary Key Interger"?
	first_name VARCHAR(50), 
	last_name VARCHAR(50), 
	birthdate DATE);

-- Seed Data

INSERT INTO "famous_people" VALUES ('Abraham', 'Lincoln', '1809-02-12');
INSERT INTO "famous_people" VALUES ('Mahatma', 'Gandhi', '1869-10-02');
INSERT INTO "famous_people" VALUES ('Paul', 'Rudd', '1969-04-06');

