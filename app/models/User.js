'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				comment: '名稱',
			},
			email: {
				type: DataTypes.STRING,
				defaultValue: '',
				unique: true,
				comment: '信箱',
			},
			email_verified_at: {
				type: DataTypes.DATE,
				allowNull: true,
				comment: '驗證日期',
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				comment: '密碼',
			},
			remember_token: {
				type: DataTypes.STRING(100),
				allowNull: true,
				comment: 'token',
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
