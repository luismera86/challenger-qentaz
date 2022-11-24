import { request, response } from 'express'

import Airline from '../models/airLine.model.js'

export const getAirlines = async (req = request, res = response) => {
	console.log('entra')
	try {
		const airLines = await Airline.findAll()
		res.status(200).json({ airLines })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postAirline = async (req = request, res = response) => {
	const { body } = req
	try {
		const newAirline = await Airline.create(body)
		res.status(201).json({
			msg: 'New airline created',
			newAirline,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putAirline = async (req = request, res = response) => {
	const { body } = req
	try {
		const updateAirline = new Airline(body)

		res.status(200).json({
			msg: 'Airline Updated',
			updateAirline
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteAirline = async (req = request, res = response) => {
	try {
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
