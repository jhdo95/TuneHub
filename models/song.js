const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



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
        required: true
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


module.exports = mongoose.model('Song', songSchema);