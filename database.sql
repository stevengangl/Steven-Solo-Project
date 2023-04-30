
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

DROP TABLE "simulator";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "profile_created" BOOLEAN DEFAULT FALSE
);


CREATE TABLE "info" (
    "id" SERIAL PRIMARY KEY,
    "gender" VARCHAR (10),
    "height" INT,
    "weight" INT,
    "age" INT,
    "user_id" INT NOT NULL
);


CREATE TABLE "simulator" (
    "id" SERIAL PRIMARY KEY,
    "weight" INT,
    "todo" VARCHAR (10),
    "active" REAL,
    "inputEntered" BOOLEAN DEFAULT FALSE,
    "user_id" INT NOT NULL
    );

INSERT INTO "info" (gender, height, weight, age, user_id)
  VALUES (1, 2, 3, 4, 1);


SELECT gender, height, weight FROM "info" ORDER BY id;

UPDATE "user" SET profile_created = TRUE WHERE id = 1;

DELETE FROM "info" WHERE id=94;

UPDATE info SET "height" = 1 , "weight" = 2 WHERE id=104;

UPDATE info SET "gender" = 1 , "height" = 2 , "weight" = 3 , "age" = 4  WHERE id=1;

INSERT INTO "simulator" (weight, todo)
    VALUES (1, 'male')
;

UPDATE "simulator" SET "inputEntered" = TRUE WHERE id = 30;


INSERT INTO "simulator" (weight, todo, "inputEntered")
    VALUES (1, 2, true);
    
 SELECT * FROM "info"  WHERE user_id = 2 ORDER BY id;
 
 SELECT * FROM "simulator"  WHERE user_id = 2; 
 
 INSERT INTO "simulator" (weight, todo, "inputEntered", "user_id", active_level)
    VALUES (1, 2, true, 3, 4)