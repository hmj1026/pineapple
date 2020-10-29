import { Router } from 'express';
import PostController from '../controllers/post'

const router = new Router();

router.get('/', (req, res) => {
    PostController.index(req, res)
});

export default router;