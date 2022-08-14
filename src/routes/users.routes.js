const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller')


router.use('/users', users)

module.exports = router