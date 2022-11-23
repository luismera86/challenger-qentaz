import { request, response } from 'express'

export const getAirports = async (req = request, res = response) => {
	try {
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const postAirport = async (req = request, res = response) => {
	try {
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const putAirport = async (req = request, res = response) => {
	try {
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

export const deleteAirport = async (req = request, res = response) => {
	try {
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}
