const express = require("express");
const video = require("../data/videos.json");
const router = express.Router();

// @route GET api/playlist
// @desc  Fetch all playlist
router.get("/:id", async (req, res) => {
    const vidId = req.params.id;
    const allVids = video.videos;
    const target = allVids.find((item) => item.id == vidId);
    res.json(target);
});

module.exports = router;
