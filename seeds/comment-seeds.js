const { Comment } = require('../models');

const commentData = [
  {
    comment_poster_id: 1, // Corresponds to the user ID
    post_id: 1,
    likes: 0,
    content: 'This is a comment by user 1.',
  },
  {
    comment_poster_id: 2, // Corresponds to the user ID
    post_id: 2,
    likes: 0,
    content: 'This is a comment by user 2.',
  },
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;