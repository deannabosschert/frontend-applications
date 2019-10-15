const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
.set('view engine', 'ejs')
.use(express.static('public'))
.get('/', overview)
http.listen(port, function(){
  console.log(`Example app listening on port ${port}!`)})


function overview(req, res) {
    res.render('index')
}
