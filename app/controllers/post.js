class Post {
    index (req, res) {
        try {
            res.render('index', {
                title: 'index', 
                content: 'Hello Post',
            })
        } catch (err) {
            res.send(err)
        }
    }
}

export default new Post;