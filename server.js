
// require the Express module
const express = require('express'); // express refers to module name, returning ...

// creates an instance of an Express server
const app = express(); // refers to variable express. function that returns an object

//convert params and body into usable JSON
app.use(express.json());
const cartItems = require('./cartItems')

// making a request to "/node" will send the string "Node is the best"
//attaching with slash grabbing "/cartItems"
//you can add a prefix like 
//example if it were "/grand-circus", cartItems);
//the http would be http://localhost:3000/grand-circus/cartItems
app.use("/", cartItems);


// define the port
// const port = 2000; //local host 3000
const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  password: "Angelofmusic1!",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});



app.get("/ShoppingCart", (req, res) => {
    pool.query("SELECT * FROM ShoppingCart")
    .then( (results) => {
        res.send(results.rows);
    });
});

app.post("/ShoppingCart", (req, res) => {
    let data = req.body;
    pool.query(
        "INSERT INTO ShoppingCart (product, quantity, price)" + 
        "values($1::varchar(20), $2::smallint, $3::real)", 
        [data.product, data.quantity, data.price]
    )
    .then( () => {
        res.send('SUCCESS!!!!!');
    }) //closing the promise
});




// run the server

//listening 3000 port, excute (call) function

app.listen(2000, () => {
    console.log("JSON Server is running on 2000");
});

// respond with "Hello Class!" at URI: /cartItems
//req = request
// res = respond
