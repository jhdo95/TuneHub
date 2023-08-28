const express = require('express');
const router = express.Router();

const songsCtrl = require('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /songs
router.get('/', songsCtrl.index);
// GET /songs/new
router.get('/new', ensureLoggedIn , songsCtrl.new);
// POST /movies
router.post('/', ensureLoggedIn, songsCtrl.create);

module.exports = router;
