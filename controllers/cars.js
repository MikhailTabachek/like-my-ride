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
  req.body.commentBy = req.user.profile.name
  req.body.commentById = req.user.profile._id
  Car.findById(req.params.id, function(err, car){
    car.rating.push(req.body)
    car.save(err => {
      res.redirect(`/cars/${car._id}`)
    })
  })
}

function deleteReview (req, res){
  Car.findById(req.params.id, function(err, car){
    const ratings = car.rating
    let index = 0
    ratings.forEach(rating => {
      if(rating._id.toString() === req.params.ratingId){
        index = ratings.indexOf(rating)
      }
    })
    ratings.splice(index, 1)
    car.rating = ratings
    car.save(err => {
      res.redirect(`/cars/${car._id}`)
    })
  })
}

function sorted(req,res){
  res.render('cars/sorted', {
    title: "Like my Ride"
  })
}

export {
  newCar as new,
  create,
  show,
  deleteCar as delete,
  edit,
  update,
  addReviews,
  deleteReview,
  sorted
}

