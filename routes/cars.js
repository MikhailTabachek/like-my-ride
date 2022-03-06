import { Router } from 'express'

const router = Router()

import * as carsCtrl from '../controllers/cars.js'

router.get('/cars', carsCtrl.index)

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Like My Ride!', user: req.user ? req.user : null })
// })

export {
  router
}