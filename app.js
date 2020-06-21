// Dependencies
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Config
const config = require('./config.json');
const port = config.port;

// Express
const expressStaticFolder = 'public';
const loadView = __dirname+'/'+expressStaticFolder;
app.use(express.static(expressStaticFolder))

app.get('/',function(req,res) {
    res.sendFile(path.join(loadView+'/views/index.html'));
});

app.use('/', router);
app.listen(port);
console.log(`Slider is now listening on: http://localhost:${port}`)