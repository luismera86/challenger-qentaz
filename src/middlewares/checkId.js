import { request, response } from 'express'

import Airline from '../models/airline.model.js'

export const checkAirlineId = async (req = request, res = response, next) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)
		if (!airline) {
			return res.status(401).json({ msg: `The airline with the id ${id} does not exist` })
        }
        
        next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
