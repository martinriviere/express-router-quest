const express = require("express");
const fakeTags = require("../data/tags");
const fakePosts = require("../data/posts");

const router = express.Router();

router.get("/", (req, res) => res.json(fakeTags));

router.get("/:tagId/posts", (req, res) => {
  const tagId = parseInt(req.params.tagId);
  if (!fakeTags.find(tag => tag.id === tagId))
    res.status(404).send("Tag not found");
  else {
    const filteredPosts = fakePosts.filter(post =>
      post.tags_ids.includes(tagId)
    );
    if (filteredPosts.length === 0)
      res.status(404).send("No post found for this tag");
    else res.json(filteredPosts);
  }
});

module.exports = router;
