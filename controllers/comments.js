const Song = require('../models/song');

module.exports = {
    create,
    delete: deleteComment,
    edit,
    update
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

async function edit(req, res) {
    try {
        const song = await Song.findOne({ 'comments._id': req.params.id });
        if (!song) {
            return res.status(404).send('Comment not found');
        }

        const comment = song.comments.find(c => c._id.equals(req.params.id));
        if (!comment) {
            return res.status(404).send('Comment not found');
        }

        res.render('comments/edit', { title: 'Edit Comment', comment });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching comment for editing');
    }
}

async function update(req, res) {
    try {
        const song = await Song.findOne({ 'comments._id': req.params.id });
        if (!song) {
            return res.status(404).send('Comment not found');
        }

        const comment = song.comments.find(c => c._id.equals(req.params.id));
        if (!comment) {
            return res.status(404).send('Comment not found');
        }

        comment.comment = req.body.comment;
        await song.save();

        res.redirect(`/songs/${song._id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating comment');
    }
}
