import { Sequelize } from 'sequelize'

export const db = new Sequelize('pruebas', '', '', {
	host: '127.0.0.1',
	port: '5432',
    dialect: 'postgres',
    username:'postgres',
    password: 'luismera2406',
})
