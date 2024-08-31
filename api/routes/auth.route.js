import express from 'express'
import { google, signin, signup ,signout} from '../controllers/auth.controller.js';
import cookieParser from 'cookie-parser';
import { configDotenv } from "dotenv";

const router = express.Router();


router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google)
router.get('/signout',signout)

export default router;