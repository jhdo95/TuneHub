const Song = require('../models/song');

module.exports = {
    new: newSong,
    create,
    index
}

function newSong(req, res) {
    res.render('songs/new', { title: 'Add Song', errorMsg: ''});
}

async function create(req, res) {
    try {
       const song = await Song.create(req.body);
        res.redirect('/songs');
    } catch (err) {
        console.log(err);
        res.redirect('songs/new', { errorMsg: err.message});
    }
}

async function index(req, res) {
    const songs = await Song.find({});
    res.render('songs/index',{ title: 'All Songs', songs});
}