const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

const routes =  require('./routes/index.routes');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');
    next();
});

app.use('/api',routes)
 
module.exports = app;