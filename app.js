const express = require('express');
const app = express();
const port = 8080;
const ip = '0.0.0.0';
app.set('view engine', 'ejs');

// Array of object campgrounds, each with name and image
let campgrounds = [
    {name: 'Salmon Creek', image: 'https://bit.ly/320NVjo'},
    {name: 'Granite Hill', image: 'https://bit.ly/2J36iwN'},
    {name: 'Mountain Goat\'s Rest', image: 'https://bit.ly/2RQfFmc'}
];

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(port, ip, () => {
    console.log(`Starting app on ${port}`);
});