const Song = require('../models/song');

module.exports = {
    create,
    delete: deleteComment
};

async function deleteComment(req, res) {
    const song = await Song.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id});
    if (!song) return res.redirect('/songs');
    song.comments.remove(req.params.id);
    await song.save();
    res.redirect(`/songs/${song._id}`);
}
async function create(req, res) {
    const song = await Song.findById(req.params.id);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

    song.comments.push(req.body);
    try {
        await song.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/songs/${song._id}`);
}