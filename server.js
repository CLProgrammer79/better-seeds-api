const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// Define paths to JSON data files
const videoDataPath = path.join(__dirname, "data", "video-details.json");
const liveStreamDataPath = path.join(
  __dirname,
  "data",
  "livestream-details.json"
);

// Middleware to handle CORS (if needed)
app.use(cors());

// Route handler to get video details
app.get("/api/videos", (req, res) => {
  fs.readFile(videoDataPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading video data:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    res.json(JSON.parse(data));
  });
});

// Route handler to get livestream details
app.get("/api/livestreams", (req, res) => {
  fs.readFile(liveStreamDataPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading livestream data:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    res.json(JSON.parse(data));
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
