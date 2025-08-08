const express  = require('express')
const multer = require('multer')
const {createPostController} = require('../controllers/post.controller')
const {authMiddleware} = require('../middleware/post.middleware')
const router = express.Router()

const upload = multer({storage:multer.memoryStorage()})

router.post("/",  authMiddleware ,upload.single("file"), createPostController  )







module.exports = router