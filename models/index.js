// Import the required models
const Topic = require('./Topic');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');
const Apod = require('./APOD');

// Define the associations between the models

// Each Topic has many Posts
Topic.hasMany(Post, { foreignKey: 'topic_id' });
User.hasMany(Post, { foreignKey: 'poster_id' });
Apod.hasMany(Post, { foreignKey: 'apod_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });
User.hasMany(Like, { foreignKey: 'user_id' });

Post.belongsTo(User, { foreignKey: 'poster_id' });
Post.belongsTo(Topic, { foreignKey: 'topic_id' });
Post.belongsTo(Apod, { foreignKey: 'apod_id' });
Post.hasMany(Comment, { foreignKey: 'post_id' });
Post.hasMany(Like, { foreignKey: 'post_id'});

Comment.belongsTo(User, { foreignKey: 'comment_poster_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });
Comment.hasMany(Like, { foreignKey: 'comment_id' });

Like.belongsTo(User, { foreignKey: 'user_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });

// Apod.hasMany(Post, { foreignKey: 'apod_id' });
// Export the models
module.exports = {
  Topic,
  User,
  Post,
  Comment,
  Like,
  Apod
};
