import { request, response } from 'express'

import Airport from '../models/airport.model.js'

export const getAirports = async (req = request, res = response) => {
	try {
		const airports = await Airport.findAll()
		res.status(200).json({ airports })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postAirport = async (req = request, res = response) => {
	const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE } = req.body
	try {
		const airport = await Airport.findOne({ where: { AIRPORT } })
		if (airport) {
			return res.status(401).json({ msg: 'This Airport is already registered' })
		}

		const newAirPort = await Airport.create({ IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE })

		res.status(201).json({
			msg: 'New Airport created',
			newAirPort,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putAirport = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		if (!airport) {
			return res.status(401).json({ msg: `The airport with the id ${id} does not exist1` })
		}

		await airport.update(req.body)

		res.status(200).json({
			msg: 'Airport successfully upgraded',
			airport,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteAirport = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		if (!airport) {
			return res.status(401).json({ msg: `The airport with the id ${id} does not exist1` })
		}

		await airport.destroy()

		res.status(200).json({ msg: 'Airline successfully eliminated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
