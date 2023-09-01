const express = require("express");
const router = express.Router();
const fs = require("fs");
// const app = express();
// const cors = require("cors");
// const { v4: uuid } = require("uuid");
const serverUrl = "http://localhost:5050/";

router.get("/", (req, res) => {
  console.log("reached Videos");
  console.log("Requested URL:", req.url);
  const videosJson = fs.readFileSync("./data/video-details.json");
  const videosObject = JSON.parse(videosJson);

  // Extract themes, videos, and comments

  // Extract selected fields for themes
  // const themesWithSelectedFields = themes.map((theme) => ({
  //   id: theme.id,
  //   title: theme.title,
  //   description: theme.description,
  // }));

  // console.log("Themes with selected fields:", themesWithSelectedFields);

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

  console.log("Videos with selected fields:", videosWithSelectedFields);

  // Extract selected fields for comments
  // const commentsWithSelectedFields = videosObject.comments.map((comment) => ({
  //   id: comment.id,
  //   name: comment.name,
  //   comment: comment.comment,
  //   likes: comment.likes,
  //   timestamp: comment.timestamp,
  // }));

  // console.log("Comments with selected fields:", commentsWithSelectedFields);

  const extractedData = {
    // themes: themesWithSelectedFields,
    videos: videosWithSelectedFields,
    // comments: commentsWithSelectedFields,
  };

  console.log("Extracted Data:", extractedData);
  res.status(200).json(videosWithSelectedFields);
});

module.exports = router;
