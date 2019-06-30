const express = require('express');
const app = express();
const port = 8080;
const ip = '0.0.0.0';
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.listen(port, ip, () => {
    console.log(`Starting app on ${port}`);
});