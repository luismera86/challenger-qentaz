import cors from 'cors'
import { db } from '../config/db.config.js'
import express from 'express'
import router from '../routes/index.js'

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3000'
		this.db = db
		this.router()
		this.middlewares()
		this.dbConnection()
		this.listen()
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server connected on port ${this.port}`)
		})
	}

	middlewares() {
		this.app.use(express.static('public'))
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.json())
		this.app.use(cors)
	}

	router() {
		this.app.use('/api', router)
	}

	async dbConnection() {
		await this.db.sync()
		try {
			console.log('DB Connected')
		} catch (error) {
			console.log(error)
		}
	}
}

export default Server

