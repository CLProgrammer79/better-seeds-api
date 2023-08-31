const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const videos = require("./routes/videosRouter");
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/video-library", videos);

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
