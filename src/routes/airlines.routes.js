import { deleteAirline, getAirlines, postAirline, putAirline } from '../controllers/airlines.controllers.js'

import { Router } from 'express'

const airlinesRoutes = Router()

airlinesRoutes.get('/', getAirlines)
airlinesRoutes.post('/', postAirline)
airlinesRoutes.put('/:id', putAirline)
airlinesRoutes.delete('/:id', deleteAirline)

export default airlinesRoutes
