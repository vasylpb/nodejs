const Sequalize = require('sequelize');

const sequelize = new Sequalize('node-complete', 'root', 'Qw12Op34', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = sequelize;
