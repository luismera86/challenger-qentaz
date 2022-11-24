import { DataTypes } from 'sequelize'
import { db } from '../config/db.config.js'

const Airline = db.define('Airlines', {
	IATA_CODE: {
		type: DataTypes.TEXT,
	},
	AIRLINE: {
		type: DataTypes.TEXT,
	},
})

export default Airline
