const { Post } = require('../models');

const postData = [
    {
        title: 'Inspiring Quotes',
        body: 'Here are some inspiring quotes to brighten your day. "Believe you can and you\'re halfway there." - Theodore Roosevelt. "The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt. "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill.',
        event_date: new Date(),
        eventLocation: '6550 Comanche Trl, Austin, TX 78732',
        locationCoordinates: '30.393926, -97.878633',
        isPrivate: false,
        user_id: 1
    },
    {
        title: 'Amazing Journey',
        body: 'Today, I embarked on an amazing journey. The sights and sounds were awe-inspiring. I couldnt have asked for a better adventure.',
        event_date: new Date(),
        eventLocation: '5501 N Lamar Blvd Ste A105, Austin, TX 78751',
        locationCoordinates: '30.313019, -97.739430',
        isPrivate: false,
        user_id: 2
    },
    {
        title: 'First Post',
        body: 'This is the first sentence of the body. Here comes the second sentence. Finally, the third sentence concludes the body.',
        event_date: new Date(),
        eventLocation: '500 E Cesar Chavez St, Austin, TX 78701',
        locationCoordinates: '30.263293, -97.739761',
        isPrivate: false,
        user_id: 3
    },
    {
        title: 'Exploring Nature',
        body: 'Spent the day exploring the beautiful natural landscapes. The lush green forests were a sight to behold. The calming sound of the nearby waterfall made it a truly memorable experience.',
        event_date: new Date(),
        eventLocation: '650 S Griffin St, Dallas, TX 75202',
        locationCoordinates: '32.774899, -96.800184',
        isPrivate: false,
        user_id: 4
    },
    {
        title: 'New Recipe',
        body: 'Just discovered a delicious recipe. The combination of flavors is simply delightful. I highly recommend giving it a try!',
        event_date: new Date(),
        eventLocation: 'Lady Bird Lake, Lady Bird Lake, Austin, TX 78701',
        locationCoordinates: '30.265868, -97.763803',
        isPrivate: false,
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;