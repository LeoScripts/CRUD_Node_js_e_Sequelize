const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('../src/routes');
const { urlencoded } = require('body-parser');


const app = express();

app.use(methodOverride("_method"));
app.use(express.json())
app.use(urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.set('views', path.resolve('src','views'));
app.set(express.static(path.resolve('src','public')))

app.set(logger('dev'));

//app.use(express.static('src','public'));
app.use(routes);


app.listen(3000, () => console.log('server in:','http:localhost:3000'));