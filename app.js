require ('./models/database')
const express = require('express') 

const path = require('path')
const ExpresssBars = require('express-handlebars')
const bodyparser =require('body-parser')
const ProductsRoute= require('./routes/route')


var app = express()
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json())
app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', ExpresssBars({extname:'hbs', defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine' ,'hbs')

app.listen(9000,()=>{
    console.log('Expresss server startd at :9000')
})
app.use('/product', ProductsRoute)  