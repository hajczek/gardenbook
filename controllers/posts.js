// @desc Get all posts
// @route GET/posts
// @access Public
exports.getPosts = (req, res, next) => {
  res.send('GET Posts');
};

// @desc Add post
// @route POST/post
// @access Public
exports.addPost = (req, res, next) => {
  res.send('POST Post');
};

// @desc Edit post
// @route PUT/posts/:id
// @access Public
exports.editPost = (req, res, next) => {
  res.send('PUT Post');
};

// @desc Delete material
// @route DELETE/alerts/:id
// @access Public
exports.deletePost = (req, res, next) => {
  res.send('DELETE Post');
};
