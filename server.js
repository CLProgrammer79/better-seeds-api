const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const videosRouter = require("./routes/videosRouter");
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static("better-seeds-api/public"));

app.use("/video-library", videosRouter);

// Start the server
const PORT = process.env.PORT || 5050;
app.use((req, res) => {
  console.log("Server Running ");
  res
    .status(404)
    .sendFile(path.join(__dirname, "public", "errors", "404.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
