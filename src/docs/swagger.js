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
			airport: {
				type: 'object',
				properties: {
					IATA_CODE: {
						type: 'string',
					},
					AIRPORT: {
						type: 'string',
					},
					CITY: {
						type: 'string',
					},
					STATE: {
						type: 'string',
					},
					COUNTRY: {
						type: 'string',
					},
					LATITUDE: {
						type: 'float',
					},
					LONGITUDE: {
						type: 'float',
					},
				},
			},
			flight: {
				type: 'object',
				properties: {
					YEAR: {
						type: 'integer',
					},
					MONTH: {
						type: 'integer',
					},
					DAY: {
						type: 'integer',
					},
					DAY_OF_WEEK: {
						type: 'integer',
					},
					AIRLINE: {
						type: 'string',
					},
					FLIGHT_NUMBER: {
						type: 'integer',
					},
					TAIL_NUMBER: {
						type: 'string',
					},
					ORIGIN_AIRPORT: {
						type: 'string',
					},
					DESTINATION_AIRPORT: {
						type: 'string',
					},
					SCHEDULED_DEPARTURE: {
						type: 'integer',
					},
					DEPARTURE_TIME: {
						type: 'integer',
					},
					DEPARTURE_DELAY: {
						type: 'integer',
					},
					TAXI_OUT: {
						type: 'integer',
					},
					WHEELS_OFF: {
						type: 'integer',
					},
					SCHEDULED_TIME: {
						type: 'integer',
					},
					ELAPSED_TIME: {
						type: 'integer',
					},
					AIR_TIME: {
						type: 'integer',
					},
					DISTANCE: {
						type: 'integer',
					},
					WHEELS_ON: {
						type: 'integer',
					},
					TAXI_IN: {
						type: 'integer',
					},
					SCHEDULED_ARRIVAL: {
						type: 'integer',
					},
					ARRIVAL_TIME: {
						type: 'integer',
					},
					ARRIVAL_DELAY: {
						type: 'integer',
					},
					DIVERTED: {
						type: 'integer',
					},
					CANCELLED: {
						type: 'integer',
					},
					CANCELLATION_REASON: {
						type: 'string',
					},
					AIR_SYSTEM_DELAY: {
						type: 'string',
					},
					SECURITY_DELAY: {
						type: 'string',
					},
					AIRLINE_DELAY: {
						type: 'string',
					},
					LATE_AIRCRAFT_DELAY: {
						type: 'string',
					},
					WEATHER_DELAY: {
						type: 'string',
					},
				}
			}
		},
	},
}

const swaggerOptions = {
	swaggerDefinition,
	apis: ['./src/docs/**/*.yaml'],
}

export default swaggerJSDoc(swaggerOptions)
