const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4000;

var main_ctrl = require('./controllers/main_ctrl.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/name', main_ctrl.getName);
app.get('/location', main_ctrl.getLocation)
app.get('/occupations', main_ctrl.getOccupations)
app.get('/occupations/latest', main_ctrl.getLatestOccupations)
app.get('/hobbies', main_ctrl.getHobbies)
app.get('/hobbies/:type', main_ctrl.getHobbiesType)
app.get('/family', main_ctrl.getFamily)
app.get('/family/:gender', main_ctrl.getFamilyGender)
app.get('/restaurants', main_ctrl.getRestaurants)
app.get('/restaurants/:name', main_ctrl.getRestaurantName)
app.get('/skills', main_ctrl.getSkills)

app.put('/name/:id', main_ctrl.updateName)
app.put('/location/:id', main_ctrl.updateLocation)
app.post('/hobbies', main_ctrl.postHobbies)
app.post('/occupations/:id', main_ctrl.postOccupations)
app.post('/family', main_ctrl.postFamily)
app.post('/restaurants', main_ctrl.postRestaurants)
app.post('/skills', main_ctrl.postSkill)

app.listen(port, () => {
    console.log(`listening on ${port}`);
})