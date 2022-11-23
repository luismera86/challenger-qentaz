import express from 'express'

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3000'

        this.middlewares()
        // router
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
    }
    
}

export default Server
