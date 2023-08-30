const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// const songs = [];

// module.exports = {
//     getAll
// }

const commentSchema = new Schema ({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

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
    comments: [commentSchema]
}, {
    timestamps: true
});

// function getAll() {
//     return songs;
// }
// Compile schema into a model and export it.
module.exports = mongoose.model('Song', songSchema);