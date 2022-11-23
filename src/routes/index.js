import { Router } from 'express'
import airLinesRoutes from './airlines.routes.js'
import airPortsRoutes from './airports.routes.js'
import flightsRoutes from './flights.routes.js'

const router = Router()

router.use('/airline', airLinesRoutes)
router.use('/airport', airPortsRoutes)
router.use('/flight', flightsRoutes)

export default router
