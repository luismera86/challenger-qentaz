import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Api Challenger Qentaz documentation',
		version: '1.0.0',
	},
	servers: [
		{
			url: 'http://localhost:3000/',
		},
		{
			url: 'http://localhost:8080/',
		},
	],
	components: {
		schemas: {
			airline: {
				type: 'object',
				properties: {
					IATA_CODE: {
						type: 'string',
					},
					AIRLINE: {
						type: 'string',
					},
				},
			},
		},
	},
}

const swaggerOptions = {
	swaggerDefinition,
	apis: ['./src/docs/**/*.yaml'],
}

export default swaggerJSDoc(swaggerOptions)
