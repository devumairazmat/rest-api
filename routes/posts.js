const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get(`/`, (req, res) => {
  res.send("Welcome to The Posts Dev Umair Audiance");
});

router.post(`/`, async(req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
    const savedPost = await post.save();
    res.json(savedPost);
});

module.exports = router;
