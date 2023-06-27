const {Model, DataTypes} =  require('sequelize');

const sequelize = require('../config/connection');


class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        //Added an event date to display the date of an event
        event_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        //Adds event location data type
        eventLocation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //Adds event location data type using coordinates
        locationCoordinates: {
            Type: DataType.STRING,
            allowNull: false,
        },

        isPrivate: {
            //Define a boolean attribute
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },

        updatedEvent: {
            //Stores the timestamp of when a record was last updated
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;
