import { Car } from '../models/car.js'
import { User } from '../models/user.js'


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
}

function show(req, res){
  Car.findById(req.params.id)
  .populate('driver')
  .then(car => {
    res.render('cars/show', {
      title: "Car Details",
      car
    })
  })
}

function deleteCar(req, res){
  Car.findByIdAndDelete(req.params.id, function (err, car) {
    res.redirect('/')
  })
}

export {
  newCar as new,
  create,
  show,
  deleteCar as delete
}

