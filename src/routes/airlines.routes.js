import { addDataInDb, deleteAirline, getAirlines, postAirline, putAirline } from '../controllers/airlines.controller.js'

import { Router } from 'express'
import { checkAirlineId } from '../middlewares/checkId.js'

const airlinesRoutes = Router()

airlinesRoutes.get('/', getAirlines)
airlinesRoutes.post('/', postAirline)
airlinesRoutes.post('/add', addDataInDb)
airlinesRoutes.put('/:id', checkAirlineId, putAirline)
airlinesRoutes.delete('/:id', checkAirlineId, deleteAirline)

export default airlinesRoutes
