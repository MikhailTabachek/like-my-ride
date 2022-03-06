import { Router } from 'express'

const router = Router()

import { isLoggedIn } from '../middleware/middleware.js'

import * as carsCtrl from '../controllers/cars.js'

router.get('/new', isLoggedIn, carsCtrl.new)

router.post('/', carsCtrl.create)

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Like My Ride!', user: req.user ? req.user : null })
// })

export {
  router
}