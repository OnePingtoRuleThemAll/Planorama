/**
This file defines the relationships between the User and Event models.
It exports the User and Event models along with their associations.
*/
const User = require('./User');

const Event = require('./Event');



// User has a one-to-many relationship with Event
User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    
});


// Event belongs to User
Event.belongsTo(User, {
    foreignKey: 'user_id',

});



module.exports = {User, Event};