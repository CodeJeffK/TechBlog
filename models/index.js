const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Comment-Post relationship
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// Comment-User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Post-Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
});

// Post-User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// User-Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// User-Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };