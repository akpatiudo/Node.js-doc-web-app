//server.js
const express = require ('express');

// create ann app
const app = express ();

app.get('/', (reg, res)=>{
    res.send("Welcome to Peace Bubbles app!");
});

// listen Port
app.listen(3000, function () {
    console.log("app listening on port 3000");
});