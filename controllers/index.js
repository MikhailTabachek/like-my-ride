import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function index(req, res) {
  Car.find({}, function(error, cars){
    res.render('index', {
      error,
      cars,
      title: 'Like My Ride!', 
      user: req.user ? req.user : null 
    })
  })
}

// function index(req, res) {
//   Car.find({}), function(error, cars){
//     res.render('index', {
//       error,
//       cars,
//       title: 'Like My Ride!', 
//       user: req.user ? req.user : null 
//     })
//   })
// }

export {
  index
}
