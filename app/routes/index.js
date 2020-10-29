import HomeRoute from './home'
import PostRoute from './post'

export default app => {
    app.use('/', HomeRoute)
    app.use('/post', PostRoute)
}