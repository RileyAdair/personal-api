const {user} = require('../user.js');
const {skills} = require('../skills.js');

const getName = (req, res, next) => {
    res.json({name:user.name});
}
const getLocation = (req, res, next) => {
    res.json({location:user.location});
}
const getOccupations = (req, res, next) => {
    if(req.query.order){
        if(req.query.order == "asc"){
            res.json({occupations:user.occupations.reverse()});
        }
        else if(req.query.order == "desc"){
            res.json({occupations:user.occupations.sort()})
        }
    }
    else {
        res.json({occupations:user.occupations});
    } 
}
const getLatestOccupations = (req, res, next) => {
    res.json({latestOccupation:user.occupations.slice(-1)});
}
const getHobbies = (req, res, next) => {
    res.json({hobbies:user.hobbies});
}
const getHobbiesType = (req, res, next) => {
    if(req.params.type){
        res.json(user.hobbies.filter(hobby => hobby.type == req.params.type));
    } else {
        res.json(user.hobbies);
    }
}
const getFamily = (req, res, next) => {
    if(req.query.relation){
        res.json(user.family.filter(family => family.relation == req.query.relation));
    } else {
        res.json({family:user.family});
    }   
}
const getFamilyGender = (req, res, next) => {
    if(req.params.gender){
        res.json(user.family.filter(family => family.gender == req.params.gender));
    } else {
        res.json(user.family);
    }
}
const getRestaurants = (req, res, next) => {
    if(req.query.rating){
      var filtered = user.restaurants.filter(function(restaurant){
          return restaurant.rating >= 2
      })
      return res.status(200).json(filtered)
    } else return res.status(200).json(user.restaurants)
}
const getRestaurantName = (req, res, next) => {
    if(req.params.name){
        res.json(user.restaurants.filter(restaurant => restaurant.name == req.params.name));
    } else {
        res.json({restaurants:user.restaurants});
    }
}
const updateName = (req, res, next) => {
    if(req.params.id){
        res.json({name:user.name = req.params.id});
    }
}
const updateLocation = (req, res, next) => {
    if(req.params.id){
        res.json({location:user.location = req.params.id});
    }
}
const postHobbies = (req, res, next) => {
    user.hobbies.push(req.body);
    res.json({hobbies:user.hobbies});
}
const postOccupations = (req, res, next) => {
    user.occupations.push(req.params.id);
    res.json({occupations:user.occupations});
}
const postFamily = (req, res, next) => {
    user.family.push(req.body);
    res.json({family:user.family});
}
const postRestaurants = (req, res, next) => {
    user.restaurants.push(req.body);
    res.json({restaurants:user.restaurants});
}
const getSkills = (req, res, next) => {
    if(req.query.experience){
        res.json(skills.filter(skill => skill.experience == req.query.experience));
    } else {
        res.json({skills});
    }   
}
const postSkill = (req, res, next) => {
    let id = skills.length + 1;
    req.body.id = id;
    skills.push(req.body);
    res.json(skills);
}

module.exports = {
    getName,
    getLocation,
    getOccupations,
    getLatestOccupations,
    getHobbies,
    getHobbiesType,
    getFamily,
    getFamilyGender,
    getRestaurants,
    getRestaurantName,
    updateName,
    updateLocation,
    postHobbies,
    postOccupations,
    postFamily,
    postRestaurants,
    getSkills,
    postSkill
}


// // functions in module.exports
// module.exports = {
//     getPeople(req, res, next){
//         const gender = req.body.gender;
//         if(gender){
//             const filterByGender = people.filter(cur=>
//             cur.gender.toLowerCase() == gender.toLowerCase());
//             res.status(200).json(filterByGender);
//             return;
//         }
//         return res.status(200).json(people);
//     },
//     // For put request
//     editPerson(req,res,next){
//         const {id} = req.parmas;
//         const {first_name} = req.body;
//         const person = people.find(cur => cur.id == id);
//         person.first_name = first_name;
//         return res.status(200).json(people);
//     }
// }