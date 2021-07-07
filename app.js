require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;

app.use(express.static("public"));
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cookieParser());

const Contact = require('./modules/contact');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database started");
})


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})


// app.get("/all", (req, res) => {
//     Contact.find({}, (err, done) => {
//         array a = done;

//     })
// })

app.get("/contactus", (req, res) => {
    res.render("contact");
})

app.post("/postcontact", (req, res) => {
    console.log(req.body);
    const con = new Contact(req.body);
    con.save((err, done) => {
        if (err) {
            res.redirect("/")
        } else {
            res.redirect("/done");
        }
    })
})
app.get("/done", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/done.html'));
})

app.listen(port, () => {
    console.log("Server started");
})