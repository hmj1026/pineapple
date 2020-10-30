'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				comment: '名稱',
			},
			email: {
				type: Sequelize.STRING,
				defaultValue: '',
				unique: true,
				comment: '信箱',
			},
			email_verified_at: {
				type: Sequelize.DATE,
				allowNull: true,
				comment: '驗證日期',
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
				comment: '密碼',
			},
			remember_token: {
				type: Sequelize.STRING(100),
				allowNull: true,
				comment: 'token',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
