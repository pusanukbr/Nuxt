import express from 'express';
import { getUserInfo, loginUser, registerUser  } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    protect(req, res, next).catch(next);
}, getUserInfo);

export default router;