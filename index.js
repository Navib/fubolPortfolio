const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static('./app/public/'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./app/public/', 'index.html'));
});

const PORT = process.env.PORT || 5001;
