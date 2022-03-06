import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function index(req, res) {
res.render('index', { title: 'Like My Ride!', user: req.user ? req.user : null })
// Car.find({})
// .then(cars => {
//   cars
// })
}

export {
  index
}

