 const express = require('express')
 const template = require('../template/template')
 const router = express.Router()

 var bodyParser = require('body-parser')
 const { updateOnePost } = require('../template/template')

 router
     .get('/', template.getAll)
     .get('/getone/', template.getOne)
     .get('/updateone/', template.updateOne)
     .post('/updateone/', updateOnePost)

 module.exports = router