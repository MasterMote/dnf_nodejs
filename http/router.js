 const express = require('express')
 const router = express.Router()
 const { updateOnePost, addOneGet, updateOne, getOne, getAll, addOnePost, deleteOne } = require('../template/template')

 router
     .get('/', getAll)
     .get('/getone/', getOne)
     .get('/updateone/', updateOne)
     .post('/updateone/', updateOnePost)
     .get('/addone/', addOneGet)
     .post('/addonepost', addOnePost)
     .get('/delete', deleteOne)

 module.exports = router