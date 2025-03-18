const { HandleChat } = require('@controllers/AiControllers.js')
const express = require('express')
const router = express.Router()


router.post('/chat', HandleChat)


module.exports = router