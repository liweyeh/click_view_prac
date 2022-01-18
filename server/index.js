const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

// Define Routes
app.use("/api/playlist", require("./route/playlist.js"));
app.use("/api/video", require("./route/video.js"));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
