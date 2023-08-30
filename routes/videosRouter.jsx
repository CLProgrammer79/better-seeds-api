const express = require("express");
const router = express.Router();
const fs = require("fs");
const app = express();
const cors = require("cors");
const { v4: uuid } = require("uuid");

router.get("/", (req, res) => {
  console.log("reached Videos");
  res.status(400).send();
});
