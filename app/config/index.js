require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: 'mariadb',
		dialectOptions: {
			timezone: 'Etc/GMT+8',
		},
		pool: {
			max: 5,
			min: 0,
			idle: 10000,
		},
		timezone: 'Etc/GMT+8',
		define: {
			charset: 'utf8mb4_general_ci',
			dialectOptions: {
				collate: 'utf8mb4_general_ci',
				timezone: 'Etc/GMT+8',
			},
		},
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};
