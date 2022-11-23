import { deleteAirport, getAirports, postAirport, putAirport } from '../controllers/airports.controllers.js'

import { Router } from 'express'

const airPortsRoutes = Router()

airPortsRoutes.get('/', getAirports)
airPortsRoutes.post('/', postAirport)
airPortsRoutes.put('/', putAirport)
airPortsRoutes.delete('/', deleteAirport)

export default airPortsRoutes
