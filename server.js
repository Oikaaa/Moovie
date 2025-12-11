const express = require("express"); // express
const sqlite3 = require('sqlite3').verbose() // Import sqlite3
const fs = require('fs') // Import sqlite3
const path = require("path"); // This module provides utilities for working with he file and directiory paths.
const app = express(); //create an express application
const port = 3000

// __dirname is the name of current dirrectory that the file is in
// Static files are files that never change (remain the same for all users)
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// Define a route
app.get("/", function (req, res) { // get to handle get request
  res.sendFile("/Public/index.html");
});

// Creating account
app.post('/createAccount', (req, res)=>{// Post to handle post request
  const data = req.body
  const userJSON = JSON.parse(fs.readFileSync("./Public/Data/usersDatabase.json")) // read users list JSON file
  // Connect to SQL
  const db = new sqlite3.Database('./Database/database.db', sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message)
  })

  userJSON.push(data) // Push the data into the existed JSON

  let sql = `INSERT INTO users_list (userName, userEmail, userPassword,userImg,userWatchedList) VALUES (?,?,?,?,?)`
  db.run(sql, [data.username, data.email, data.password, data.avatar, data.watchList], (err)=>{
    if (err) return console.error(err.message)
  })
  fs.writeFileSync('./Public/Data/usersDatabase.json', JSON.stringify(userJSON, null, 2))

  res.sendStatus(200)
})

// Client request to access the database
app.get('/accessDatabase', (req, res)=>{
  const db = new sqlite3.Database('./Database/database.db', sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message)
  })
  //Print the database from SQL
  db.all(`SELECT * FROM users_list;`, [], (err, users_list)=>{
    if (err) return console.error(err.message)
      res.send(users_list)
  })
})

// Use node server.js to start server
// Start the server
app.listen(port, () =>
  console.log(
    `Server is running on Port ${port}, visit http://localhost:${port}/ or http://127.0.0.1:${port} to access your website`
  )
);