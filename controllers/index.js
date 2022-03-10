import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function index(req, res) {
  Car.find({})
  .populate('driver')
  .then(car =>
    res.render('index', {
      car,
      title: 'Like My Ride!', 
      user: req.user ? req.user : null
    })
  ) 
    }

export {
  index
}
