const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

module.exports = mongoose.model('Post', PostSchema);
