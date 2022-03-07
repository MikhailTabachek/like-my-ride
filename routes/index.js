import { Router } from 'express'

const router = Router()

import { isLoggedIn } from '../middleware/middleware.js'

import * as indexCtrl from '../controllers/index.js'

router.get('/', indexCtrl.index)

// router.get('/', indexCtrl.show)


export {
  router
}
