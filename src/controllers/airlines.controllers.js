import { request, response } from 'express'

export const getAirlines = (req = request, res = response) => {
	console.log('entra')
	try {
		res.status(200).json({ msg: 'Hola'})
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postAirline = async (req = request, res = response) => {
	try {
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putAirline = async (req = request, res = response) => {
	try {
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
