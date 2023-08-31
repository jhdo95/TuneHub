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
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    songDuration: {
        type: String,
        min: 0,
        match: /^\d{1,2}:\d{2}$/,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Song', songSchema);