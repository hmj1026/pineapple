import { Router } from 'express';
import Home from '../controllers/home'
import db from '../models';

const router = new Router();
const home = new Home(db);

router.get('/', (req, res) => home.index(req, res));

export default router;