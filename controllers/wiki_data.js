const wtf = require('wtf_wikipedia')
const Wiki = require('../models/Wiki')
const errorHandler = require('../utils/errorHandler')
const moment = require('moment')

module.exports.getWikiData = async (req, res) => {

    let { search } = req.body
    search = search.toLowerCase()

    const wikiData = new Wiki({
        name: search
    })

    // const dataFind = await Wiki.find({name: search})

    var doc = await wtf.fetch(search, 'ru');
    try{
        // if(dataFind.length === 0){
            await wikiData.save()
        // }
        res.status(200).json(doc)
    }catch(e){
        errorHandler(res, e)
    }
    
    // console.log(doc.json())
}

module.exports.getQuestions = async(req, res) => {

    const allQuestions = await Wiki.find()
    const dateQuestions = []
    allQuestions.forEach(item => {
        date = moment(item.date).format('DD.MM.YYYY HH:mm:ss')
        dateAnalytics = moment(item.date).format('DD.MM.YYYY')

        dateQuestions.push({
            date,
            dateAnalytics,
            name: item.name
        })

    })

    // // const obj = Object.assign({}, allQuestions, dateQuestions);

    // console.log(dateQuestions)

    try{
        res.status(200).json(dateQuestions)
    }catch(e){
        errorHandler(res, e)
    }
} 