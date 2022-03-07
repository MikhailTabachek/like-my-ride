import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function index(req, res) {
  console.log('Index Function')
  // Car.find({}, function(error, cars){
  // res.render('index', {
  //   title: 'Like My Ride!', 
  //   user: req.user ? req.user : null, 
  //   error,
  //   cars
  //   })
  // })
}

function newCar(req,res){
  res.render('cars/new', {
    title: "Add Car"
  })
}

function create(req,res){
  console.log('Testing buttonnN!!!!')
  req.body.owner = req.user.profile._id
  req.body.forSale = !!req.body.forSale
  const car = new Car(req.body)
  car.save(function(err){
    if(err) return res.redirect('/cars/new')
    res.redirect('/')
  })
}

export {
  index,
  newCar as new,
  create
}

