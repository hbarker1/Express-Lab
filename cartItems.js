//route

//input express module
const express = require('express'); // express refers to module name, returning ...

//add router for students
// this lets us to plit our API routes
// into seperate modules
const cartItems = express.Router();
const cartData = require("./cartData");

cartItems.get("/", (req, res) => {
    res.send(cartData);
    });

    // accept POST request at URI: /cartItems
    cartItems.post("/cartItems", (req, res) => {
        console.log(req.body); // <-- this is the data that has been extracted from the reque
        res.send("Adding an item..");
        });


    cartItems.put("/cartItems/:id", (req, res) => {
        console.log(req.params.id); // <-- params for the URL
        res.send("Got for a specific id: " + req.params.id);
        });


    // accept DELETE request at URI: /cartItems
cartItems.delete("/cartItems/:id", (req, res) => {
    console.log(req.params.id); // <-- params for the URL
    res.send("Deleting an item..");
});

module.exports = cartItems;

//command d -> to select all words that are the same to change