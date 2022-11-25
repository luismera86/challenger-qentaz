import { db } from '../config/db.config.js'
import express from 'express'
import router from '../routes/index.js'
import swaggerSetup from '../docs/swagger.js'
import swaggerUi from 'swagger-ui-express'

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3000'
		this.db = db
		this.swaggerUi = swaggerUi

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
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.static('public'))
		this.app.use('/documentation', this.swaggerUi.serve, this.swaggerUi.setup(swaggerSetup))
	}

	router() {
		this.app.use('/api', router)
	}

	async dbConnection() {
		await this.db.sync({ force: false })
		try {
			console.log('DB Connected')
		} catch (error) {
			console.log(error)
		}
	}
}

export default Server
