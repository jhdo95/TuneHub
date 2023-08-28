const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const songs= [];

module.exports = {
    getAll
}

const songSchema = new Schema ({
    title: {
        type: String,

    },
    artist: {
        type: String,
    },
    releaseYear: {
        type: Number,
    },
    songDuration: {
        type: Number,
        min: 0,
    },
});

function getAll() {
    return songs;
}
// Compile schema into a model and export it.
module.exports = mongoose.model('Song', songSchema);