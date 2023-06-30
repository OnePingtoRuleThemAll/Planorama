const User = require('./User');

const Event = require('./Event');

//TODO: Datbase relationships need to be created


User.hasMany(Event, {
    foreignKey: 'user_id',
    
});
/*
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment,{
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

*/


Event.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = {User, Event};