let express = require('express')
let fs = require('fs')
let http = require('http')

let app = express()
const port = 8000
app.listen(port)

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))

app.get('/', function(request, response){
	response.render('home');
})
