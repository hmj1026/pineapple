import './config';
import express from 'express';
import exhbs from 'express-handlebars';
import path from 'path';
import router from './routes';

const app = express();
const port = process.env.PORT || 8080;

app.engine(
	'hbs',
	exhbs({
		layoutsDir: path.join(__dirname, 'views/layouts'),
		partialsDir: path.join(__dirname, 'views/partials'),
		defaultLayout: 'base',
		extname: 'hbs',
	})
);
app.set('view engine', 'hbs');
app.use(express.static('public'));

//for cors
app.all('*', (req, res, next) => {
	const { origin, Origin, referer, Referer } = req.headers;
	const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header('Access-Control-Allow-Origin', allowOrigin);
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Credentials', true); //setup for cookies
	res.header('X-Powered-By', 'Express');

	if (req.method == 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

router(app);

const server = app.listen(port, () => {
	console.log('server running at http://%s:%s', server.address().address, port);
});
