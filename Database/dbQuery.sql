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
CREATE TABLE users_list(
    userId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL,
    userEmail TEXT NOT NULL,
    userPassword TEXT NOT NULL,
    userImg TEXT NOT NULL,
    userWatchedList TEXT NOT NULL
);

DROP TABLE users_list

-- Add a collumn
ALTER TABLE movies_list
ADD movieCast TEXT;

-- movieId, movieName, moviePoster, movieImg, movieDes, movieRate, movieVideo, movieGenres, movieTags
INSERT INTO movies_list (movieName, moviePoster, movieImg, movieDes, movieRate, movieVideo, movieGenres, movieTags, yearPublished, duration, movieCast)
VALUES 
('Stranger Things', './images/StrangerThings.png', 'https://stories.uq.edu.au/contact-magazine/stranger-things/assets/jbFysrH0Ob/uq-contact-stranger-things-4096x2048.jpg', 'A group of kids uncover supernatural mysteries in the town of Hawkins.', 8.7, '', 'Sci-Fi, Mystery, Thriller', 'series, trendSeries', 2016, '4 Seasons', 'Millie Bobby Brown, Finn Wolfhard, David Harbour, Winona Ryder, Gaten Matarazzo');

-- Update an existing record
UPDATE movies_list
SET duration = '5 Seasons', movieVideo = 'https://www.netflix.com/au/title/80057281?source=35&fromWatch=true'
WHERE movieId = 31; -- Which movie to update

INSERT INTO users_list (userName, userEmail, userPassword,userImg,userWatchedList)
VALUES
('admin', 'admin@yahoo.com', 'IloveWWE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-avatar&psig=AOvVaw1-sq-aYpIx70zPLLWacC1m&ust=1765535159996000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCBmJKptZEDFQAAAAAdAAAAABAE', '');


SELECT * FROM movies_list;
SELECT * FROM users_list;