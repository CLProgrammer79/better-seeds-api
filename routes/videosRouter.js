const express = require("express");
const router = express.Router();
const fs = require("fs");
// const app = express();
// const cors = require("cors");
// const { v4: uuid } = require("uuid");
const serverUrl = "http://localhost:5050/";

router.get("/", (req, res) => {
  const videosJson = fs.readFileSync("./data/video-details.json");
  const videosObject = JSON.parse(videosJson);

  // Extract selected fields for videos
  const videosWithSelectedFields = videosObject.map((video) => ({
    id: video.id,
    title: video.title,
    description: video.description,
    image: serverUrl + "images/" + video.image,
    videoUrl: video.videoUrl,
    theme: video.theme,
    comments: video.comments,
  }));

  res.status(200).json(videosWithSelectedFields);
});

router.get("/:videosId", (req, res) => {
  const videosJSON = fs.readFileSync("./data/video-details.json");
  const videosObject = JSON.parse(videosJSON);
  const videoId = req.params.videosId;

  const video = videosObject.find((video) => video.id === videoId);

  // res.send(video);
  if (video) {
    res.send(video);
  } else {
    res.status(400).send();
  }
});

module.exports = router;
