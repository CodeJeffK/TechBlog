const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I think I partially know what I'm doing :)",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "TEXT is a useful data type for entering long form text data.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I thought cookies were baked in the oven with love?",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Now I want some cookies.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Did you know about salting?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Nope! Adding random data is a great way to force a unique hashed output, even when your users all pick 'password' for their password LMAO",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;