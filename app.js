'use strict';

const handler = require('./handler');

const express = require('express');
const ejs = require('ejs');

const app = express();

app.engine('.html', ejs.__express);
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/upload', handler)

app.listen(8989, () => {
	console.log('server started...');
})