import { request, response } from 'express'

import Airline from '../models/airline.model.js'

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
	const { IATA_CODE, AIRLINE } = req.body
	try {
		const airline = await Airline.findOne({ where: { AIRLINE } })
		if (airline) {
			return res.status(401).json({ msg: 'This airline is already registered' })
		}
		console.log(airline)
		const newAirline = await Airline.create({ IATA_CODE, AIRLINE })
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
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)
		await airline.update(req.body)

		res.status(200).json({
			msg: 'Airline successfully upgraded',
			airline,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteAirline = async (req = request, res = response) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)

		await airline.destroy()
		res.status(200).json({ msg: 'Airline successfully eliminated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
