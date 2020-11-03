export default class Post {
    constructor (db) {
        this.db = db
    }

    index (req, res) {
        try {   
            const postParam = req.body.test || ''
            const postQuery = req.query.test || ''
            
            res.render('index', {
                title: 'index', 
                content: `Hello Post ${postParam} ${postQuery}`,
            })
        } catch (err) {
            console.error(err)
            res.send(err)
        }
    }
}