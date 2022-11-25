import { addDataInDb, deleteAirport, getAirports, postAirport, putAirport } from '../controllers/airports.controller.js'

import { Router } from 'express'
import { checkAirportId } from '../middlewares/checkId.js'

const airportsRoutes = Router()

airportsRoutes.get('/', getAirports)
airportsRoutes.post('/', postAirport)
airportsRoutes.post('/add', addDataInDb)
airportsRoutes.put('/:id', checkAirportId, putAirport)
airportsRoutes.delete('/:id', checkAirportId, deleteAirport)

export default airportsRoutes
