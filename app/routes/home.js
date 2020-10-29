import { Router } from 'express';
import HomeController from '../controllers/home'

const router = new Router();

router.get('/', (req, res) => {
    HomeController.index(req, res)
});

export default router;