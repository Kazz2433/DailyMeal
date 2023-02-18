import {Router} from 'express'
import {foodController} from '../controllers/foodController'

const foodcontroller = new foodController()

export const router = Router()

router.get('/',foodcontroller.getFood)