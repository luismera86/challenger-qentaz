import { addDataInDb, deleteFlight, getFlights, postFlight, putFlight } from '../controllers/flights.controller.js'

import { Router } from 'express'
import { checkFlightId } from '../middlewares/checkId.js'

const flightsRoutes = Router()

flightsRoutes.get('/', getFlights)
flightsRoutes.post('/', postFlight)
flightsRoutes.post('/add', addDataInDb)
flightsRoutes.put('/:id', checkFlightId, putFlight)
flightsRoutes.delete('/:id', checkFlightId, deleteFlight)

export default flightsRoutes
