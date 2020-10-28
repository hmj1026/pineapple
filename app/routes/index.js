export default (app) => {
	app.use('/', (req, res) => res.render('index', {
		title: 'index', 
		content: 'Hello World',
	}));
};
