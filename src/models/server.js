import cors from 'cors'
import express from 'express'
import router from '../routes'

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3000'

        this.middlewares()
        this.router()
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
}

export default Server
