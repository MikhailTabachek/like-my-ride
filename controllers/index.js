import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function index(req, res) {
res.render('cars/new', { title: 'Like My Ride!', user: req.user ? req.user : null })
}

export {
  index
}
