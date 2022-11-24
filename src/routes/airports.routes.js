import { deleteAirport, getAirports, postAirport, putAirport } from '../controllers/airports.controllers.js'

import { Router } from 'express'
import { checkAirportId } from '../middlewares/checkId.js'

const airPortsRoutes = Router()

airPortsRoutes.get('/', getAirports)
airPortsRoutes.post('/', postAirport)
airPortsRoutes.put('/:id', checkAirportId, putAirport)
airPortsRoutes.delete('/:id', checkAirportId, deleteAirport)

export default airPortsRoutes
