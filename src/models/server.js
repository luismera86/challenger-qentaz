import cors from 'cors'
import { db } from '../config/db.config.js'
import express from 'express'
import router from '../routes/index.js'

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3000'
		this.db = db
		
		this.listen()
		this.dbConnection()
		this.middlewares()
		this.router()
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server connected on port ${this.port}`)
		})
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.static('public'))
	}

	router() {
		this.app.use('/api', router)
	}

	async dbConnection() {
		await this.db.sync({force: false})
		try {
			console.log('DB Connected')
		} catch (error) {
			console.log(error)
		}
	}
}

export default Server

