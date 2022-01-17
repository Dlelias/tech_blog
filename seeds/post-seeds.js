const { Post } = require('../models');

const postData = [{
    title: 'Lets talk Crypto',
    content: 'Is Crypto the future currency',
    user_id: 1
},
{
    title: 'What have you coded?',
    content: 'Currenly working on projects for my profolio',
    user_id: 2
},
{
    title: 'Personal journey to the coding world',
    content: 'coding is hard. You need to dedicate a lot of time and be very patient with yourself',
    user_id: 3
},
{
    title: 'What have you learned in coding?',
    content: 'Once your code is working its one of the most rewarding feelings',
    user_id: 4
},
];

const seedPosts =  () => Post.bulkCreate(postData);

module.exports = seedPosts
