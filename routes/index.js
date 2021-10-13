var express = require("express");
var router = express.Router();
const PostGetAllAction = require("../service/postService");

/* GET home page. */
router.get("/posts", async function (req, res, next) {
    const data = await PostGetAllAction();
    res.json(data);
});

module.exports = router;
