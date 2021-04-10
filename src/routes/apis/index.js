import express from 'express'
import resultController from '../../controllers/resultController'

const router = express.Router()

router.post('/posts', resultController.addItems)
router.post('/items', resultController.getTax)

export default router
