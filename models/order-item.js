const Sequalize = require('sequelize');

const sequalize = require('../utils/database');

const OrderItem = sequalize.define('order-item', {
	id: {
		type: Sequalize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	quantity: Sequalize.INTEGER
});

module.exports = OrderItem;
