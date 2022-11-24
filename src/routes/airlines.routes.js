import { deleteAirline, getAirlines, postAirline, putAirline } from '../controllers/airlines.controllers.js'

import { Router } from 'express'
import { checkAirlineId } from '../middlewares/checkId.js'

const airlinesRoutes = Router()

airlinesRoutes.get('/', getAirlines)
airlinesRoutes.post('/', postAirline)
airlinesRoutes.put('/:id', checkAirlineId, putAirline)
airlinesRoutes.delete('/:id', deleteAirline)

export default airlinesRoutes
