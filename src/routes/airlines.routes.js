import { deleteAirline, getAirlines, postAirline, putAirline } from '../controllers/airlines.controllers.js'

import { Router } from 'express'

const airLinesRoutes = Router()

airLinesRoutes.get('/', getAirlines)
airLinesRoutes.post('/', postAirline)
airLinesRoutes.put('/', putAirline)
airLinesRoutes.delete('/', deleteAirline)

export default airLinesRoutes
