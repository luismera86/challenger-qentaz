import { Sequelize } from 'sequelize'

export const db = new Sequelize('pruebas', '', '', {
	host: '127.0.0.1',
	port: '5432',
	dialect: 'postgres',
	username: 'postgres',
    password: 'luismera2406',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})
