const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts from the database

router.get(`/`, async(req, res) => {
  try{
  const post = await Post.find();
  res.json(post);
  }catch(err){
    res.json({message: err});
  }
});

// Submit The  post to the Database

router.post(`/`, async(req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
   try{
    const savedPost = await post.save();
    res.json(savedPost);
   }
   catch(err) {
    res.json({message: err});
   }
});

router.get('/:postId' , async (req,res) => {
  console.log(req.params.postId);
  try{
   const post = await Post.findById(req.params.postId);
   res.json(post);
  }
  catch(err) {
    res.json({message: err});
  }
})

module.exports = router;
