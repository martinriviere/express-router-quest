const express = require("express");
const fakeComments = require("../data/comments");

const router = express.Router({ mergeParams: true });

// Get a list of comments
router.get("/", (req, res) => {
  res.json(
    fakeComments.filter(comment => comment.post_id == req.params.postId)
  );
});

module.exports = router;
