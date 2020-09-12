const express = require('express')
const app = express()
const router = require('./router')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(router)
app.engine('html', require('express-art-template'))

app.listen(3000, () => console.log(`Example app listening on port 3000!`))