const express = require('express')
const controller = require('../controllers/wiki_data')

const router = express.Router()

router.post('/', controller.getWikiData)
router.get('/questions', controller.getQuestions)

module.exports = router