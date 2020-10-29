import Sequelize from 'sequelize';

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
    host: 'db',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT+8'
    },
    timezone: 'Etc/GMT+8',
    define: {
        charset: 'utf8mb4_general_ci',
        dialectOptions: {
            collate: 'utf8mb4_general_ci',
            timezone: 'Etc/GMT+8'
        }
    },
    sync: { 
        force: false
    },
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Database connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

export default sequelize