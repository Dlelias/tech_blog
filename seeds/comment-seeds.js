const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Bitcoin will exceed 100,000 in 2022",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      'coded 299 lines of code with no errors . They were all console.log ("HELLO WORLD"',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "git is the hardest thing about group projects",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "the code struggle is real",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;