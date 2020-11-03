import { Router } from 'express';
import Post  from '../controllers/post'
import db from '../models';

const router = new Router();
const post = new Post(db);

router.route('/')
    .get((req, res) => post.index(req,res))
    .post((req, res) => post.index(req,res))

export default router;