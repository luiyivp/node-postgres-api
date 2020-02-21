import Sequelize from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: '192.168.239.128',
    dialect: 'postgres',
    pool: { max: 5, min: 0, require: 30000, idle: 10000 }
});
