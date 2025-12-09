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
    userName TEXT NOT NULL,
    userEmail TEXT NOT NULL,
    userPassword TEXT NOT NULL,
    userImg TEXT NOT NULL,
    userWatchedList TEXT NOT NULL
);

DROP TABLE movies_list

-- Add a collumn
ALTER TABLE movies_list
ADD movieCast TEXT;

-- movieId, movieName, moviePoster, movieImg, movieDes, movieRate, movieVideo, movieGenres, movieTags
INSERT INTO movies_list (movieName, moviePoster, movieImg, movieDes, movieRate, movieVideo, movieGenres, movieTags, yearPublished, duration, movieCast)
VALUES 
('Stranger Things', './images/StrangerThings.png', 'https://stories.uq.edu.au/contact-magazine/stranger-things/assets/jbFysrH0Ob/uq-contact-stranger-things-4096x2048.jpg', 'A group of kids uncover supernatural mysteries in the town of Hawkins.', 8.7, '', 'Sci-Fi, Mystery, Thriller', 'series, trendSeries', 2016, '4 Seasons', 'Millie Bobby Brown, Finn Wolfhard, David Harbour, Winona Ryder, Gaten Matarazzo'),
('The Boys', './images/TheBoys.png', 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/07/karl-urban-as-butcher-and-jensen-ackles-as-soldier-boy-in-herogasm-from-the-boys-2.jpg?w=1600&h=900&fit=crop', 'A rebellious group battles corrupt superheroes controlled by a powerful corporation.', 8.7, '', 'Action, Dark Comedy, Superhero', 'series, trendSeries', 2019, '4 Seasons', 'Karl Urban, Jack Quaid, Antony Starr, Erin Moriarty, Chace Crawford'),
('House of the Dragon', './images/HouseOfTheDragon.png', 'https://hips.hearstapps.com/hmg-prod/images/emma-d-arcy-1-691f53bb0a762.jpg?crop=1xw:0.7631535407015222xh;0,0.0543xh', 'Targaryen family battles for the Iron Throne centuries before the events of Game of Thrones.', 8.5, '', 'Fantasy, Drama, Action', 'series, trendSeries', 2022, '2 Seasons', 'Emma D’Arcy, Matt Smith, Olivia Cooke, Rhys Ifans, Paddy Considine'),
('The Last of Us', './images/TheLastOfUs.png', 'https://www.hollywoodreporter.com/wp-content/uploads/2023/03/pedro-pascal-bella-ramsey_0-H-2023.jpg?w=1296&h=730&crop=1', 'A smuggler escorts a girl immune to a deadly fungal infection across post-apocalyptic America.', 8.8, '', 'Drama, Horror, Adventure', 'series, trendSeries', 2023, '1 Season', 'Pedro Pascal, Bella Ramsey, Gabriel Luna, Anna Torv, Merle Dandridge'),
('Wednesday', './images/Wednesday.png', 'https://cdn.mos.cms.futurecdn.net/NCuLCkoQhw62ApoJxZk59R.jpg', 'Wednesday Addams joins Nevermore Academy and uncovers supernatural mysteries.', 8.1, '', 'Mystery, Comedy, Fantasy', 'series, trendSeries', 2022, '1 Season', 'Jenna Ortega, Emma Myers, Hunter Doohan, Catherine Zeta-Jones, Luis Guzmán'),
('Squid Game', './images/SquidGame.png', 'https://www.hollywoodreporter.com/wp-content/uploads/2024/12/Squidgame_Unit_204_N064080.jpg?w=1296&h=730&crop=1', 'Hundreds compete in deadly children’s games for a massive cash prize.', 8.0, '', 'Thriller, Drama, Survival', 'series, trendSeries', 2021, '2 Seasons', 'Lee Jung-jae, Park Hae-soo, Jung Ho-yeon, Wi Ha-joon, Heo Sung-tae'),
('Arcane', './images/Arcane.png', 'https://cdn.mos.cms.futurecdn.net/woMuuHPfBebVFAkQ7UCu7R.jpg', 'Two sisters fight on opposing sides of a conflict in the world of Piltover and Zaun.', 9.0, '', 'Fantasy, Action, Adventure', 'series, trendSeries', 2021, '1 Season', 'Hailee Steinfeld, Ella Purnell, Katie Leung, Kevin Alejandro, Harry Lloyd');

-- Update an existing record
UPDATE movies_list
SET duration = '5 Seasons', movieVideo = 'https://www.netflix.com/au/title/80057281?source=35&fromWatch=true'
WHERE movieId = 31; -- Which movie to update

SELECT * FROM movies_list;
SELECT * FROM users_list;