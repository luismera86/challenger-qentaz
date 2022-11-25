import { Router } from 'express'
import airlinesRoutes from './airlines.routes.js'
import airportsRoutes from './airports.routes.js'
import flightsRoutes from './flights.routes.js'

const router = Router()

router.use('/airline', airlinesRoutes)
router.use('/airport', airportsRoutes)
router.use('/flight', flightsRoutes)

export default router
