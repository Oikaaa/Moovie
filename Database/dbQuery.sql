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
('La La Land',
 './images/LaLaLand.jpg',
 'https://i0.wp.com/swarthmorephoenix.com/wp-content/uploads/2023/03/Screen_Shot_2023-03-22_at_10.25.09_PM.png?fit=1382%2C924&ssl=1',
 'A jazz pianist and an aspiring actress pursue their dreams and romance in Los Angeles.',
 8.0,
 'https://www.netflix.com/title/80095365',
 'Drama, Romance, Music, Comedy, Classic, Melodrama',
 'Romantic',
 2016,
 '2h 8m',
 'Emma Stone, Ryan Gosling, J.K. Simmons, Rosemarie DeWitt, Finn Wittrock');

-- Update an existing record
UPDATE movies_list
SET moviePoster = './images/TheIngloriousBasterds.png', movieImg = 'https://www.brightwalldarkroom.com/wp-content/uploads/2020/10/christoph-waltz-inglourious-basterds.jpg'
WHERE movieId = 26; -- Which movie to update

SELECT * FROM movies_list;