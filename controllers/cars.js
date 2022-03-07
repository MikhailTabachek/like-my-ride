import { Car } from '../models/car.js'
import { User } from '../models/user.js'


// function index(req, res) {
//   console.log('Index Function!!!!!!')
//   Car.find({}, function(error, cars){
//   res.render('cars/index', {
//     title: 'Like My Ride!', 
//     user: req.user ? req.user : null, 
//     error,
//     cars
//     })
//   })
// }

function newCar(req,res){
  console.log("newwww!!!!!!")
  res.render('cars/new', {
    title: "Add Car"
  })
}

function create(req,res){
  req.body.driver = req.user.profile._id
  req.body.forSale = !!req.body.forSale
  Car.create(req.body)
  .then(car => {
    res.redirect('/')
    console.log(req.body)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/cars/new')
  })
  // const car = new Car(req.body)
  // car.save(function(err){
  //   if(err) return res.redirect('/cars/new')
  //   res.redirect('/')
  // })
  // console.log(car)
}

function show(req, res){
  Car.findById(req.params.id)
  .populate('driver')
  .then(car => {
    res.render('cars/show', {
      title: "Car Details",
      car
    })
  // }), function (err, car){
  })
}

function deleteCar(req, res){
  Car.findByIdAndDelete(req.params.id, function (err, car) {
    res.redirect('/')
  })
}

export {
  // index,
  newCar as new,
  create,
  show,
  deleteCar as delete
}

