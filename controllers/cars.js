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

function edit(req, res){
  Car.findById(req.params.id)
  .then(car => {
    if (car.driver.equals(req.user.profile._id)){
      res.render('cars/edit', {
        car,
        title: "Edit your car"
        })
      } else {
        alert(" You cant edit this post")
    }
  })
  .catch(err => {
    res.redirect('/')
  })
}

function update(req, res){
Car.findById(req.params.id)
.then(car => {
  if (car.driver.equals(req.user.profile._id)) {
    req.body.forSale = !!req.body.forSale
    car.updateOne(req.body, {new: true})
    .then(() => {
      res.redirect(`/cars/${car._id}`)
  })
} else {
  throw new Error (" You cant edit this post")
}
})
.catch(err => {
  res.redirect("/")
})
}

function addReviews (req, res) {
  Car.findById(req.params.id, function(err, car){
    car.rating.push(req.body)
    car.save(err => {
      res.redirect(`/cars/${car._id}`)
    })
  })
}

export {
  newCar as new,
  create,
  show,
  deleteCar as delete,
  edit,
  update,
  addReviews
}

