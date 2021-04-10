import express from 'express'
import pageController from '../../controllers/pageController'

const router = express.Router()

router.get('/', pageController.userPage)

export default router
