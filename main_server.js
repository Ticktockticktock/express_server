'use strict';

const express = require('express');

// Constants
const PORT = 8085;

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Boobs');
});

app.listen(PORT);