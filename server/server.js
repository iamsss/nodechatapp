// BuitIn Variable
const path = require('path');

// Module VAriable Initilization
const express = require('express');


// Loading Addition Site File


// declaring Global variable
var port = process.env.PORT || 3000; // Setup For Heroku Configurations Port
var app = express(); 
const publicPath = path.join(__dirname, '../public');



// Middleware
app.use(express.static(publicPath));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));