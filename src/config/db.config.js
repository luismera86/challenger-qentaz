import { Sequelize } from 'sequelize'

export const db = new Sequelize('pruebas', '', '', {
	host: 'localhost',
	port: '5432',
    dialect: 'postgres',
    username:'postgres',
    password: 'luis',
})
