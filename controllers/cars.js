import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function index(req, res) {
res.render('index', { title: 'Like My Ride!', user: req.user ? req.user : null })
// Car.find({})
// .then(cars => {
//   cars
// })
}

function newCar(req,res){
  res.render('cars/new', {
    title: "Add Car"
  })
}

function create(req,res){
  req.body.owner = req.user.profile._id
  req.body.forSale = !!req.body.forSale
  Car.create(req.body)
  .then(car => {
    res.redirect('/')
    // res.redirect(`/cars/${car._id}`)
  })
  .catch(err =>{
    res.redirect('/cars/new')
  })
  // car.save(function(err){
  //   if(err) return res.redirect('/cars/new')
    
  // })
}

export {
  index,
  newCar as new,
  create
}

