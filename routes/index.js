import { Router } from 'express'

const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'

import * as indexCtrl from '../controllers/index.js'

router.get('/', indexCtrl.index)

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Like My Ride!', user: req.user ? req.user : null })
// })

export {
  router
}
