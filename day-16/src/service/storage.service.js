var ImageKit = require("imagekit");
var imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY_IMAGEKIT,
  privateKey: process.env.PRIVATE_KEY_IMAGEKIT,
  urlEndpoint: process.env.ENDPOINT_KEY_IMAGEKIT,
});

async function imageupload(file, filename) {
  const response = await imagekit.upload({
    file: file,
    fileName: filename,
  });
  return response;
}

module.exports = imageupload;
