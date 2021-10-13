const { getConnection } = require("typeorm");

const Post = require("../entity/Post");

module.exports = async function PostGetAllAction() {
    // get a post repository to perform operations with post
    const postRepository = getConnection().getRepository("Post");

    // load a post by a given post id
    const posts = await postRepository.find();

    return posts;
};
