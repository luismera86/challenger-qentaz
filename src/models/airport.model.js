import { DataTypes } from 'sequelize'
import { db } from '../config/db.config.js'

const Airport = db.define('Airports', {
    IATA_CODE: {
		type: DataTypes.TEXT,
	},
    AIRPORT: {
		type: DataTypes.TEXT,
	},
    CITY: {
		type: DataTypes.TEXT,
	},
    STATE: {
		type: DataTypes.TEXT,
	},
    COUNTRY: {
		type: DataTypes.TEXT,
	},
    LATITUDE: {
		type: DataTypes.FLOAT,
	},
    LONGITUDE: {
		type: DataTypes.FLOAT,
	},

})

export default Airport
