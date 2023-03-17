import { Router } from 'express';
import * as userControllers from '../controllers/userController';

const router = Router();
router.get('/', userControllers.getAll);

export default router;