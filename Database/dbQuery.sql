CREATE TABLE movies_list( 
    movieId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
    movieName TEXT NOT NULL, 
    moviePoster TEXT NOT NULL, 
    movieImg TEXT NOT NULL, 
    movieDes TEXT NOT NULL, 
    movieRate FLOAT NOT NULL, 
    movieVideo TEXT NOT NULL,
    movieGenres TEXT,
    movieTags TEXT,
    yearPublished INTEGER,
    duration TEXT,
    movieCast TEXT
);
DROP TABLE movies_list

-- Add a collumn
ALTER TABLE movies_list
ADD movieCast TEXT;

-- movieId, movieName, moviePoster, movieImg, movieDes, movieRate, movieVideo, movieGenres, movieTags
INSERT INTO movies_list (movieName, moviePoster, movieImg, movieDes, movieRate, movieVideo, movieGenres, movieTags, yearPublished, duration, movieCast)
VALUES 
('Oppenheimer',
 './images/Oppenheimer.png',
 './images/OppenheimerFaceShot',
 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Their work comes to fruition on July 16, 1945, as they witness the world`s first nuclear explosion, forever changing the course of history.',
 8.3,
 'https://www.netflix.com/au/title/81602830',
 'Biographical, Thriller, Epic, Drama, Heist, Adventure, History',
 'History, Biographical',
 2023,
 '3h 0m',
 'Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Josh Hartnett, Casey Affleck');

-- Update an existing record
UPDATE movies_list
SET moviePoster = './images/SchindersList.png', movieImg = 'https://th-thumbnailer.cdn-si-edu.com/HruoL_RVarsBoZTEaKd2rreDbRQ=/fit-in/1200x0/filters:focal(700x527:701x528)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ce/60/ce606b0a-bd71-43b3-84d6-08811e7828c7/schindlers.jpg'
WHERE movieId = 10; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/ThePrestige.png', movieImg = 'https://images.bauerhosting.com/legacy/empire-tmdb/films/1124/images/c5o7FN2vzI7xlU6IF1y64mgcH9E.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80'
WHERE movieId = 16; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/TheSocialNetwork.png', movieImg = 'https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg'
WHERE movieId = 17; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/Her.png', movieImg = 'https://compote.slate.com/images/8b96dfb6-32d9-41c9-9b73-0adfb317d6a4.jpeg?crop=1560%2C1040%2Cx0%2Cy0'
WHERE movieId = 19; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/Whiplash.png', movieImg = 'https://m.media-amazon.com/images/M/MV5BMjM4MzA0MDE0M15BMl5BanBnXkFtZTgwNTQ1NTE4MjE@._V1_.jpg'
WHERE movieId = 23; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/KnivesOut.png', movieImg = 'https://variety.com/wp-content/uploads/2019/07/knives-out.jpg'
WHERE movieId = 27; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/GoneGirl.png', movieImg = 'https://ychef.files.bbci.co.uk/624x351/p027pxn1.jpg'
WHERE movieId = 25; -- Which movie to update

UPDATE movies_list
SET moviePoster = './images/12AngryMen.webp', movieImg = 'https://m.media-amazon.com/images/M/MV5BNGRlZjVhNWMtOTUxYi00MTYxLWEzOWUtMTM1NDc3ZWRjMDZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg'
WHERE movieId = 9; -- Which movie to update

SELECT * FROM movies_list;