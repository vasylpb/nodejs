const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
	MongoClient.connect(
		'mongodb+srv://Vasyl:Qw12Op34@cluster0-5yk5t.mongodb.net/shop?retryWrites=true'
	)
		.then(client => {
			console.log('Connected!');
			_db = client.db();
			callback();
		})
		.catch(err => {
			console.log(err);
			throw err;
		});
};

const getDb = () => {
	if (_db) {
		return _db;
	}
	throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
