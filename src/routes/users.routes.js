const express = require('express');
const router = express.Router();

const index = require('../controllers/users.controller')
const details = require('../controllers/userDetails.controller')
const repos = require('../controllers/userRepos.controller')


router.get('/', index)
router.get('/:username/details', details)
router.get('/:username/repos', repos)

module.exports = router