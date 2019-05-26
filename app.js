const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGO_DB_URI =
	'mongodb+srv://Vasyl:Qw12Op34@cluster0-5yk5t.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
	uri: MONGO_DB_URI,
	collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({ secret: 'my secret', resave: false, saveUnitialized: false, store })
);

app.use((req, res, next) => {
	if (!req.session.user) {
		return next();
	}
	User.findById(req.session.user._id)
		.then(user => {
			req.user = user;
			next();
		})
		.catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
	.connect(MONGO_DB_URI)
	.then(res => {
		User.findOne().then(user => {
			if (!user) {
				const user = new User({
					name: 'Vasyl',
					email: 'email@test.com',
					cart: {
						items: []
					}
				});
				user.save();
			}
		});

		app.listen(3000);
	})
	.catch(err => console.log('err', err));
