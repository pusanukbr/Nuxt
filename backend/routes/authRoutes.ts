import express from 'express';
import { getUserInfo, loginUser, registerUser  } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';
import upload from "../middleware/uploadMiddleware";
import {fileController} from "../controllers/filesController";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', protect, getUserInfo);

router.post('/upload-avatar', [protect, upload.single('avatar')], fileController)

export default router;