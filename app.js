const express = require('express');
const app = express();
const port = 8080;
const ip = '0.0.0.0';
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
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

// Show campgrounds
app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

// Make new campground and redirect to /campgrounds
app.post('/campgrounds', (req, res) => {
    // Get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    // Redirect back to campgrounds page
    res.redirect('./campgrounds');
});

// Show form for adding new campground with post request to /campgrounds
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(port, ip, () => {
    console.log(`Starting app on ${port}`);
});