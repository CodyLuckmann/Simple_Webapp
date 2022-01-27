const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there dcc class');
});

app.listen(8081, () => {
    console.log('Listenin on port 8081');
});