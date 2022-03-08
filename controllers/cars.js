import methodOverride from 'method-override'
import { Car } from '../models/car.js'
import { User } from '../models/user.js'


function newCar(req,res){
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

function edit(res, req){
  methodOverride.findById(req.params.id)
  .then(car => {
    res.render('cars/edit', {
      car,
      title: "Edit your car"
    })
  })
  .catch(err => {
    res.redirect('/cars/:id')
  })
}

export {
  newCar as new,
  create,
  show,
  deleteCar as delete,
  edit
}

