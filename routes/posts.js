const express = require('express');
const router = express.Router();

const {
  getPosts,
  addPost,
  editPost,
  deletePost,
} = require('../controllers/posts');

// router.get("/", (req, res) => res.send("Alerts"));
router.route('/').get(getPosts).post(addPost);
router.route('/:id').put(editPost).delete(deletePost);

module.exports = router;
