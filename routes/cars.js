import { Router } from 'express'

const router = Router()

import { isLoggedIn } from '../middleware/middleware.js'

import * as carsCtrl from '../controllers/cars.js'

// router.get('/', isLoggedIn, carsCtrl.index)

router.get('/new', isLoggedIn, carsCtrl.new)

router.get('/:id', carsCtrl.show)

router.get('/:id/edit', isLoggedIn, carsCtrl.edit)

router.post('/',isLoggedIn, carsCtrl.create)

router.put('/:id', isLoggedIn, carsCtrl.update)

router.delete('/:id', isLoggedIn, carsCtrl.delete)

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Like My Ride!', user: req.user ? req.user : null })
// })

export {
  router
}