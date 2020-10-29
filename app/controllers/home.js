class Home {
    index (req, res) {
        try {
            res.render('index', {
                title: 'index', 
                content: 'Hello World',
            })
        } catch (err) {
            res.send(err)
        }
    }
}

export default new Home;