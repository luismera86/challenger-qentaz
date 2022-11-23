import { DataTypes } from 'sequelize'
import { db } from '../config/db.config.js'

const AirLine = db.define('AirLine', {
	IATA_CODE: {
		type: DataTypes.TEXT,
	},
	AIRLINE: {
		type: DataTypes.TEXT,
	},
})

export default AirLine
