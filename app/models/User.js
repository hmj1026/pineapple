import { DataTypes, Model } from 'sequelize';
import { database } from '../database';

class User extends Model {

}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '名稱'
    },
    email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: true,
        comment: '信箱'
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: '驗證日期'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密碼'
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'token'
    }
}, {
    database,
    modelName: 'User',
    tableName: 'Users'
})