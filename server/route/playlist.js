const express = require("express");
const playlistData = require("../data/playlists");
const router = express.Router();

// @route GET api/playlist
// @desc  Fetch all playlist
router.get("/", async (req, res) => {
    const allPlaylist = playlistData.playlist;
    res.json(allPlaylist);
});

module.exports = router;
