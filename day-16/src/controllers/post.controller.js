const { message } = require("prompt");
const postModel = require("../model/post.model");
const generateCaption = require("../service/ai.service");
const imageupload = require("../service/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createPostController(req, res) {
  const file = req.file;
  const base64 = new Buffer.from(file.buffer).toString("base64");
  const caption = await generateCaption(base64);
  const image = await imageupload(file.buffer, `${uuidv4()}`);

  res.json({
    image,
    caption,
  });
}
module.exports = { createPostController };
