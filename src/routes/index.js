import { Router } from 'express'
import airPortsRoutes from './airports.routes.js'
import airlinesRoutes from './airlines.routes.js'
import flightsRoutes from './flights.routes.js'

const router = Router()

router.use('/airline', airlinesRoutes)
router.use('/airport', airPortsRoutes)
router.use('/flight', flightsRoutes)

export default router
