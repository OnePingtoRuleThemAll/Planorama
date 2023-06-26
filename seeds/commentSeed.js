const { Comment } = require('../models');

const commentData = [
    {
        comment_body: 'Great post, I thoroughly enjoyed reading it!',
        user_id: 5,
        post_id: 1 

    },
    {
        comment_body: 'Thanks for sharing such valuable insights.',
        user_id: 4,
        post_id: 1 

    },
    {
        comment_body: 'I couldnt agree more with your perspective.',
        user_id: 3,
        post_id: 3 

    },
    {
        comment_body: 'This post has inspired me to take action',
        user_id: 2,
        post_id: 4 

    },
    {
        comment_body: 'Wow, this is mind-blowing! Keep up the fantastic work.',
        user_id: 6,
        post_id: 4 

    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;