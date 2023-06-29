const { Post } = require('../models');

const postData = [
    {
        title: 'First Post',
        body: 'This is the first sentence of the body. Here comes the second sentence. Finally, the third sentence concludes the body.',
        user_id: '3',
        //added location of the Austin convention center
        location: '500 E Cesar Chavez St, Austin, TX 78701'
    },
    {
        title: 'Amazing Journey',
        body: 'Today, I embarked on an amazing journey. The sights and sounds were awe-inspiring. I couldnt have asked for a better adventure.',
        user_id: '2',
        //Added location to a book store that users might use to have book clubs
        location: '5501 N Lamar Blvd Ste A105, Austin, TX 78751'
    },
    {
        title: 'Exploring Nature',
        body: 'Spent the day exploring the beautiful natural landscapes. The lush green forests were a sight to behold. The calming sound of the nearby waterfall made it a truly memorable experience.',
        user_id: '4',
        //Dallas convention center
        location: '650 S Griffin St, Dallas, TX 75202'
    },
    {
        title: 'New Recipe',
        body: 'Just discovered a delicious recipe. The combination of flavors is simply delightful. I highly recommend giving it a try!',
        user_id: '5',
        //Lady Bird Lake address
        location: 'Lady Bird Lake, Lady Bird Lake, Austin, TX 78701'
    },
    {
        title: 'Inspiring Quotes',
        body: 'Here are some inspiring quotes to brighten your day. "Believe you can and you\'re halfway there." - Theodore Roosevelt. "The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt. "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill.',
        user_id: '1',
        //The Oasis on Lake Travis
        location: '6550 Comanche Trl, Austin, TX 78732'
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;