import {Router} from 'express';
import {login, register,logout,profile,verifyToken} from '../controllers/auth.controller.js';
import { authRequired } from '../middleware/validateToken.js';
const router = Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.get("/profile",authRequired,profile)
router.get("/verify",verifyToken)

export default router