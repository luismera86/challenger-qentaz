import { deleteFlight, getFlights, postFlight, putFlight } from '../controllers/flights.controllers.js'

import { Router } from 'express'

const flightsRoutes = Router()

flightsRoutes.get('/', getFlights)
flightsRoutes.post('/', postFlight)
flightsRoutes.put('/', putFlight)
flightsRoutes.delete('/', deleteFlight)

export default flightsRoutes
