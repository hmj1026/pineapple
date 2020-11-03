export default class Home {
    constructor (db) {
        this.db = db
    }

	async index(req, res) {
		try {
            const users = await this.db['User'].findAll({ raw: true }) || []
            console.log('index', users)
            res.render('index', {
                title: 'index',
                content: 'Hello World'
            });
		} catch (err) {
			res.send(err);
		}
    }
}