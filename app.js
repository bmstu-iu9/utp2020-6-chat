'use strict'

const express = require('express');

const path = require('path');

let app = express();

app.use(express.static('public'));



app.get('/', (req, res) =>{
    let root = path.join(__dirname, 'public', 'html','index.html');
    res.sendFile(root);
}).listen(3000);