require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');

const port = process.env.PORt || 5000;

app.use(express.static("public"));
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
    console.log("Server started");
})