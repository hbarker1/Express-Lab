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
const port = 2000; //local host 3000


// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
//listening 3000 port, excute (call) function



// respond with "Hello Class!" at URI: /cartItems
//req = request
// res = respond
