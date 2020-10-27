export default app => {
	app.use('/', (req, res) => res.send('Hello world'));
}